Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--11157-EOMjrX50wuXg
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: No Excluidas[0m
[0m    19- Tx entre una dir. excluida y otra no excluida, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (116ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (123ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (167ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (107ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standar and excluded[0m[31m (187ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0 ppm)[0m[33m (48ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 0 to std2 (-1)[0m[31m (119ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 0 to std2[0m[31m (107ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (209ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (74ms)[0m

[0m  Contract: No Excluidas[0m
[0m    20- Tx entre una dir. excluida y otra no excluida, ambas con astkfee en 0% y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (111ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (115ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (163ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (97ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (157ms)[0m
    [32m  ✔[0m[90m 09 - Verify balances[0m[33m (55ms)[0m
    [32m  ✔[0m[90m 10 - setAStkFee to 0 to std2 (-1)[0m[31m (112ms)[0m
    [32m  ✔[0m[90m 11 - setDevFee to 25 to std2 (default)[0m[31m (86ms)[0m
    [32m  ✔[0m[90m 12 - transfer between excluded and standars[0m[31m (160ms)[0m
    [32m  ✔[0m[90m 13 - Verify balances (error 0 ppm)[0m[33m (68ms)[0m

[0m  Contract: No Excluidas[0m
[0m    21- Tx entre una dir. excluida y otra no excluida, ambas con astkfee en 0% y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (92ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (167ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (99ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (154ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances[0m[33m (62ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 0 to std2 (-1)[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (default)[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (163ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (62ms)[0m

[0m  Contract: No Excluidas[0m
[0m    22- Tx entre una dir. excluida y otra no excluida, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (102ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (139ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (86ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (142ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 50 ppm)[0m[33m (63ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 0 to std2 (writing -1)[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (159ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (54ms)[0m

[0m  Contract: No Excluidas[0m
[0m    23- Tx entre una dir. excluida y otra no excluida, una con astkfee en 0% y la otra con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (147ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[33m (73ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (175ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (40ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (183ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (69ms)[0m

[0m  Contract: No Excluidas[0m
[0m    24- Tx entre una dir. excluida y otra no excluida, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (108ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (137ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[33m (75ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (185ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (43ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (108ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (151ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (76ms)[0m

[0m  Contract: No Excluidas[0m
[0m    25- Tx entre una dir. excluida y otra no excluida, ambas con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (136ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (88ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (169ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (184ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 50 ppm)[0m[33m (74ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (93ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 0 to std2 (by -1)[0m[31m (108ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (175ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (63ms)[0m

[0m  Contract: No Excluidas[0m
[0m    26- Tx entre una dir. excluida y otra no excluida, ambas con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (135ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (220ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (166ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[31m (78ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (97ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (134ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (160ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (79ms)[0m

[0m  Contract: No Excluidas[0m
[0m    27- Tx entre una dir. excluida y otra no excluida, ambas con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (134ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (174ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[33m (71ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (138ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (192ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (41ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (119ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (97ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (188ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (61ms)[0m


[92m [0m[32m 144 passing[0m[90m (17s)[0m

