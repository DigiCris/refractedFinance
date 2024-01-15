var Erc20 = artifacts.require("HedgeCoin");
//var Ito = artifacts.require("Sale");


module.exports = async function(deployer) {
    await deployer.deploy(Erc20,'0x7C7096D2005196717665197c23BA1bC34B816BA9');
    //await deployer.deploy(Erc20, "EdIToken","EDT", 1000, 18 );
    //await deployer.deploy(Ito, Erc20.address );
}