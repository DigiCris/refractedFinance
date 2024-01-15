// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HedgeCoin is ERC20, ERC20Pausable, Ownable {

    mapping (address => uint256) public _rOwned;
    mapping (address => uint256) public _tOwned;
    uint256 public constant _tTotal = 40 * 10**6 * 10**18;
    uint256 public q_init;
    uint256 public q;
    mapping (address => bool) public _isExcluded;
    mapping (address => int256) private fee;
    uint256 public defaultAStkFee;
    uint256 public _te;
    uint256 public _tn;
    uint256 public _rTotal;
    uint256 private rQuemado;
    mapping(address => int256) private devFee;
    uint256 public defaultDevFee;
    address public devWallet;
    mapping(address => uint256) private maxTransaction;
    uint256 public defaultMaxTx;
    mapping(address => uint256) private maxInWallet;
    uint256 public defaultMaxWallet;
    mapping(address => bool) public blacklist;
    uint256 public ingreso;

    constructor(address _ownerToken) ERC20("HedgeCoin", "HDGC") Ownable(_ownerToken) { 
        _tn = _tTotal;
        _rTotal = _tTotal;
        defaultAStkFee = 100;
        defaultDevFee=25;
        devWallet = _ownerToken;
        _update(address(0), _ownerToken,  20000000 * 10 ** decimals());
        _rOwned[_ownerToken] = 20000000 * 10 ** decimals();
        rQuemado = 20000000 * 10 ** decimals();
        _tOwned[_ownerToken] = 20000000 * 10 ** decimals();
        q= 1 * 10 ** decimals();
        q_init = q;
        defaultMaxTx = 10000 * 10 ** decimals();
        defaultMaxWallet = 100000 * 10 ** decimals();
    }

    function totalSupply() public view override returns (uint256) {
        return _tTotal - tokenFromReflection(rQuemado);
    }

    function balanceOf(address account) public view override returns (uint256) {
        if (_isExcluded[account]) return _tOwned[account];
        return tokenFromReflection(_rOwned[account]);
    }

    function tokenFromReflection(uint256 rAmount) public view returns(uint256) {
        require(rAmount <= _rTotal, "Amount < total reflections");
        rAmount *= q_init;
        rAmount /= q;
        return rAmount;
    } 

    function aStkFee(address _addr) public view returns(uint256 _fee){
         if (_isExcluded[_addr]){
            _fee = uint256(fee[_addr]);
            if(_fee>10000){
                _fee=0;
            }
         }else{
            int256 __fee = fee[_addr];
            if(__fee == 0) {
                __fee = int256(defaultAStkFee); 
            }
            if(__fee < 0){
                __fee = 0;
            }
            _fee = uint256(__fee);
         }
         return (_fee);
    }

    function maxTx(address _addr) public view returns(uint256 _value) {
        _value = maxTransaction[_addr];
        if(_value!=0) {
            return(_value);
        } else {
            return(defaultMaxTx);
        }
    }

    function maxWallet(address _addr) public view returns(uint256 _value) {
        _value = maxInWallet[_addr];
        if(_value!=0) {
            return(_value);
        } else {
            return(defaultMaxWallet);
        }
    }

    function readDevFee(address _addr) public view returns(uint256) {
        int _value = devFee[_addr];
        if(_value<0) {
            return 0;
        }
        if(_value!=0) {
            return(uint256(_value));
        } else {
            return(defaultDevFee);
        }
    }

    function estAStkFee(address _addr) public view returns(int256) {
        return fee[_addr];
    }

    function transfer(address to, uint256 value) public override returns (bool) {
        _transferR(_msgSender(), to, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public override returns (bool) {
        address spender = _msgSender();
        require(!blacklist[spender], "spender is blacklisted");
        _spendAllowance(from, spender, value);
        _transferR(from, to, value);
        return true;
    }

    function _transferStandard(address sender, address recipient, uint256 tAmount) private {
        uint256 rAmount = tAmount * q/q_init; //10000
        int256 _fee = fee[sender];
        if(_fee == 0) {
            _fee = int256(defaultAStkFee); 
        } else if(_fee < 0){
            _fee = 0;
        }
        uint256 rfee = uint256(_fee) * rAmount /10000; // 100
        uint256 rDev = readDevFee(sender) * rAmount / 10000; // 0

    // Agreegado para separar las transferencias y la quema y emitir log
        //uint256 tDev = rDev * q_init / q;
        //uint256 tfee = uint256(_fee) * tAmount /10000;
        //uint256 transferRealAmount = tAmount - tfee - tDev; 

        _rOwned[sender] -= rAmount; // 19.990.000
        rAmount -= (rfee + rDev); //  9900
        _rOwned[recipient] += rAmount; // 9900
        _rTotal -= rfee; // 39.999.900
        _rOwned[devWallet] += rDev; // 0
        q = q_init * _rTotal / _tn; // 0.9999975

    // emision de log de transferencia y quema
        emit Transfer(sender, recipient, tAmount);
        /*
        emit Transfer(sender, recipient, transferRealAmount);
        emit Transfer(sender, devWallet, tDev);
        emit Burn(sender,tfee);
        */
    }

    function _transferToExcluded(address sender, address recipient, uint256 tAmount) private {
        uint256 rAmount = tAmount * q/q_init; //10k
        int256 _fee = fee[sender];
        if(_fee == 0) {
            _fee = int256(defaultAStkFee); 
        } else if(_fee < 0){
            _fee = 0;
        }
        uint256 rDev = readDevFee(sender) * rAmount / 10000; // 0
        uint256 tDev = rDev * q_init / q; // 0
        uint256 tfee = uint256(_fee) * tAmount /10000;// 100
        uint256 transferRealAmount = tAmount - tfee - tDev;  // 10k-100 = 9900
        _tOwned[recipient] +=  transferRealAmount; // 9900
        if(_isExcluded[devWallet]){ // devWallet es excluida
            _tn -= tAmount - tfee; // le resto el tAmount pero le sumo los fees que ganan = 39.990.100
            _te += tAmount - tfee; // le sumo el amount y le resto el fee que se reparte
            _rTotal -= rAmount;
        }else{ // devWallet no es excluida
            _tn -= tAmount - (tfee+tDev); // le resto tAmount, le sumo los fees y el dev fee
            _te += transferRealAmount; // le sumo tAmount pero le resto los dos fees
            _rTotal -= rAmount - rDev;
        } // _rTotal = 39.990.000
        _rOwned[sender] -= rAmount; // 19.990.000
        _rOwned[devWallet] += rDev; // 0
        q = q_init * _rTotal / _tn; // 39.990.000/39.990.100 = 0.999997499
        emit Transfer(sender, recipient, transferRealAmount);
        emit Transfer(sender, devWallet, tDev);
        emit Burn(sender,tfee);
    }

    event Burn(address indexed sender, uint256 taxPaid);

    function _transferFromExcluded(address sender, address recipient, uint256 tAmount) private {
        uint256 _fee = uint256(fee[sender]);
        if(_fee>10000){
            _fee=0;
        }
        uint256 tFee = _fee * tAmount /10000;//0
        uint256 rFee = tFee * q/q_init; //0
        uint256 rAmount = tAmount * q/q_init; //9975
        uint256 rDev = readDevFee(sender) * rAmount / 10000; //0
        rAmount -= rFee; // 9975
        _te -= tAmount;
        _tn += tAmount;
        _rTotal += rAmount;
        _tOwned[sender] -= tAmount; // 0
        _rOwned[recipient] += rAmount - rDev; //9975
        _rOwned[devWallet] += rDev; //0
        q = q_init * _rTotal / _tn;
        emit Transfer(sender, recipient, tAmount);
    }

    function _transferBothExcluded(address sender, address recipient, uint256 tAmount) private {
        _tOwned[sender] -= tAmount;
        _tOwned[recipient] += tAmount;
        emit Transfer(sender, recipient, tAmount);
    }

    function _transferR(address sender, address recipient, uint256 amount) internal {
        require(!paused(),"Contract paused");
        require(maxTx(sender) >= amount, "You can't send so many tokens");
        require(maxWallet(recipient) >= (balanceOf(recipient)+amount), "can't receive so many tokens");
        require(!blacklist[sender], "No sendings from blacklists");
        require(!blacklist[recipient], "No receiving in blacklists");
        require(sender != address(0), "ERC20: transfer from 0 address");
        require(recipient != address(this), "ERC20: transfer to SC");
        require(amount > 0, "Transfer amount > zero");
        if (_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferFromExcluded(sender, recipient, amount);
        } else if (!_isExcluded[sender] && _isExcluded[recipient]) {
            _transferToExcluded(sender, recipient, amount);
        } else if (!_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferStandard(sender, recipient, amount);
        } else if (_isExcluded[sender] && _isExcluded[recipient]) {
            _transferBothExcluded(sender, recipient, amount);
        } else {
            _transferStandard(sender, recipient, amount);
        }
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Pausable){
        super._update(from, to, value);
    }

    function setDefaultAStkFee(uint256 _value) external onlyOwner() {
        require(_value<=100,"AStkFee can't be more than 1%");
        defaultAStkFee = _value;
    }

    function setMaxTx(address _addr, uint256 _value) external onlyOwner() {
        if(_value!=0){
            require(_value >= (10000*(10**decimals())), "maxTx can't be less than 10000");
        }
        maxTransaction[_addr] = _value;
    }

    function setDefaultMaxTx(uint256 _value) external onlyOwner() {
        require(_value >= (10000*(10**decimals())),"defaultMaxTx can't be less than 10000");
        defaultMaxTx = _value;
    }

    function setMaxWallet(address _addr, uint256 _value) external onlyOwner() {
        if(_value!=0){
            require(_value >= (100000*(10**decimals())), "maxWallet can't be less than 100000");
        }
        maxInWallet[_addr] = _value;
    }

    function setDefaultMaxWallet(uint256 _value) external onlyOwner() {
        require(_value >= (100000*(10**decimals())),"defaultMaxWallet can't be less than 100000");
        defaultMaxWallet = _value;
    }

    function setDevFee(address _addr, int256 _value) external onlyOwner() {
        require(_value <= 25, "devFee can't be more than 0.25%");
        devFee[_addr] = _value;
    }

    function setDefaultDevFee(uint256 _value) external onlyOwner() {
        require(_value <= 25, "defaultdevFee can't be more than 0.25%");
        defaultDevFee = _value;
    }

    function setDevWallet(address _addr) onlyOwner() external{
        devWallet = _addr;
    }

    function setBlacklist(address _addr, bool _value) external onlyOwner() {
        blacklist[_addr] = _value;
    }   

    function setAStkFee(address addr, bool isExcluded, int256 _fee) external onlyOwner {
        require(_fee<=100,"StkFee can't be more than 1%");
        if(_isExcluded[addr]!=isExcluded) {
            uint256 fund = balanceOf(addr);
            _isExcluded[addr] = isExcluded;
            if(isExcluded) {
                if(_fee<0){
                    _fee=0;
                }
                _tn -= fund;
                _te += fund;
                _tOwned[addr] = fund;
                _rTotal -= fund * q / q_init;
                ingreso = fund;
            }else {
                _tn += fund;
                _te -= fund;
                uint256 aux_rOwned = fund * q / q_init;
                _rOwned[addr] = aux_rOwned;
                _rTotal += aux_rOwned;
                ingreso = 0;
            }
        } else {
            ingreso = 1;
        }
        fee[addr] = _fee;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

}