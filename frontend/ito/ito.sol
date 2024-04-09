// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IToken {
    function transfer(address _to, uint256 _amount) external;
    function balanceOf(address _who) external returns(uint256);
}

// Address for interfaces, diferent pairs= https://docs.chain.link/data-feeds/price-feeds/addresses/

contract Ito is Ownable{
    AggregatorV3Interface internal precioBnb;
    address constant goerliAggrAddr=0x694AA1769357215DE4FAC081bf1f309aDC325306;
    uint256 public tokenPriceInUSD; // 8 decimales
    IToken public token;
    IToken public wrongToken;
    address payable treasure;

    constructor() Ownable(msg.sender){
        precioBnb = AggregatorV3Interface(goerliAggrAddr);
        tokenPriceInUSD = 1 ;
        treasure =payable (msg.sender);
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

    function lastPriceBNB() public view returns (uint256){
        (, int256 answer, , , ) = precioBnb.latestRoundData();
        return uint256(answer);
    }

    function setTokenPriceInUSD(uint256 _tokenPriceInUSD) external onlyOwner {
        tokenPriceInUSD = _tokenPriceInUSD;
    }

    function calculateTokenQuantity(uint256 _bnbAmount) public view returns(uint256 _quantity) {
        return ((_bnbAmount * lastPriceBNB())/tokenPriceInUSD) / 10**8;
    }

    function price() public view returns (uint256){
        return ((1 * lastPriceBNB())/tokenPriceInUSD) / 10**8;
    }

    function buy() public payable {
        uint256 tokenAmountToGive = calculateTokenQuantity(msg.value);
        treasure.transfer(msg.value);
        token.transfer(_msgSender(), tokenAmountToGive);
    }

    receive() external payable { 
        buy();
    }

}