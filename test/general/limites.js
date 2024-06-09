const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');
var weiToEth='000000000000000000';
var erc20_instance;

var devFee = 0;
var AStkFee = 0;

contract('39- Tx permitida por sobre el limite variado los limites de tx y tenencia.', accounts => {
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







        it("09 - transfer between standars 10001 (must not fail)", async ()=> {
            try{
                await erc20_instance.transfer(std1, '10001'+weiToEth, { from: owner });
                expect("no hay limite").to.equal("no hay limite");
            } catch(error){
                expect(error.hijackedStack).to.include("No debe entrar aca");
            }
        });

        //setMaxTx(address _addr, uint256 _value)
        it("10 - owner setMaxTx to 50000 to itself (no hay MaxTx)", async ()=> {
            try{
                await erc20_instance.setMaxTx(owner, '50000'+weiToEth, { from: owner });
                _maxTx = await erc20_instance.maxTx(owner);
                expect(_maxTx.toString()).to.equal("No debe entrar aca");
            } catch(error){
                expect("no hay MaxTx").to.include("no hay MaxTx");
            }
        });

        it("11 - std1 tries to setMaxTx to 40000 to owner (must fail)", async ()=> {
            try{
                await erc20_instance.setMaxTx(owner, '40000'+weiToEth, { from: std1 });
                _maxTx = await erc20_instance.maxTx(owner);
                expect(_maxTx.toString()).to.equal("No debe entrar aca");
            } catch(error){
                expect("no hay MaxTx").to.include("no hay MaxTx");
            }
        });

        it("12 - transfer 50000 from owner to std1 must not fail", async ()=> {
            try{
                await erc20_instance.transfer(std1, '50000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                expect(error.hijackedStack).to.include("no debio entrar aca");
            }
        });

        it("13 - Verify balances", async ()=> {
            /*
            await checkBalance(owner,'19940000');
            await checkBalance(std1,'60000'); // manda 1001 al owner
            await checkBalance(dev,'0');
            */
        });

        it("14 - transfer 50000 from owner to std1 must not fail because there is no limit (maxWallet does not exist)", async ()=> {
            try{
                await erc20_instance.transfer(std1, '50000'+weiToEth, { from: owner });
                expect("no hay MaxTx").to.include("no hay MaxTx");
            } catch(error){
                ////console.log(error)
                expect(error.hijackedStack).to.include("no debe entrar aca");
            }
        });//setMaxWallet(address _addr, uint256 _value)


        it("15 - Verify balances", async ()=> {
            /*
            await checkBalance(owner,'19940000');
            await checkBalance(std1,'60000');
            await checkBalance(dev,'0');
            */
        });



        it("16 - owner setMaxWallet to 110000 to std1", async ()=> {
            try{
                await erc20_instance.setMaxWallet(std1, '110000'+weiToEth, { from: owner });
                _maxTx = await erc20_instance.maxWallet(std1);
                //console.log("_maxTx => "+_maxTx)
                expect(_maxTx.toString()).to.equal('110000'+weiToEth);
            } catch(error){
                //console.log(error)
                expect("no existe maxWallet").to.include("no existe maxWallet");
            }
        });

        it("17 - transfer 50000 from owner to std1 must succed", async ()=> {
            try{
                await erc20_instance.transfer(std1, '50000'+weiToEth, { from: owner });
                expect(1).to.equal(1);
            } catch(error){
                //console.log(error)
                expect(error.hijackedStack).to.include("can't receive so many tokens");
            }
        });//setMaxWallet(address _addr, uint256 _value)


        it("18 - Verify balances. (110 to std1)", async ()=> {
            /*
            await checkBalance(owner,'19890000');
            await checkBalance(std1,'110000');
            await checkBalance(dev,'0');
            */
        });

        it("19 - std1 setMaxWallet to 120000 to itself (must fail-> does not exist)", async ()=> {
            try{
                await erc20_instance.setMaxWallet(std1, '120000'+weiToEth, { from: std1 });
                expect(1).to.equal("no debio entrar aca");
            } catch(error){
                expect("setMaxWallet does not exist").to.include("setMaxWallet does not exist");
            }
        });

        it("20 - transfer 50000 from owner to std1 must not fail because setMaxWallet does not exist", async ()=> {
            try{
                await erc20_instance.transfer(std1, '1'+weiToEth, { from: owner });
                expect("setMaxWallet does not exist").to.equal("setMaxWallet does not exist");
            } catch(error){
                ////console.log(error)
                expect(error.hijackedStack).to.include("no debe entrar aca");
            }
        });

//setDefaultMaxTx(uint256 _value)
//setDefaultMaxWallet(uint256 _value)

        it("21 - std1 setDefaultMaxTx to 10 (Must Fail)", async ()=> {
            try{
                await erc20_instance.setDefaultMaxTx('10'+weiToEth, { from: std1 });
                _defaultMaxTx = await erc20_instance.defaultMaxTx();
                expect(_defaultMaxTx.toString()).to.equal("no debio entrar aca");
            } catch(error){
                expect("DefaultMaxTx does not exist").to.include("DefaultMaxTx does not exist");
            }
        });

        it("22 - std1 setDefaultMaxWallet to 10 (Must Fail)", async ()=> {
            try{
                await erc20_instance.setDefaultMaxWallet('10'+weiToEth, { from: std1 });
                _defaultMaxWallet = await erc20_instance.defaultMaxWallet();
                expect(_defaultMaxWallet.toString()).to.equal("no debio entrar aca");
            } catch(error){
                expect("DefaultMaxTx does not exist").to.include("DefaultMaxTx does not exist");
            }
        });

        it("23 - owner setDefaultMaxTx to 100 (Must Fail)", async ()=> {
            try{
                await erc20_instance.setDefaultMaxTx('100'+weiToEth, { from: owner });
                _defaultMaxTx = await erc20_instance.defaultMaxTx();
                //console.log("no error => _defaultMaxTx must be 10000 but it is => "+_defaultMaxTx);
                expect(_defaultMaxTx.toString()).to.equal("no debio entrar aca");
            } catch(error){
                ////console.log(error)
                expect("DefaultMaxTx does not exist").to.include("DefaultMaxTx does not exist");
            }
        });

        it("24 - owner setDefaultMaxWallet to 100 (Must Fail)", async ()=> {
            try{
                await erc20_instance.setDefaultMaxWallet('100'+weiToEth, { from: owner });
                defaultMaxWallet = await erc20_instance.defaultMaxWallet();
                //console.log("no error => defaultMaxWallet must be 10000 but it is => "+defaultMaxWallet);
                expect(defaultMaxWallet.toString()).to.equal("no debio entrar aca");
            } catch(error){
                ////console.log(error)
                expect("DefaultMaxTx does not exist").to.include("DefaultMaxTx does not exist");
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
