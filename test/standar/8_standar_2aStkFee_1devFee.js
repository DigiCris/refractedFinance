const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');
var weiToEth='000000000000000000';
var erc20_instance;

var devFee = 0;
var AStkFee = 0;

contract('No Excluidas', accounts => {
    [owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4] = accounts;
    
    before( async function() {
        erc20_instance= await ERC20.new(owner);
    });

    context("08- Tx entre dos dir. no excluidas, ambas con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.", async () => {

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

        it("07 - setAStkFee to 100 to owner", async ()=> {
            await erc20_instance.setAStkFee(owner, false, '100');
            aStkFee=await erc20_instance.aStkFee(owner);
            expect(aStkFee.toString()).to.equal('100'.toString());
        });

        it("08 - setAStkFee to 100 to std1", async ()=> {
            await erc20_instance.setAStkFee(std1, false, '100');
            aStkFee=await erc20_instance.aStkFee(std1);
            expect(aStkFee.toString()).to.equal('100'.toString());
        });

        it("09 - setDevFee to 25 to owner", async ()=> {
            await erc20_instance.setDevFee(owner, 25);
            devFee=await erc20_instance.readDevFee(owner);
            expect(devFee.toString()).to.equal('25'.toString());
        });

        it("10 - setDevFee to 0 to std1", async ()=> {
            await erc20_instance.setDevFee(std1, 0);
            devFee=await erc20_instance.readDevFee(std1);
            expect(devFee.toString()).to.equal('0'.toString());
        });

        it("11 - transfer between standars", async ()=> {
            try{
                await erc20_instance.transfer(std1, '10000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("12 - Verify balances (error 3 ppm)", async ()=> {
            await checkBalance(owner,'19990049975'+'124937812344530');
            await checkBalance(std1,'98750246875'+'61718904297');
            await checkBalance(dev,'25000062500'+'156250390');
        });


    });





});


async function checkBalance(wallet,value) {
    walletBalance = await erc20_instance.balanceOf(wallet);
    if(value=='0'){
        expect(walletBalance.toString()).to.equal("0");
    }else {
        if(value.toString().length > 17){
            expect(walletBalance.toString()).to.equal(value.toString());
        }else{
            expect(walletBalance.toString()).to.equal(value.toString()+weiToEth);
        }
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
