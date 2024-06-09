Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--11200-GIfazRDVleEE
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: No Excluidas[0m
[0m    01- Tx entre dos dir. no excluidas, ambas con astkfee y devfee 0%[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (149ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (108ms)[0m
    [32m  ✔[0m[90m 07 - transfer between standars[0m[31m (157ms)[0m
    [32m  ✔[0m[90m 08 - Verify balances[0m[33m (52ms)[0m

[0m  Contract: No Excluidas[0m
[0m    02- Tx entre dos dir. no excluidas, ambas con astkfee en 0% y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (101ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 07 - setDevFee to 25[0m[31m (160ms)[0m
    [32m  ✔[0m[90m 08 - transfer between standars[0m[31m (166ms)[0m
    [32m  ✔[0m[90m 09 - Verify balances[0m[33m (50ms)[0m

[0m  Contract: No Excluidas[0m
[0m    03- Tx entre dos dir. no excluidas, ambas con astkfee en 0% y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (109ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (93ms)[0m
    [32m  ✔[0m[90m 07 - setDevFee to 25 to owner[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 08 - setDevFee to 25 to std1[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 09 - transfer between standars[0m[31m (134ms)[0m
    [32m  ✔[0m[90m 10 - Verify balances[0m[33m (67ms)[0m

[0m  Contract: No Excluidas[0m
[0m    04- Tx entre dos dir. no excluidas, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (84ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100[0m[31m (95ms)[0m
    [32m  ✔[0m[90m 08 - transfer between standars[0m[31m (124ms)[0m
    [32m  ✔[0m[90m 09 - Verify balances (error 250 ppm)[0m[33m (44ms)[0m

[0m  Contract: No Excluidas[0m
[0m    05- Tx entre dos dir. no excluidas, una con astkfee en 0% y la otra con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100[0m[31m (98ms)[0m
    [32m  ✔[0m[90m 08 - setDevFee to 25[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 09 - transfer between standars[0m[31m (131ms)[0m
    [32m  ✔[0m[90m 10 - Verify balances (error 3 ppm)[0m[33m (40ms)[0m

[0m  Contract: No Excluidas[0m
[0m    06- Tx entre dos dir. no excluidas, una con astkfee en 0% y la otra con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100[0m[31m (111ms)[0m
    [32m  ✔[0m[90m 08 - setDevFee to 25 to owner[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to std1[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 10 - transfer between standars[0m[31m (112ms)[0m
    [32m  ✔[0m[90m 11 - Verify balances (error 3 ppm)[0m[33m (74ms)[0m

[0m  Contract: No Excluidas[0m
[0m    07- Tx entre dos dir. no excluidas, ambas con astkfee positivo y ambas con devfee 0%.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (84ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (77ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100 to owner[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 08 - setAStkFee to 100 to std1[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[33m (74ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (79ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (168ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 250 ppm)[0m[33m (44ms)[0m

[0m  Contract: No Excluidas[0m
[0m    08- Tx entre dos dir. no excluidas, ambas con astkfee positivo y una con devfee en 0% y la otra con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (80ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100 to owner[0m[31m (130ms)[0m
    [32m  ✔[0m[90m 08 - setAStkFee to 100 to std1[0m[31m (121ms)[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (80ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (118ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (121ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 3 ppm)[0m[33m (46ms)[0m

[0m  Contract: No Excluidas[0m
[0m    09- Tx entre dos dir. no excluidas, ambas con astkfee positivo y ambas con devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 100 to owner[0m[31m (95ms)[0m
    [32m  ✔[0m[90m 08 - setAStkFee to 100 to std1[0m[31m (133ms)[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner[0m[31m (106ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[31m (115ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (127ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 3 ppm)[0m[33m (44ms)[0m


[92m [0m[32m 93 passing[0m[90m (12s)[0m

