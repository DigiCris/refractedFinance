var comprar="BNB";

var token0="HDGC";
var token1="BNB";

var logo0="./HDGC.png";
var logo1="./BNB.png";

var balance0=4;
var balance1=5;

var amount0=0;
var amount1=1;

var P0=0.1;// precio HDGC
var P1=10;// Precio de BNB

var boton="connect";


function swap(){ // cambia nombre del token, precio y balances
	document.getElementsByClassName("balance")[0].innerHTML=balance0;
	document.getElementsByClassName("balance")[1].innerHTML=balance1;
	document.getElementsByClassName("precio")[0].innerHTML = (1/P1).toFixed(6);
}



function setValueTokenToSpend() {
	amount0 = document.getElementsByClassName("IHAVE")[0].value;
	amount0 = amount0 / 1;
	amount1 = amount0/P1 ;
	document.getElementsByClassName("IWANT")[0].value=amount1;
}

function setValueTokenToReceive() {
	amount1= document.getElementsByClassName("IWANT")[0].value;
	amount1 = amount1 / 1;
	amount0= amount1/P0;
	document.getElementsByClassName("IHAVE")[0].value=amount0;
}




function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1
  var numStr = s.substr(0, decimalLength + posiciones)
  return Number(numStr)
}