var web3;
var ITO;
var ITO;
var address="Conectar";


init();
var isConnected = obtenerValorDeLocalStorage("HDGCConected");
if(isConnected=="true"){
	connect();
}
// ito.methods.price().call();
// ito.methods.buy().call();
async function init() {
	web3 = new Web3(window.ethereum);// Para usar el provider que inyecta metamask y la librería de web3
	ito = new web3.eth.Contract(abi_ito,ITO_addr);
	erc20 = new web3.eth.Contract(abi_erc20,ERC20_addr);
	// cambio P0 por P1
	P1=await ito.methods.price().call(); //.then( (r)=>{alert("precio= "+r); return(r);} );
	//alert(P1)
	P0=1/P1;
}

// Función para guardar un valor en localStorage
function guardarValorEnLocalStorage(key, valor) {
	localStorage.setItem(key, valor);
  }
  
  // Función para obtener un valor de localStorage
  function obtenerValorDeLocalStorage(key) {
	const valor = localStorage.getItem(key);
	return valor !== null ? valor : "DE";
  }


async function connect()
{
	if(address=="Conectar"){//conectar
		await ethereum.request({ method: 'eth_requestAccounts'});
		address = await web3.eth.getAccounts().then( (res) => {
			document.getElementById('account').innerHTML=res.toString().slice(0,6)+'...'+res.toString().slice(38,42);
			return(res[0]);
		});

		balance0= await erc20.methods.balanceOf(address).call();
		balance0= web3.utils.fromWei(balance0,"ether");
		balance0= trunc(balance0,4);

		balance1= await web3.eth.getBalance(address, 'latest', (e,r)=> {
			return( web3.utils.fromWei(r,"ether") );
		});
		
		balance1= web3.utils.fromWei(balance1,"ether");
		balance1= trunc(balance1,4);

		await swap();
		//await swap();alert(balance1);
		isConnected="true";
		guardarValorEnLocalStorage("HDGCConected", "true");		
	}else{ //desconectar
		await ethereum.request({ method: 'eth_requestAccounts'});
		address = "Conectar";
		document.getElementById('account').innerHTML=address;
		balance0= 0;
		balance1= 0;
		await swap();
		//await swap();
		isConnected="false";
		guardarValorEnLocalStorage("HDGCConected", "false");
	}

}


async function handleSubmit() {
	//alert(amount0);//HDGC
	//alert(amount1);//BNB

	//showToast(' Todo salio perfecto', 'green');
	//showToast('Todo salio mal', 'red');

	//alert(amount1);
	var amount1Aux = web3.utils.toWei(amount1.toFixed(10).toString(), 'ether');

	ito.methods.buy().send({value: amount1Aux, from: address })
		.on('transactionHash', function(hash){ showToast( "created with hash= " + hash, "orange" ); startSpinner() })
		.on('receipt', async function(receipt){ 
			await stopSpinner();
			showToast("Operation done", "green"); 
			var isConnected = await obtenerValorDeLocalStorage("HDGCConected");
			if(isConnected=="true"){
				setTimeout(async function(){await connect(); await connect();},3100);
			}
			setTimeout(init,3300);
		})
		.on('error', async function(error){ 
			await stopSpinner();
			showToast("Try again Later", "red"); 
		}); // If a out of gas error, the second parameter is the receipt.

}


function showToast(address, color) {
	var toast = document.getElementById("toast");
	var addressLines = address.match(/.{1,20}/g); // Dividir la dirección en grupos de 6 caracteres
  
	toast.innerHTML = ""; // Limpiar el contenido del toast
  
	addressLines.forEach(function(line) {
	  var lineElement = document.createElement("div");
	  lineElement.textContent = line;
	  toast.appendChild(lineElement);
	});
  
	toast.style.backgroundColor = color;
	toast.classList.add("show");
	setTimeout(function(){
	  toast.classList.remove("show");
	}, 3000);
  }



function startSpinner() {
	var spinner = document.getElementById("spinner");
  spinner.style.display = "block"; // Mostrar el spinner
}

function stopSpinner() {
	var spinner = document.getElementById("spinner");
  spinner.style.display = "none"; // Ocultar el spinner
}