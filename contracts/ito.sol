// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IToken {
    function transfer(address _to, uint256 _amount) external;
    function balanceOf(address _who) external returns(uint256);
}

// Address for interfaces, diferent pairs= https://docs.chain.link/data-feeds/price-feeds/addresses/

contract Ito is Ownable, ReentrancyGuard{
    AggregatorV3Interface internal precioBnb;
    address constant goerliAggrAddr = 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE;
    uint256 public tokenPriceInUSD; // 8 decimales
    IToken public token;
    IToken public wrongToken;
    address payable treasure;
    uint256 public maxBuyDefault;
    mapping (address => uint256) public maxBuy;
    mapping (address => uint256) private QuantityBought;

    constructor() Ownable(msg.sender){
        precioBnb = AggregatorV3Interface(goerliAggrAddr);
        tokenPriceInUSD = 1 ;
        treasure =payable (msg.sender);
        maxBuyDefault=10000000000000000000000;
    }

    function setMaxBuyDefault(uint256 _maxBuy) external onlyOwner {
        maxBuyDefault = _maxBuy;
    }

    function setMaxBuy(address _addr, uint256 _maxBuy) external onlyOwner {
        maxBuy[_addr] = _maxBuy;
    }

    function setTreasure(address payable _treasure) external onlyOwner {
        treasure = _treasure;
    }

    function setToken(address _token) external onlyOwner {
        token = IToken(_token);
    }

    function setWrongToken(address _wrongToken) external onlyOwner {
        wrongToken = IToken(_wrongToken);
    }

    function withdraw() external onlyOwner {
        wrongToken.transfer(owner(), wrongToken.balanceOf(address(this)));
    }

    function withdrawBNB() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function lastPriceBNB() public view returns (uint256){
        (, int256 answer, , , ) = precioBnb.latestRoundData();
        return uint256(answer);
    }

    function setTokenPriceInUSD(uint256 _tokenPriceInUSD) external onlyOwner {
        tokenPriceInUSD = _tokenPriceInUSD;
    }

    function calculateMaxAmount(address _addr) public view returns(uint256) {
        if(maxBuy[_addr]==0) {
            return (maxBuyDefault - QuantityBought[_addr]);
        }else {  
            return (maxBuy[_addr] - QuantityBought[_addr]);
        }
    }

    function calculateTokenQuantity(uint256 _bnbAmount) public view returns(uint256 _quantity) {
        uint256 tokenAmountToGive = ((_bnbAmount * lastPriceBNB())/tokenPriceInUSD) / 10**8;
        if( tokenAmountToGive > calculateMaxAmount(msg.sender) ) {
            tokenAmountToGive = calculateMaxAmount(msg.sender);
        }
        return (tokenAmountToGive);
    }

    function price() public view returns (uint256){
        return ((1 * lastPriceBNB())/tokenPriceInUSD) / 10**8;
    }

    function buy() public payable nonReentrant() {
        uint256  _bnbAmount = msg.value;
        uint256 tokenAmountToGive = calculateTokenQuantity(_bnbAmount);
        if(tokenAmountToGive == calculateMaxAmount(msg.sender) ) {
            _bnbAmount = ((calculateMaxAmount(msg.sender) * 10**8)*tokenPriceInUSD) / lastPriceBNB() ;
            uint256 _bnbBack = msg.value - _bnbAmount;
            treasure.transfer(_bnbAmount);
            payable(msg.sender).transfer(_bnbBack);
        } else {
            treasure.transfer(_bnbAmount);
        }
        QuantityBought[_msgSender()] += tokenAmountToGive;
        token.transfer(_msgSender(), tokenAmountToGive);
    }

    function testBuy(uint256 _bnbAmount) public view returns(uint256 tokens, uint256 change, uint256 treasury) {
        uint256 tokenAmountToGive = calculateTokenQuantity(_bnbAmount);
        if(tokenAmountToGive == calculateMaxAmount(msg.sender)) {
            uint256 _bnbAmountToUse = ((calculateMaxAmount(msg.sender) * 10**8)*tokenPriceInUSD) / lastPriceBNB() ;
            change = _bnbAmount - _bnbAmountToUse;
            treasury=_bnbAmountToUse;
        } else {
            treasury = _bnbAmount;
        }
        tokens = tokenAmountToGive;
        return(tokens, change, treasury);
    }

    receive() external payable { 
        buy();
    }

}