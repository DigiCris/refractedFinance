Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--10927-Jd17ePtn2slH
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: No Excluidas[0m
[0m    28- Tx entre dos dir. excluidas, ambas con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (117ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (122ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (167ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (104ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (123ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (238ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[31m (124ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (328ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (291ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (97ms)[0m
    [32m  ✔[0m[90m 17 - setAStkFee to 10 to std2[0m[31m (187ms)[0m
    [32m  ✔[0m[90m 18 - std2 excluded[0m
    [32m  ✔[0m[90m 19 - transfer between excluded[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 20 - Verify balances (error 0 ppm)[0m[33m (69ms)[0m

[0m  Contract: No Excluidas[0m
[0m    29- Tx entre dos dir. excluidas, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (113ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (300ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (86ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (121ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (179ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (48ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (206ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (126ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (243ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 17 - setAStkFee to 0 to std2[0m[31m (144ms)[0m
    [32m  ✔[0m[90m 18 - setDevFee to 0 to std2 (by -1)[0m[31m (92ms)[0m
    [32m  ✔[0m[90m 19 - std2 excluded[0m
    [32m  ✔[0m[90m 20 - setAStkFee to 0 to std1[0m[31m (122ms)[0m
    [32m  ✔[0m[90m 21 - setDevFee to 0 to std1 (by -1)[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 22 - std1 excluded[0m
    [32m  ✔[0m[90m 23 - transfer between excluded[0m[31m (84ms)[0m
    [32m  ✔[0m[90m 24 - Verify balances (error 0 ppm)[0m[31m (86ms)[0m


[92m [0m[32m 44 passing[0m[90m (6s)[0m

