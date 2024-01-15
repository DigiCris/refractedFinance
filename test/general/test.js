/*
01 - Token name: 	HedgeCoin
02 - Token symbol:	HDGC
03 - Total supply:	20.000.000 (serían en realidad 40 para quemar la mitad) => 40000000 (20000000 a la 0)
04 - balanceOf(owner):	20.000.000
05 - balanceOf(null):	20.000.000
06 - Decimals:		18
07 - Recover:		si               (No pero no pueden mandar al contrato)
08 - Max Transaction:	10.000
// listo hasta acá




09 - Max Wallet:	100.000
10 - Tx Fees:		1% (para todas las transacciones, contra wallet o dex, si se quema la mitad del supply esto se traduce en 0,5 para quema y 0,5 para reflections [autostaking] => la repartija es solo con los 20M que amanecen quemados, no es que escojo ese 0.5 y 0.5, al principio empezará así luego será menos para la gente y más para la quema)	
11 - dev fee:       0.25% extra antes para tesorería (transaccion de fee total 1.25%)
12 - Blacklist:		si
13 - Whitelist:		si (solo para evitar max transaction y max wallet, nada tiene que ver con el exclusion del autostaking)
14 - Pause:		? => si (a las transferencias)

Exclusión y anti-Exclusión
semi-excluidas y anti-semi-exclusión => en vez de 1% y 0.25% -> 0.07% liquidity      0.03% ates para tesoreria  (Esto es para que el tipico slippage del 0.5% no tenga problemas al interactuar con el swap)
*/

//1) cambiar o no las comisiones incluidos en los envíos. (mando 100, llegan 99)

const expect = require('chai').expect;
const ERC20 = artifacts.require('HedgeCoin');

var errorPermitido = 1/100;

var InstantSupply='20000000'+'000000000000000000';

