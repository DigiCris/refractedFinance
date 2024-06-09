/*
1) Token name = HedgeCoin
2) Token symbol = HDGC
3) total suply = 20 millones
4) Decimales = 18
5) can recover = yes (?) => Poder recuperar si alguien manda token a la dirección del contrato
6) max transaction = 10mil (?) => por cada transacción
7) max wallet = 100mil (?) => no más de 100 mil por cada cuenta
8) Tx Fees = 1% (?) => En caso de ser smart contract el destino, ese 1% se reparte como reward.
(Si es billetera es el 1% fijo y se reparte como reward entre los holders y en caso de que sea a un smart
    contract hace los puntos de más abajo)
9) CEX buy tax = 0.25% (?) => Esto que vaya a una wallet aparte para juntar para desarrollo
10) CEX sell tax = 0.5% (?)
11) Reward buy tax = 0.25% (?) => a cambio del 1% del punto 8, repartir esto entre las billeteras
12) Reward sell tax = 0.5% (?)
13) Burn buy tax = 0.75% (?) => Quemar en vez del 1% cuando es hacia smart contracts
14) Burn sell tax = 1.5% (?)
15) Blacklisting (?) => parar una dirección de operar. Congelarle la billetera.
16) Minimum HODL for reward = 100 HDGC (?)
17) Whitelisting = Excentas de Max transaction, Max wallet y TX fees
18) Probar 200 mil holders para ver el gas y el precio de las transacciones dado por las rewards.

Precio:
150 token simple para ser utilizado en pooles existentes.

200 Token con caracteristicas transaccionales simple
230 token con caracteristicas transaccionales distinguidas

250 Token que permita compra y venta contra su protocolo (contra 1 token) 

Extras=
1) 15USD por token agregado
2) 20 USD por la verificacion
3) Cargos de mainnet para el deploy

Forma de pago= 
1) Se genera la especificación para el TDD y presupuesto = 1 día
2) Se cobra el 10% del total para comenzar a trabajar
3) Se realiza el trabajo que cumpla los requisitos.
4) se revisa vulnerabilidades conocidas en el código, para lo cual puede agregarse pruebas al TDD
5) Se hace el deploy en testnet.
6) Se muestra funcionamiento y se puede hacer agregados en caso de necesitarse recombinando presupuesto
7) se hace el deploy en mainnet sin verificación
8) Se recibe el pago restante del total
9) hacemos el cambio del owner en el código.
10) En caso de optar por el verificado se hace la verificación. a partir de la cual poseerá el código.
En caso de no optarse con verificación, se entrega solamente el ABI para poder interactuar con el desde
la aplicación que se diseñe. Con entrega de código sin verificación cuesta lo mismo que verificado.

El pago puede ser en stablecoin o en pesos. En caso de hacerse en peso tomamos la conversión del promedio
entre compra y venta del dolar blue de la fecha en que se haga el pago. En caso de que el precio del 10%
primero del pago y el 90% restante tengan precios distintos se toma para cada pago el del día en que se
efectúa. En caso de hacerse en pesos y de necesitarse podemos hacer factura.

Datos Extras=
No posee auditoría. En caso de quererla podemos pasarle los lugares para que la gestione. Los precios de esta
pueden ir entre los 4000 dolares a 80 mil dolares aproximadamente.


10 token = 10 dolares + 10 tokens (20 tokens)
0 tokens = 0 dolares + 10 token (10 tokens)


15 token en pancakeswapp - 15 dolares
1 token                  - 29 dolares
*/