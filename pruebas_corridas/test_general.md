Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--11187-y1vr4npGdGhQ
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: 38- Tx and TxFrom => balcklist (todas deben ser fallidas fallida)[0m
[0m    01- Tx entre dos dir. no excluidas, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (114ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 07 - transfer between standars[0m[31m (164ms)[0m
    [32m  ✔[0m[90m 08 - Verify balances[0m[33m (61ms)[0m
    [32m  ✔[0m[90m 09 - Blacklist std1 and std3[0m
    [32m  ✔[0m[90m 10 - transfer to blacklist must fail[0m[31m (163ms)[0m
    [32m  ✔[0m[90m 11 - transfer from blacklist must fail[0m[31m (144ms)[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1 (who is blacklisted)[0m[31m (114ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom => owner sends from blacklisted std1 to std4[0m[31m (173ms)[0m
    [32m  ✔[0m[90m 14 - owner approves 10000 to std4[0m[31m (112ms)[0m
    [32m  ✔[0m[90m 15 - transferFrom => std4 sends from blacklisted std1 to owner[0m[31m (174ms)[0m
    [32m  ✔[0m[90m 16 - owner approves 10000 to std1(who is blacklisted)[0m[31m (120ms)[0m
    [32m  ✔[0m[90m 17 - transferFrom => std1 sends from owner to std4 (only std1 is blacklisted. must fail)[0m[31m (181ms)[0m

[0m  Contract: 39- Tx permitida por sobre el limite variado los limites de tx y tenencia.[0m
[0m    01- Tx entre dos dir. no excluidas, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (112ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (93ms)[0m
    [32m  ✔[0m[90m 07 - transfer between standars[0m[31m (139ms)[0m
    [32m  ✔[0m[90m 08 - Verify balances[0m[33m (54ms)[0m
    [32m  ✔[0m[90m 09 - transfer between standars 10001 (must not fail)[0m[31m (148ms)[0m
    [32m  ✔[0m[90m 10 - owner setMaxTx to 50000 to itself (no hay MaxTx)[0m
    [32m  ✔[0m[90m 11 - std1 tries to setMaxTx to 40000 to owner (must fail)[0m
    [32m  ✔[0m[90m 12 - transfer 50000 from owner to std1 must not fail[0m[31m (147ms)[0m
    [32m  ✔[0m[90m 13 - Verify balances[0m
    [32m  ✔[0m[90m 14 - transfer 50000 from owner to std1 must not fail because there is no limit (maxWallet does not exist)[0m[31m (156ms)[0m
    [32m  ✔[0m[90m 15 - Verify balances[0m
    [32m  ✔[0m[90m 16 - owner setMaxWallet to 110000 to std1[0m
    [32m  ✔[0m[90m 17 - transfer 50000 from owner to std1 must succed[0m[31m (146ms)[0m
    [32m  ✔[0m[90m 18 - Verify balances. (110 to std1)[0m
    [32m  ✔[0m[90m 19 - std1 setMaxWallet to 120000 to itself (must fail-> does not exist)[0m
    [32m  ✔[0m[90m 20 - transfer 50000 from owner to std1 must not fail because setMaxWallet does not exist[0m[31m (153ms)[0m
    [32m  ✔[0m[90m 21 - std1 setDefaultMaxTx to 10 (Must Fail)[0m
    [32m  ✔[0m[90m 22 - std1 setDefaultMaxWallet to 10 (Must Fail)[0m
    [32m  ✔[0m[90m 23 - owner setDefaultMaxTx to 100 (Must Fail)[0m
    [32m  ✔[0m[90m 24 - owner setDefaultMaxWallet to 100 (Must Fail)[0m

[0m  Contract: 40- Pause testing[0m
[0m    01- Tx entre dos dir. no excluidas, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (88ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (88ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 07 - transfer between standars[0m[31m (138ms)[0m
    [32m  ✔[0m[90m 08 - Verify balances[0m[33m (44ms)[0m
    [32m  ✔[0m[90m 09 - std1 pause transfer (Must Fail)[0m
    [32m  ✔[0m[90m 10 - transfer between standars[0m[31m (116ms)[0m
    [32m  ✔[0m[90m 11 - Verify balances[0m[33m (46ms)[0m
    [32m  ✔[0m[90m 12 - owner pause transfer (must fail)[0m
    [32m  ✔[0m[90m 13 - transfer between standars (must not fail)[0m[31m (121ms)[0m
    [32m  ✔[0m[90m 14 - Verify balances[0m
    [32m  ✔[0m[90m 15 - std1 unpause transfer (Must Fail)[0m
    [32m  ✔[0m[90m 16 - transfer between standars (must not fail)[0m[31m (126ms)[0m
    [32m  ✔[0m[90m 17 - Verify balances[0m
    [32m  ✔[0m[90m 18 - owner unpause transfer (succed)[0m
    [32m  ✔[0m[90m 19 - transfer between standars[0m[31m (123ms)[0m
    [32m  ✔[0m[90m 20 - Verify balances[0m

[0m  Contract: Finanzas refractadas[0m
[0m    constructor[0m
    [32m  ✔[0m[90m 01 - Token name: 	HedgeCoin[0m
    [32m  ✔[0m[90m 02 - Token symbol:	HDGC[0m
    [32m  ✔[0m[90m 03 - Total supply:	20.000.000[0m
    [32m  ✔[0m[90m 04 - balanceOf(owner):	20.000.000[0m
    [32m  ✔[0m[90m 05 - balanceOf(null):	20.000.000[0m
    [32m  ✔[0m[90m 06 - Decimals:		18[0m
    [32m  ✔[0m[90m 07 - Recover:	No se puede mandar al contrato[0m[31m (142ms)[0m
    [32m  ✔[0m[90m 08 - set Dev:	Seteo la dev Wallet[0m[31m (115ms)[0m


[92m [0m[32m 69 passing[0m[90m (7s)[0m