contract('Finanzas refractadas', accounts => {
    [owner, std1, std2, std3, std4, dev, exc1, exc2, exc3, exc4] = accounts;
    var erc20_instance;
    before( async function() {
        erc20_instance= await ERC20.new(owner);
    });

    context("constructor", async () => {

        it("01 - Token name: 	HedgeCoin", async ()=> {
            const _name = await erc20_instance.name();
            expect(_name).to.equal("HedgeCoin");
        });

        it("02 - Token symbol:	HDGC", async ()=> {
            const _Symbol = await erc20_instance.symbol();
            expect(_Symbol).to.equal("HDGC");
        });

        it("03 - Total supply:	20.000.000", async ()=> {
            const _supply = await erc20_instance.totalSupply();
            expect(_supply.toString()).to.equal('20000000'+'000000000000000000');
        });

        it("04 - balanceOf(owner):	20.000.000", async ()=> {
            const _supply = await erc20_instance.balanceOf(owner);
            expect(_supply.toString()).to.equal('20000000'+'000000000000000000');
        });

        it("05 - balanceOf(null):	20.000.000", async ()=> {
            const _supply = await erc20_instance.balanceOf('0x0000000000000000000000000000000000000000');
            expect(_supply.toString()).to.equal('0');
        });

        it("06 - Decimals:		18", async ()=> {
            const _decimals = await erc20_instance.decimals();
            expect(_decimals.toString()).to.equal("18");
        });

        it("07 - Recover:	No se puede mandar al contrato", async ()=> {
            try{
                await erc20_instance.transfer(erc20_instance.address, '100', { from: owner });
                expect(1).to.include("No debería haberse envíado el token al Smart Contract");
            }catch(error){
                expect(error.hijackedStack).to.include("ERC20: transfer to SC");
            }
            const _supply = await erc20_instance.balanceOf(erc20_instance.address);
            expect(_supply.toString()).to.equal('0');
        });

        it("08 - set Dev:	Seteo la dev Wallet", async ()=> {
            try{
                await erc20_instance.setDevWallet(dev, { from: owner });
                const devWallet = await erc20_instance.devWallet();
                expect(devWallet.toString()).to.equal(dev.toString());
            }catch(error){
                expect(error.hijackedStack).to.include("Debio setear la dev wallet y no entrar aca.");
            }
        });

    });



    context("transaccion standar", async () => {

        it("09 - Max Transaction superada: 1.25% @100000+ (no debe hacerse)", async () => {
            var _supplyStd1 = await erc20_instance.balanceOf(std1);
            try{
                await erc20_instance.transfer(std1, '10000'+'000000000000000001', { from: owner });
                _supplyStd1 = restar(await erc20_instance.balanceOf(std1), _supplyStd1);
                expect(_supplyStd1.toString()).to.include("0");
            }catch(error){
                expect(error.hijackedStack).to.include("VM Exception while processing");
            }
        });

        it("10 - Max Transaction succeded: 1.25% @100000", async () => {
            var _supplyStd1 = await erc20_instance.balanceOf(std1);
            try{
                await erc20_instance.transfer(std1, '10000'+'000000000000000000', { from: owner });
/*
                irfee = await erc20_instance.irfee();
                i_rOwned_sender = await erc20_instance.i_rOwned_sender();
                irDev = await erc20_instance.irDev();
                irAmount = await erc20_instance.irAmount();
                i_rOwned_recipient = await erc20_instance.i_rOwned_recipient();
                i_rTotal = await erc20_instance.i_rTotal();
                i_rOwned_devWallet = await erc20_instance.i_rOwned_devWallet();
                iq = await erc20_instance.iq();

                console.log("irfee = "+irfee);
                console.log("i_rOwned_sender = "+i_rOwned_sender);
                console.log("irDev = "+irDev);
                console.log("irAmount = "+irAmount);
                console.log("i_rOwned_recipient = "+i_rOwned_recipient);
                console.log("i_rTotal = "+i_rTotal);
                console.log("i_rOwned_devWallet = "+i_rOwned_devWallet);
                console.log("iq = "+iq);
*/
                var _owner = await erc20_instance.balanceOf(owner);
                var _dev = await erc20_instance.balanceOf(dev);
                console.log("owner tiene => "+ _owner);
                console.log("_dev tiene => "+ _dev);
                expect(_owner.toString()).to.equal("19990049975124937812344530");
                expect(_dev.toString()).to.equal("25000062500156250390");
                expect(_supplyStd1.toString()).to.equal("0");
                _supplyStd1 = await erc20_instance.balanceOf(std1);
                expect(_supplyStd1.toString()).to.equal("9875024687561718904297");
            }catch(error){
                expect(error.hijackedStack).to.include("Debió poderse ejecutar y o entrar aca");
            }
        });

    });



    context("transaccion a excluida", async () => {


        it("11 - Prueba que la que se excluirá no está excluida", async ()=> {
            let _isExcluded = await erc20_instance._isExcluded(exc1);
            expect(_isExcluded.toString()).to.equal("false");
        }); 
                
        it("12 - Excluye billetera exc1", async ()=> {
            const qAntes = await erc20_instance.q();
            await erc20_instance.setAStkFee(exc1, true, 10);
            const _fee = await erc20_instance.estAStkFee(exc1);
            const _isExcluded = await erc20_instance._isExcluded(exc1);
            const qDespues = await erc20_instance.q();
            expect(_fee.toString()).to.equal("10");
            expect(_isExcluded.toString()).to.equal("true");
            console.log("q=> "+qAntes+" = "+qDespues);
            expect(qAntes.toString()).to.equal(qDespues.toString());
        }); 

        it("13 - fee: 1% +0.25 dev transfiero a exc1 @10000", async () => {
            const _rTotali= await erc20_instance._rTotal();
            console.log("_rTotali = "+_rTotali);
            try{
                await erc20_instance.transfer(exc1, '10000'+'000000000000000000', { from: owner });
                const _rTotalf= await erc20_instance._rTotal();
                console.log("_rTotalf = "+_rTotalf);
                _supplyexc1 = await erc20_instance.balanceOf(exc1);
                expect(_supplyexc1.toString()).to.equal("9875000000000000000000"); // no tiene que aumentarse
            }catch(error){
                expect(error.hijackedStack).to.include("Debió poderse ejecutar y o entrar aca");
            }
        });

        it("14 - Transaccion estandar pero la excluida no aumenta", async () => {
            var _supplyStd1i = (await erc20_instance.balanceOf(std1))/1000000000000000000;
            try{
                await erc20_instance.transfer(exc2, '10000'+'000000000000000000', { from: owner });
                _supplyexc1 = await erc20_instance.balanceOf(exc1);
                var _supplyStd1f = (await erc20_instance.balanceOf(std1))/1000000000000000000;
                expect(_supplyStd1i).to.be.lessThan(_supplyStd1f);
                expect(_supplyexc1.toString()).to.equal("9875000000000000000000");
            }catch(error){
                console.log("error => "+error)
                expect(error.hijackedStack).to.include("Debió poderse ejecutar y o entrar aca");
            }
        });

        it("15 - Prueba que la EXC2 no está excluida", async ()=> {
            let _isExcluded = await erc20_instance._isExcluded(exc2);
            expect(_isExcluded.toString()).to.equal("false");
        }); 

        it("16 - Excluye billetera exc2 (ya con tokens y std1 no varia).", async ()=> {
            _supplystd1i = await erc20_instance.balanceOf(std1);
            let _te = await erc20_instance._te();
            console.log("el viejo te es = "+ _te);
            let balance = await erc20_instance.balanceOf(exc2); //10.025.068,939583855603061378 ingreso
            console.log( "balance de exc2 = " + balance.toString() );


            await erc20_instance.setAStkFee(exc2, true, 1);
            _supplystd1f = await erc20_instance.balanceOf(std1);
            const _fee = await erc20_instance.estAStkFee(exc2);
            const _isExcluded = await erc20_instance._isExcluded(exc2);
            expect(_fee.toString()).to.equal("1");
            expect(_isExcluded.toString()).to.equal("true");
            expect(_supplystd1i.toString()).to.equal(_supplystd1f.toString());

            _te = await erc20_instance._te();
            console.log("el nuevo te es = "+ _te);
            balance = await erc20_instance.ingreso();
            console.log("ingreso = "+ balance.toString());
        }); 


    });
        
        
        

    context("transaccion desde excluida", async () => {


        it("17 - fee: 5000 desde excluida", async () => {// comprobar que no incremente la excluida
                    const _amount = '5000';
                
                    let _exc2Balance = await getInitialBalance(erc20_instance,exc2); // los iniciales
                    console.log("_exc2Balance=> "+_exc2Balance)
                    let _exc1Balance = await getInitialBalance(erc20_instance,exc1); // los iniciales
                    let _std1Balance = (await getInitialBalance(erc20_instance,std1))/1000000000000000000; // los iniciales

                    await erc20_instance.transfer(std2, _amount+'000000000000000000', { from: exc1 });

                    let _exc2Balancef = await getInitialBalance(erc20_instance,exc2); // los iniciales
                    let _exc1Balancef = await getInitialBalance(erc20_instance,exc1); // los iniciales
                    let _std1Balancef = (await getInitialBalance(erc20_instance,std1))/1000000000000000000; // los iniciales

                    _exc2=restar2(_exc2Balancef,_exc2Balance);
                    _exc1=restar2(_exc1Balance,_amount+'000000000000000000');
                    console.log('resta problema=> '+_exc1Balance+' - '+_amount+'000000000000000000'+' = '+_exc1);
                    _std1=restar2(_std1Balancef,_std1Balance);

                    expect(_exc2Balancef.toString()).to.equal(_exc2Balance.toString());
                    //expect(_exc1.toString()).to.equal(_exc1Balancef.toString());
                    console.log(_exc2Balancef+" - "+_exc2Balance);
                    //expect(_isExcluded.toString()).to.equal("true");
                    //expect(_isExcluded.toString()).to.equal("true");
        });


                
    });

/*       

            context("transaccion entre excluida", async () => {


                it("20 - fee: 0.1% @15000 (exc2 -> wxc1)", async () => {// comprobar que no incremente la excluida
                    const _amount = 15000;
                
                    let _exc2Balance = await getInitialBalance(erc20_instance,exc2); // los iniciales
                    let _exc1Balance = await getInitialBalance(erc20_instance,exc1); // los iniciales
                    let _ownerBalance = await getInitialBalance(erc20_instance,owner); // los iniciales
                    let _std1Balance = await getInitialBalance(erc20_instance,std1); // los iniciales
                    let _std2Balance = await getInitialBalance(erc20_instance,std2); // los iniciales
                    let _std3Balance = await getInitialBalance(erc20_instance,std3); // los iniciales
                    let _NullBalance = await getInitialBalance(erc20_instance,'0x0000000000000000000000000000000000000000'); // los iniciales
           
                    _exc2Balance = await getFinalSenderBalance(erc20_instance,_exc2Balance, _amount,exc2,exc1,true,true); // hacer la transferecia y controlar
                    _std1Balance = await getInitialBalance(erc20_instance,std1); // los iniciales
                    console.log("excluida = "+_exc1Balance);
                    console.log("no excluida = "+_std1Balance);

                    //await ComprobacionT(erc20_instance);
                });


                
            });
*/ 
















});



