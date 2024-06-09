const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');
var weiToEth='000000000000000000';
var erc20_instance;

var devFee = 25;
var AStkFee = 100;

contract('No Excluidas', accounts => {
    [owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4] = accounts;
    
    before( async function() {
        erc20_instance= await ERC20.new(owner);
    });

    context("33- TxFrom entre una dir. no excluida y otra excluida, ambas con astkfee y devfee positivo ", async () => {

        it("01 - defaultAStkFee should be 100", async () => {
            const _fee = await erc20_instance.defaultAStkFee();
            expect(_fee.toString()).to.equal("100".toString());
        });

        it("02 - defaultDevFee should be 25", async () => {
            const _fee = await erc20_instance.defaultDevFee();
            expect(_fee.toString()).to.equal("25".toString());
        });

        it("03 - devWallet = onwer", async ()=> {
            devWallet=await erc20_instance.devWallet();
            expect(devWallet.toString()).to.equal(owner.toString());
        });

        it("04 - setDevWallet to dev", async ()=> {
            await erc20_instance.setDevWallet(dev);
            devWallet=await erc20_instance.devWallet();
            expect(devWallet.toString()).to.equal(dev.toString());
        });

        it("05 - setAStkFee to 10 to exc1", async ()=> {
            await erc20_instance.setAStkFee(exc1, true, '10');
            aStkFee=await erc20_instance.aStkFee(exc1);
            expect(aStkFee.toString()).to.equal('10'.toString());
        }); //_isExcluded

        it("06 - exc1 excluded", async ()=> {
            const _isExcluded= await erc20_instance.isExcluded(exc1);
            expect(_isExcluded.toString()).to.equal(true.toString());
        });

        it("07 - owner not excluded", async ()=> {
            const _isExcluded= await erc20_instance.isExcluded(owner);
            expect(_isExcluded.toString()).to.equal(false.toString());
        }); //_isExcluded

        it("08 - std1 not excluded", async ()=> {
            const _isExcluded= await erc20_instance.isExcluded(std1);
            expect(_isExcluded.toString()).to.equal(false.toString());
        }); //_isExcluded

        

        it("09 - transferFrom between standars triggered by excluded", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.transferFrom(owner, std1, '10000'+weiToEth, { from: exc1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("Error: VM Exception while processing transaction: revert\n");
            }
        });

        it("10 - owner approves 10000 to exc1", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.approve(exc1, '10000'+weiToEth, { from: owner });
                _allowance = await erc20_instance.allowance(owner, exc1);
                expect(_allowance.toString()).to.equal('10000'+weiToEth);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("11 - transferFrom between standars", async ()=> {//approve(address spender, uint256 value)
            try{//transferFrom(address sender, address recipient, uint256 amount) 
                await erc20_instance.transferFrom(owner, std1, '10000'+weiToEth, { from: exc1 });
                expect(1).to.equal(1);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("12 - Allowance reduction to 0", async ()=> {
            _allowance = await erc20_instance.allowance(owner, exc1);
            expect(_allowance.toString()).to.equal('0');
        });




        it("15 - Verify balances (error 0.6 and 230 ppm for ower and dev)", async ()=> {
            await checkBalance(owner,'19990004'+'997501249375312343');
            await checkBalance(std1,'9965'+'002491250622812655');
            await checkBalance(dev,'25'+'000006250001562500');
            await checkBalance(exc1,'0');
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

async function getAllBalance(owner, exc1, std2, std3, std4, dev, exc1, exc2, exc3, exc4) {
    owner = await erc20_instance.balanceOf(owner);
    exc1 = await erc20_instance.balanceOf(exc1);
    std2 = await erc20_instance.balanceOf(std2);
    std3 = await erc20_instance.balanceOf(std3);
    std4 = await erc20_instance.balanceOf(std4);
    dev = await erc20_instance.balanceOf(dev);
    exc1 = await erc20_instance.balanceOf(exc1);
    exc2 = await erc20_instance.balanceOf(exc2);
    exc3 = await erc20_instance.balanceOf(exc3);
    exc4 = await erc20_instance.balanceOf(exc4);
    return[owner, exc1, std2, std3, std4, dev, exc1, exc2, exc3, exc4];
}
