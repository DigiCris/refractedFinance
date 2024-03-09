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

    context("37- TxFrom entre dos dir. excluidas, ambas con astkfee y devfee positivo", async () => {

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

        it("05 - setAStkFee to 100 to owner", async ()=> {
            await erc20_instance.setAStkFee(owner, false, '100');
            aStkFee=await erc20_instance.aStkFee(owner);
            expect(aStkFee.toString()).to.equal('100'.toString());
        });

        it("06 - setAStkFee to 10 to exc1", async ()=> {
            await erc20_instance.setAStkFee(exc1, true, '10');
            aStkFee=await erc20_instance.aStkFee(exc1);
            expect(aStkFee.toString()).to.equal('10'.toString());
        }); //_isExcluded

        it("07 - exc1 excluded", async ()=> {
            const _isExcluded= await erc20_instance._isExcluded(exc1);
            expect(_isExcluded.toString()).to.equal(true.toString());
        });

        it("08 - owner not excluded", async ()=> {
            const _isExcluded= await erc20_instance._isExcluded(owner);
            expect(_isExcluded.toString()).to.equal(false.toString());
        }); //_isExcluded

        it("09 - setDevFee to 25 to owner (writing 0 to use default)", async ()=> {
            await erc20_instance.setDevFee(owner, 0);
            devFee=await erc20_instance.readDevFee(owner);
            expect(devFee.toString()).to.equal('25'.toString());
        });

        it("10 - setDevFee to 25 to exc1 (by default)", async ()=> {
            await erc20_instance.setDevFee(exc1, 0);
            devFee=await erc20_instance.readDevFee(exc1);
            expect(devFee.toString()).to.equal('25'.toString());
        });

        it("11 - transfer between standars", async ()=> {
            try{
                await erc20_instance.transfer(exc1, '10000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("12 - Verify balances (error 0.6 and 230 ppm for ower and dev)", async ()=> {
            await checkBalance(owner,'19990049'+'987465624244257940');
            await checkBalance(exc1,'9875');
            await checkBalance(dev,'25'+'000062515589825217');
        });


        // exc1 => dev=25   stk=10
        // exc2 => dev=25   stk=100
        // aca agregue
        it("13 - setAStkFee to 100 to exc2 (by default)", async ()=> {
            await erc20_instance.setAStkFee(exc2, false, '0');
            aStkFee=await erc20_instance.aStkFee(exc2);
            expect(aStkFee.toString()).to.equal('100'.toString());
        });

        it("14 - setDevFee to 25 to exc2 (by default)", async ()=> {
            await erc20_instance.setDevFee(exc2, 0);
            devFee=await erc20_instance.readDevFee(exc2);
            expect(devFee.toString()).to.equal('25'.toString());
        });

        it("15 - transfer between excluded and standars", async ()=> {
            try{
                await erc20_instance.transfer(exc2, '8000'+weiToEth, { from: exc1 });
                expect(1).to.equal(1);
            } catch(error){
                expect(error).to.equal("no debio entrar aca");
            }
        });

        it("16 - Verify balances (error 0 ppm)", async ()=> {
            await checkBalance(owner,'19990053'+'985663836927012925');// 
            await checkBalance(exc1,'1875'); // exacto
            await checkBalance(exc2,'7972'+'001594475059916942'); // mas monedas
            await checkBalance(dev,'45'+'000071516026023889'); // 
        });

        it("17 - setAStkFee to 10 to exc2", async ()=> {
            await erc20_instance.setAStkFee(exc2, true, '10');
            aStkFee=await erc20_instance.aStkFee(exc2);
            expect(aStkFee.toString()).to.equal('10'.toString());
        }); //_isExcluded

        it("18 - exc2 excluded", async ()=> {
            const _isExcluded= await erc20_instance._isExcluded(exc2);
            expect(_isExcluded.toString()).to.equal(true.toString());
        });

        it("19 - std1 excluded", async ()=> {
            const _isExcluded= await erc20_instance._isExcluded(std1);
            expect(_isExcluded.toString()).to.equal(false.toString());
        });



        it("20 - transfer_From between excluded (must fail)", async ()=> {//approve(address spender, uint256 value)
            try{ 
                await erc20_instance.transferFrom(exc2, exc1, '7970'+weiToEth, { from: std1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                expect(error.hijackedStack).to.include("Error: VM Exception while processing transaction: revert\n");
            }
        });

        it("21 - owner approves 7970 to exc1", async ()=> {//approve(address spender, uint256 value)
            try{
                await erc20_instance.approve(std1, '7970'+weiToEth, { from: exc2 });
                _allowance = await erc20_instance.allowance(exc2, std1);
                expect(_allowance.toString()).to.equal('7970'+weiToEth);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("22 - transfer_From between excluded and excluded ", async ()=> {//approve(address spender, uint256 value)
            try{
                await erc20_instance.transferFrom(exc2, exc1, '7970'+weiToEth, { from: std1 });
                expect(1).to.equal(1);
            } catch(error){
                expect(error.hijackedStack).to.include("No debio entrar aca");
            }
        });

        it("23 - Allowance reduction to 0", async ()=> {
            _allowance = await erc20_instance.allowance(exc2, exc1);
            expect(_allowance.toString()).to.equal('0');
        });




        it("24 - Verify balances (error 0 ppm)", async ()=> {
            await checkBalance(owner,'19990053'+'985663836927012925');// 
            await checkBalance(exc1,'9845'); // exacto
            await checkBalance(exc2,'2'+'001594475059916942'); // mas monedas
            await checkBalance(dev,'45'+'000071516026023889'); // 
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

async function getAllBalance(owner, exc1, exc2, std3, std4, dev, exc1, exc2, exc3, exc4) {
    owner = await erc20_instance.balanceOf(owner);
    exc1 = await erc20_instance.balanceOf(exc1);
    exc2 = await erc20_instance.balanceOf(exc2);
    std3 = await erc20_instance.balanceOf(std3);
    std4 = await erc20_instance.balanceOf(std4);
    dev = await erc20_instance.balanceOf(dev);
    exc1 = await erc20_instance.balanceOf(exc1);
    exc2 = await erc20_instance.balanceOf(exc2);
    exc3 = await erc20_instance.balanceOf(exc3);
    exc4 = await erc20_instance.balanceOf(exc4);
    return[owner, exc1, exc2, std3, std4, dev, exc1, exc2, exc3, exc4];
}