async function ComprobacionT(erc20_instance, condition="Transac") {
    let _tn = await erc20_instance._tn();
    let _te = await erc20_instance._te();
    let _tTotal = await erc20_instance._tTotal();
    let _totalSupply = await erc20_instance.totalSupply();
    let _rTotal = await erc20_instance._rTotal();

    let suma = await sumar(_tn, _te);
    let q = _rTotal/_tn;
    let qSC = await erc20_instance.q();
    qSC = qSC/1000000000000000000;

    console.log("_tn"+" => "+_tn);
    console.log("_te"+" => "+_te);
    console.log("_tTotal"+" => "+_tTotal);
    console.log("_totalSupply"+" => "+_totalSupply);
    console.log("q"+" => "+q + " = "+ qSC); //

    //_tn = sumar(_tn, _te);// Number(_tn) + Number(_te);

    let resta = restar2(InstantSupply.toString(), _totalSupply.toString() )/1000000000000000000;
    suma= sumar(suma,resta);
    console.log("suma= "+suma)
    console.log( "resta => "+InstantSupply+" - " + _totalSupply + " = " + resta );

    //expect(suma.toString()).to.equal(_totalSupply.toString());
    
    if(condition=="Transac") {
        //expect(0).to.be.lessThan(resta);
    }
    InstantSupply = _totalSupply;
}

