Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--11213-NyiDpSXVpSeT
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: No Excluidas[0m
[0m    10- Tx entre una dir. no excluida y otra excluida, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (104ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (128ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (172ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (99ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (105ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (202ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 3 ppm)[0m[33m (57ms)[0m

[0m  Contract: No Excluidas[0m
[0m    11- Tx entre una dir. no excluida y otra excluida, ambas con astkfee en 0% y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (115ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (176ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (148ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (101ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (215ms)[0m
    [32m  ✔[0m[90m 09 - Verify balances[0m[33m (43ms)[0m

[0m  Contract: No Excluidas[0m
[0m    12- Tx entre una dir. no excluida y otra excluida, ambas con astkfee en 0% y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (95ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (141ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[31m (88ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (162ms)[0m
    [32m  ✔[0m[90m 09 - Verify balances[0m[33m (41ms)[0m

[0m  Contract: No Excluidas[0m
[0m    13- Tx entre una dir. no excluida y otra excluida, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (120ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (148ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 50 ppm)[0m[33m (45ms)[0m

[0m  Contract: No Excluidas[0m
[0m    14- Tx entre una dir. no excluida y otra excluida, una con astkfee en 0% y la otra con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (108ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (132ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (79ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (168ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (45ms)[0m

[0m  Contract: No Excluidas[0m
[0m    15- Tx entre una dir. no excluida y otra excluida, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (84ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (122ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (80ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (147ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (61ms)[0m

[0m  Contract: No Excluidas[0m
[0m    16- Tx entre una dir. no excluida y otra excluida, ambas con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (102ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (133ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (118ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (76ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (172ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 50 ppm)[0m[33m (45ms)[0m

[0m  Contract: No Excluidas[0m
[0m    17- Tx entre una dir. no excluida y otra excluida, ambas con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (109ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (122ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (88ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (77ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (168ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (42ms)[0m

[0m  Contract: No Excluidas[0m
[0m    18- Tx entre una dir. no excluida y otra excluida, ambas con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (93ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (165ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (86ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[33m (72ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (219ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (45ms)[0m


[92m [0m[32m 108 passing[0m[90m (13s)[0m

