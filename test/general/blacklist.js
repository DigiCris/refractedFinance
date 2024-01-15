const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');
var weiToEth='000000000000000000';
var erc20_instance;

var devFee = 0;
var AStkFee = 0;

contract('38- Tx and TxFrom => balcklist (todas deben ser fallidas fallida)', accounts => {
    [owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4] = accounts;
    
    before( async function() {
        erc20_instance= await ERC20.new(owner);
    });

    context("01- Tx entre dos dir. no excluidas, ambas con astkfee y devfee 0%", async () => {

        it("01 - defaultAStkFee should be 100", async () => {
            const _fee = await erc20_instance.defaultAStkFee();
            expect(_fee.toString()).to.equal("100".toString());
        });

        it("02 - defaultDevFee should be 25", async () => {
            const _fee = await erc20_instance.defaultDevFee();
            expect(_fee.toString()).to.equal("25".toString());
        });

        it("03 - defaultAStkFee changed to 0", async ()=> {
            await erc20_instance.setDefaultAStkFee(AStkFee);
            const _fee = await erc20_instance.defaultAStkFee();
            expect(_fee.toString()).to.equal(AStkFee.toString());
        });

        it("04 - defaultDevFee changed to 0", async ()=> {
            await erc20_instance.setDefaultDevFee(devFee);
            const _fee = await erc20_instance.defaultDevFee();
            expect(_fee.toString()).to.equal(devFee.toString());
        });

        it("05 - devWallet = onwer", async ()=> {
            devWallet=await erc20_instance.devWallet();
            expect(devWallet.toString()).to.equal(owner.toString());
        });

        it("06 - setDevWallet to dev", async ()=> {
            await erc20_instance.setDevWallet(dev);
            devWallet=await erc20_instance.devWallet();
            expect(devWallet.toString()).to.equal(dev.toString());
        });

        it("07 - transfer between standars", async ()=> {
            try{
                await erc20_instance.transfer(std1, '10000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("08 - Verify balances", async ()=> {
            await checkBalance(owner,'19990000');
            await checkBalance(std1,'10000');
            await checkBalance(dev,'0');
        });


        it("09 - Blacklist std1 and std3", async ()=> {
            await erc20_instance.setBlacklist(std1, true);
            await erc20_instance.setBlacklist(std3, true);
            Bstd1 = await erc20_instance.blacklist(std1);
            Bstd2 = await erc20_instance.blacklist(std2);
            Bstd3 = await erc20_instance.blacklist(std3);
            Bstd4 = await erc20_instance.blacklist(std4);
            Bowner = await erc20_instance.blacklist(owner);
            expect(Bstd1.toString()).to.equal(true.toString());
            expect(Bstd2.toString()).to.equal(false.toString());
            expect(Bstd3.toString()).to.equal(true.toString());
            expect(Bstd4.toString()).to.equal(false.toString());
            expect(Bowner.toString()).to.equal(false.toString());
        });

        it("10 - transfer to blacklist must fail", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1'+weiToEth, { from: owner });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("No receiving in blacklists");
            }
        });

        it("11 - transfer from blacklist must fail", async ()=> {
            try{
                await erc20_instance.transfer(std2, '1'+weiToEth, { from: std1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("No sendings from blacklists");
            }
        });




        it("12 - owner approves 10000 to std1 (who is blacklisted)", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.approve(owner, '10000'+weiToEth, { from: std1 });
                _allowance = await erc20_instance.allowance(std1, owner);
                expect(_allowance.toString()).to.equal('10000'+weiToEth);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("13 - transferFrom => owner sends from blacklisted std1 to std4", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.transferFrom(std1, std4, '1'+weiToEth, { from: owner });
                expect(1).to.equal("no debe entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("No sendings from blacklists");
            }
        });


        it("14 - owner approves 10000 to std4", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.approve(std4, '10000'+weiToEth, { from: owner });
                _allowance = await erc20_instance.allowance(owner, std4);
                expect(_allowance.toString()).to.equal('10000'+weiToEth);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("15 - transferFrom => std4 sends from blacklisted std1 to owner", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.transferFrom(owner, std1, '1'+weiToEth, { from: std4 });
                expect(1).to.equal("no debe entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("No receiving in blacklists");
            }
        });


        it("16 - owner approves 10000 to std1(who is blacklisted)", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.approve(std1, '10000'+weiToEth, { from: owner });
                _allowance = await erc20_instance.allowance(owner, std1);
                expect(_allowance.toString()).to.equal('10000'+weiToEth);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("17 - transferFrom => std1 sends from owner to std4 (only std1 is blacklisted. must fail)", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.transferFrom(owner, std4, '1'+weiToEth, { from: std1 });
                expect(1).to.equal("no debe entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("spender is blacklisted");
            }
        });






    });





});


async function checkBalance(wallet,value) {
    walletBalance = await erc20_instance.balanceOf(wallet);
    if(value=='0'){
        expect(walletBalance.toString()).to.equal("0");
    }else {
        expect(walletBalance.toString()).to.equal(value.toString()+weiToEth);
    }
    return;
}

async function getAllBalance(owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4) {
    owner = await erc20_instance.balanceOf(owner);
    std1 = await erc20_instance.balanceOf(std1);
    std2 = await erc20_instance.balanceOf(std2);
    std3 = await erc20_instance.balanceOf(std3);
    std4 = await erc20_instance.balanceOf(std4);
    dev = await erc20_instance.balanceOf(dev);
    exc1 = await erc20_instance.balanceOf(exc1);
    exc2 = await erc20_instance.balanceOf(exc2);
    exc3 = await erc20_instance.balanceOf(exc3);
    exc4 = await erc20_instance.balanceOf(exc4);
    return[owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4];
}