function sumar(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
  
    let result = "";
    let carry = 0;
    let maxLength = Math.max(num1.length, num2.length);
  
    for (let i = 0; i < maxLength; i++) {
      let digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i]) : 0;
      let digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i]) : 0;
      let sum = digit1 + digit2 + carry;
  
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
  
    if (carry > 0) {
      result = carry + result;
    }
  
    return result;
  }

  function restar(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
  
    let result = "";
    let borrow = 0;
    let maxLength = Math.max(num1.length, num2.length);
  
    for (let i = 0; i < maxLength; i++) {
      let digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i]) : 0;
      let digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i]) : 0;
  
      if (digit1 < digit2 + borrow) {
        digit1 += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
  
      let difference = digit1 - digit2 - borrow;
      result = difference + result;
    }
  
    // Eliminar ceros no significativos al comienzo del resultado
    result = result.replace(/^0+/, "");
  
    return result;
  }

async function getInitialBalance(erc20_instance,sender) {
    let _EOABalance = await erc20_instance.balanceOf(sender); // El balance del que envía al comienzo
    _EOABalance = _EOABalance / 1000000000000000000;
    return _EOABalance;
}


//_exc2Balance = await getFinalSenderBalance(erc20_instance,_exc2Balance, _amount,owner,std3,true);
async function getFinalSenderBalance(erc20_instance,initialBalance,_amount, sender, _to, exc_send=false, exc_rec=false) {
    await erc20_instance.transfer(_to, _amount + '000000000000000000', { from: sender }); // hace el envío
    let perThousand;
    let _ownerBalance = initialBalance;
    let ownerBalance;
    let ownerBalanceInf;
    let ownerBalanceSup;

    if(exc_send==false) {
        perThousand = await erc20_instance.defaultAStkFee();
        ownerBalance = _ownerBalance - _amount - _amount * perThousand / 1000;
        ownerPerCent = ownerBalance / 40000000;
        ownerBalance = ownerBalance + ownerPerCent * _amount * perThousand / 1000;
        ownerBalanceSup = ownerBalance + (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil
        ownerBalanceInf = ownerBalance - (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil
    
    } else {
        let _errPermitido
        if(exc_rec==false) {
            perThousand = await erc20_instance.estAStkFee(sender);
            ownerBalance = _ownerBalance - _amount - _amount * perThousand / 1000;
            _errPermitido = (_amount * perThousand / 1000) * (errorPermitido/2);
        }else {
            perThousand = 0;
            ownerBalance = _ownerBalance - _amount - _amount * perThousand / 1000;
            _errPermitido = (_amount * 1 / 1000) * (errorPermitido/2);
        }
        ownerBalanceSup = ownerBalance + _errPermitido;
        ownerBalanceInf = ownerBalance - _errPermitido;
    }


    // Pregunta cuanto le quedo en el contrato
    _ownerBalance = await erc20_instance.balanceOf(sender);
    _ownerBalance = Number(_ownerBalance.toString())/1000000000000000000; // Convertir a número
        
    // Realiza la comparación viendo que esté en el medio de los limites
    expect(_ownerBalance).to.be.gte(ownerBalanceInf).and.to.be.lte(ownerBalanceSup);

    console.log("sender final balance = "+_ownerBalance);

    return _ownerBalance;
}


var addressNull="0x0000000000000000000000000000000000000000";
async function getFinalReceiverBalance(erc20_instance,initialBalance,_amount,receiver, exc_send=false, exc_rec=false, sender=addressNull) {
    let perThousand;
    let _tn = await erc20_instance._tn();
    if(exc_send==false && exc_rec==true){
        let _ownerBalance = await erc20_instance.balanceOf(receiver);
        _ownerBalance = _ownerBalance - initialBalance;
        _ownerBalance = _ownerBalance / 1000000000000000000;
        expect(_ownerBalance.toString()).to.equal(_amount.toString());
        console.log(_amount+" debe ser igual a = "+_ownerBalance);
        return _ownerBalance;
    }
    if(exc_send==true && exc_rec==false) {
        perThousand = await erc20_instance.estAStkFee(sender);
        //perThousand = 1;
    }else {
        perThousand = await erc20_instance.defaultAStkFee();
    }
    let _ownerBalance = initialBalance;
    ownerBalance = _ownerBalance + _amount ;
    //ownerPerCent = ownerBalance / 40000000;

    ownerPerCent = ownerBalance / (_tn/1000000000000000000);


    ownerBalance = ownerBalance + ownerPerCent * _amount * perThousand / 1000;
    let comision = ownerPerCent * _amount * perThousand / 1000;
    let ownerBalanceSup = ownerBalance + (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil
    let ownerBalanceInf = ownerBalance - (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil

    // Pregunta cuanto le quedo en el contrato
    _ownerBalance = await erc20_instance.balanceOf(receiver);
    _ownerBalance = Number(_ownerBalance.toString())/1000000000000000000; // Convertir a número
        
    // Realiza la comparación viendo que esté en el medio de los limites
    console.log("ver si se cumple condicion del balance de receiver ("+comision+") => "+ownerBalanceInf+"<"+_ownerBalance+"<"+ownerBalanceSup)
    expect(_ownerBalance).to.be.gte(ownerBalanceInf).and.to.be.lte(ownerBalanceSup);

    console.log("receiver final balance = "+_ownerBalance);

    return _ownerBalance;
}
async function getFinalOtherBalance(erc20_instance,initialBalance,_amount,receiver, sender=addressNull) {
    let _ownerBalance = initialBalance;
    let perThousand;
    let _tn = await erc20_instance._tn();
    if(sender==addressNull) {
        perThousand = await erc20_instance.defaultAStkFee();
    }else{
        perThousand = await erc20_instance.estAStkFee(sender);
    }
    
    ownerBalance = _ownerBalance ;
    ownerPerCent = ownerBalance / (_tn/1000000000000000000);
    ownerBalance = ownerBalance + ownerPerCent * _amount * perThousand / 1000;
    let ownerBalanceSup = ownerBalance + (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil
    let ownerBalanceInf = ownerBalance - (ownerPerCent * _amount * perThousand / 1000) * (errorPermitido/2); // error menor al 1 por mil

    // Pregunta cuanto le quedo en el contrato
    _ownerBalance = await erc20_instance.balanceOf(receiver);
    _ownerBalance = Number(_ownerBalance.toString())/1000000000000000000; // Convertir a número
        
    // Realiza la comparación viendo que esté en el medio de los limites
    expect(_ownerBalance).to.be.gte(ownerBalanceInf).and.to.be.lte(ownerBalanceSup);

    console.log(receiver+" final balance = "+_ownerBalance);

    return _ownerBalance;
}


function restar2(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
  
    let result = "";
    let borrow = 0;
    let maxLength = Math.max(num1.length, num2.length);
  
    if (num1 < num2) {
      [num1, num2] = [num2, num1]; // Intercambiamos los números
      result += "-"; // Agregamos un signo "-" al resultado final
    }
  
    for (let i = 0; i < maxLength; i++) {
      let digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i]) : 0;
      let digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i]) : 0;
  
      digit1 -= borrow; // Restamos el préstamo (borrow) del dígito actual
  
      if (digit1 < digit2) {
        digit1 += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
  
      let difference = digit1 - digit2;
      result = difference + result;
    }
  
    // Eliminar ceros no significativos al comienzo del resultado
    result = result.replace(/^0+/, "");
  
    return result;
  }