const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');
var weiToEth='000000000000000000';
var erc20_instance;

var devFee = 0;
var AStkFee = 0;

contract('40- Pause testing', accounts => {
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
                await erc20_instance.transfer(std1, '1000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("08 - Verify balances", async ()=> {
            await checkBalance(owner,'19999000');
            await checkBalance(std1,'1000');
            await checkBalance(dev,'0');
        });


        it("09 - std1 pause transfer (Must Fail)", async ()=> {
            try{
                await erc20_instance.pause({ from: std1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                ////console.log(error)
                expect("pause does not exist").to.include("pause does not exist");
            }
        });




        it("10 - transfer between standars", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("11 - Verify balances", async ()=> {
            await checkBalance(owner,'19998000');
            await checkBalance(std1,'2000');
            await checkBalance(dev,'0');
        });



        
        it("12 - owner pause transfer (must fail)", async ()=> {
            try{
                await erc20_instance.pause({ from: owner });
                expect(1).to.equal("no debe entrar aca");
            } catch(error){
                ////console.log(error)
                expect("pause does not exist").to.include("pause does not exist");
            }
        });



        it("13 - transfer between standars (must not fail)", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1000'+weiToEth, { from: owner });
                expect("pause does not exist").to.include("pause does not exist");
            } catch(error){
                expect(error.hijackedStack).to.include("no debe entrar aca, pause does not exist");
            }
        });

        it("14 - Verify balances", async ()=> {
            /*
            await checkBalance(owner,'19998000');
            await checkBalance(std1,'2000');
            await checkBalance(dev,'0');
            */
        });



        
        it("15 - std1 unpause transfer (Must Fail)", async ()=> {
            try{
                await erc20_instance.unpause({ from: std1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                ////console.log(error)
                expect("pause does not exist").to.include("pause does not exist");
            }
        });



        it("16 - transfer between standars (must not fail)", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1000'+weiToEth, { from: owner });
                expect("pause does not exist").to.include("pause does not exist");
            } catch(error){
                expect(error.hijackedStack).to.include("pause does not exist");
            }
        });

        it("17 - Verify balances", async ()=> {
            /*
            await checkBalance(owner,'19998000');
            await checkBalance(std1,'2000');
            await checkBalance(dev,'0');
            */
        });


        it("18 - owner unpause transfer (succed)", async ()=> {
            try{
                await erc20_instance.unpause({ from: owner });
                expect(1).to.equal("unpause does not exist");
            } catch(error){
                ////console.log(error)
                expect("pause does not exist").to.include("pause does not exist");
            }
        });


        it("19 - transfer between standars", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("20 - Verify balances", async ()=> {
            /*
            await checkBalance(owner,'19997000');
            await checkBalance(std1,'3000');
            await checkBalance(dev,'0');
            */
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
