Using network 'development'.


Compiling your contracts...
===========================
> Compiling ./contracts/erc20.sol
> Artifacts written to /tmp/test--11226-0UDyeJI4Ruvi
> Compiled successfully using:
   - solc: 0.8.19+commit.7dd6d404.Emscripten.clang

[0m[0m
[0m  Contract: No Excluidas[0m
[0m    30- TxFrom entre dos dir. no excluidas, ambas con astkfee y devfee 0% [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (117ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (111ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (120ms)[0m
    [32m  ✔[0m[90m 07 - transferFrom between standars[0m[31m (259ms)[0m
    [32m  ✔[0m[90m 08 - owner approves 10000 to std1[0m[31m (138ms)[0m
    [32m  ✔[0m[90m 09 - transferFrom between standars[0m[31m (156ms)[0m
    [32m  ✔[0m[90m 10 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 11 - Verify balances[0m[33m (51ms)[0m

[0m  Contract: No Excluidas[0m
[0m    31- TxFrom entre dos dir. no excluidas, ambas con astkfee y devfee positivo.[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - defaultAStkFee changed to 0[0m[31m (93ms)[0m
    [32m  ✔[0m[90m 04 - defaultDevFee changed to 0[0m[31m (102ms)[0m
    [32m  ✔[0m[90m 05 - devWallet = onwer[0m
    [32m  ✔[0m[90m 06 - setDevWallet to dev[0m[31m (95ms)[0m
    [32m  ✔[0m[90m 07 - setAStkFee to 10 to owner[0m[31m (110ms)[0m
    [32m  ✔[0m[90m 08 - setAStkFee to 100 to std1[0m[31m (139ms)[0m
    [32m  ✔[0m[90m 09 - setDevFee to 20 to owner[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standars[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1[0m[31m (113ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standars[0m[31m (139ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 3 ppm). transferFrom = transfer between standars in final balances[0m[33m (47ms)[0m

[0m  Contract: No Excluidas[0m
[0m    32- TxFrom entre una dir. no excluida y otra excluida, ambas con astkfee y devfee 0% [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (106ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (142ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standars[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1[0m[31m (81ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standars[0m[31m (261ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 3 ppm). transferFrom = transfer between standars in final balances[0m[33m (42ms)[0m

[0m  Contract: No Excluidas[0m
[0m    33- TxFrom entre una dir. no excluida y otra excluida, ambas con astkfee y devfee positivo [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m[33m (50ms)[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m[31m (79ms)[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (87ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (118ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (156ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (91ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (134ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standars[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standars[0m[31m (173ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (60ms)[0m

[0m  Contract: No Excluidas[0m
[0m    34- TxFrom entre una dir. excluida y otra no excluida, ambas con astkfee y devfee 0% [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m[33m (46ms)[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (103ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 0 to owner (-1)[0m[31m (145ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 0 to std1[0m[31m (137ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m[33m (51ms)[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 0 to owner[0m[31m (92ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 0 to std1[0m[31m (109ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standar and excluded (must fail)[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standar and excluded [0m[31m (204ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0 ppm)[0m[33m (42ms)[0m
    [32m  ✔[0m[90m 16 - setAStkFee to 0 to std2 (-1)[0m[31m (119ms)[0m
    [32m  ✔[0m[90m 17 - setDevFee to 0 to std2[0m[31m (85ms)[0m
    [32m  ✔[0m[90m 18 - transferFrom between excluded to Standar (must failed)[0m
    [32m  ✔[0m[90m 19 - owner approves 10000 to std1[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 20 - transferFrom between excluded to Standar [0m[31m (187ms)[0m
    [32m  ✔[0m[90m 21 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 22 - Verify balances (error 0 ppm)[0m[33m (69ms)[0m

[0m  Contract: No Excluidas[0m
[0m    35- TxFrom entre una dir. excluida y otra no excluida, ambas con astkfee y devfee positivo [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m[33m (50ms)[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (95ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (477ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (190ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (115ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standar and excluded (must fail)[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to std1[0m[31m (101ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standar and excluded [0m[31m (217ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (69ms)[0m
    [32m  ✔[0m[90m 16 - setAStkFee to 100 to std2 (by default)[0m[31m (96ms)[0m
    [32m  ✔[0m[90m 17 - setDevFee to 25 to std2 (by default)[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 18 - transferFrom between excluded to Standar (must failed)[0m
    [32m  ✔[0m[90m 19 - owner approves 10000 to std1[0m[31m (105ms)[0m
    [32m  ✔[0m[90m 20 - transferFrom between excluded to Standar [0m[31m (181ms)[0m
    [32m  ✔[0m[90m 21 - Allowance reduction to 1000[0m
    [32m  ✔[0m[90m 22 - transferFrom between excluded to Standar (must failed)[0m
    [32m  ✔[0m[90m 23 - Verify balances (error 6 ppm)[0m[33m (54ms)[0m
    [32m  ✔[0m[90m 24 - Allowance still 1000[0m
    [32m  ✔[0m[90m 25 - transferFrom between excluded to Standar[0m[31m (208ms)[0m

[0m  Contract: No Excluidas[0m
[0m    36- TxFrom entre dos dir. excluidas, ambas con astkfee y devfee 0% [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (94ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (112ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (150ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (111ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (124ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (175ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (43ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (78ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (203ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[33m (61ms)[0m
    [32m  ✔[0m[90m 17 - setAStkFee to 0 to std2[0m[31m (138ms)[0m
    [32m  ✔[0m[90m 18 - setDevFee to 0 to std2 (by -1)[0m[31m (124ms)[0m
    [32m  ✔[0m[90m 19 - std2 excluded[0m
    [32m  ✔[0m[90m 20 - setAStkFee to 0 to std1[0m[31m (107ms)[0m
    [32m  ✔[0m[90m 21 - setDevFee to 0 to std1 (by -1)[0m[31m (99ms)[0m
    [32m  ✔[0m[90m 22 - std1 excluded[0m
    [32m  ✔[0m[90m 23 - transferFrom between excluded (must fail)[0m
    [32m  ✔[0m[90m 24 - owner approves 7970 to std1[0m[31m (139ms)[0m
    [32m  ✔[0m[90m 25 - transferFrom between excluded and excluded [0m[31m (747ms)[0m
    [32m  ✔[0m[90m 26 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 27 - Verify balances (error 0 ppm)[0m[33m (60ms)[0m

[0m  Contract: No Excluidas[0m
[0m    37- TxFrom entre dos dir. excluidas, ambas con astkfee y devfee positivo[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (99ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (120ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to std1[0m[31m (136ms)[0m
    [32m  ✔[0m[90m 07 - std1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (83ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to std1 (by default)[0m[31m (114ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (173ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (67ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to std2 (by default)[0m[31m (146ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to std2 (by default)[0m[31m (101ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (209ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (89ms)[0m
    [32m  ✔[0m[90m 17 - setAStkFee to 10 to std2[0m[31m (198ms)[0m
    [32m  ✔[0m[90m 18 - std2 excluded[0m
    [32m  ✔[0m[90m 19 - transferFrom between excluded (must fail)[0m
    [32m  ✔[0m[90m 20 - owner approves 7970 to std1[0m[31m (76ms)[0m
    [32m  ✔[0m[90m 21 - transferFrom between excluded and excluded [0m[31m (91ms)[0m
    [32m  ✔[0m[90m 22 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 23 - Verify balances (error 0 ppm)[0m[31m (100ms)[0m

[0m  Contract: No Excluidas[0m
[0m    33- TxFrom entre una dir. no excluida y otra excluida, ambas con astkfee y devfee positivo [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (123ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 10 to exc1[0m[31m (213ms)[0m
    [32m  ✔[0m[90m 06 - exc1 excluded[0m
    [32m  ✔[0m[90m 07 - owner not excluded[0m[33m (45ms)[0m
    [32m  ✔[0m[90m 08 - std1 not excluded[0m
    [32m  ✔[0m[90m 09 - transferFrom between standars triggered by excluded[0m
    [32m  ✔[0m[90m 10 - owner approves 10000 to exc1[0m[31m (610ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standars[0m[31m (217ms)[0m
    [32m  ✔[0m[90m 12 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (52ms)[0m

[0m  Contract: No Excluidas[0m
[0m    33- TxFrom entre una dir. no excluida y otra excluida, ambas con astkfee y devfee positivo [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m[33m (74ms)[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (99ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (124ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to exc1[0m[31m (285ms)[0m
    [32m  ✔[0m[90m 07 - exc1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (100ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to exc1 (by default)[0m[31m (79ms)[0m
    [32m  ✔[0m[90m 11 - transferFrom between standars[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to exc1[0m[31m (300ms)[0m
    [32m  ✔[0m[90m 13 - transferFrom between standars[0m[31m (208ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (51ms)[0m

[0m  Contract: No Excluidas[0m
[0m    35- TxFrom entre una dir. excluida y otra no excluida, ambas con astkfee y devfee positivo [0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (257ms)[0m
    [32m  ✔[0m[90m 05 - set_AStkFee to 100 to owner[0m[31m (84ms)[0m
    [32m  ✔[0m[90m 06 - set_AStkFee to 10 to exc1[0m[31m (281ms)[0m
    [32m  ✔[0m[90m 07 - exc1 excluded[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (104ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to exc1 (by default)[0m[31m (119ms)[0m
    [32m  ✔[0m[90m 11 - transfer_From between standar and excluded (must fail)[0m
    [32m  ✔[0m[90m 12 - owner approves 10000 to exc1[0m[31m (92ms)[0m
    [32m  ✔[0m[90m 13 - transfer_From between standar and excluded [0m[31m (613ms)[0m
    [32m  ✔[0m[90m 14 - Allowance reduction to 0[0m
    [32m  ✔[0m[90m 15 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[33m (43ms)[0m
    [32m  ✔[0m[90m 16 - set_AStkFee to 100 to exc2 (by default)[0m[31m (200ms)[0m
    [32m  ✔[0m[90m 17 - setDevFee to 25 to exc2 (by default)[0m[31m (122ms)[0m
    [32m  ✔[0m[90m 18 - transfer_From between excluded to Standar (must failed)[0m
    [32m  ✔[0m[90m 19 - owner approves 10000 to exc1[0m[31m (182ms)[0m
    [32m  ✔[0m[90m 20 - transfer_From between excluded to Standar [0m[31m (249ms)[0m
    [32m  ✔[0m[90m 21 - Allowance reduction to 1000[0m
    [32m  ✔[0m[90m 22 - transfer_From between excluded to Standar (must failed)[0m[33m (42ms)[0m
    [32m  ✔[0m[90m 23 - Verify balances (error 6 ppm)[0m[31m (113ms)[0m
    [32m  ✔[0m[90m 24 - Allowance still 1000[0m
    [32m  ✔[0m[90m 25 - transfer_From between excluded to Standar[0m[31m (135ms)[0m

[0m  Contract: No Excluidas[0m
[0m    37- TxFrom entre dos dir. excluidas, ambas con astkfee y devfee positivo[0m
    [32m  ✔[0m[90m 01 - defaultAStkFee should be 100[0m[33m (51ms)[0m
    [32m  ✔[0m[90m 02 - defaultDevFee should be 25[0m
    [32m  ✔[0m[90m 03 - devWallet = onwer[0m
    [32m  ✔[0m[90m 04 - setDevWallet to dev[0m[31m (163ms)[0m
    [32m  ✔[0m[90m 05 - setAStkFee to 100 to owner[0m[31m (322ms)[0m
    [32m  ✔[0m[90m 06 - setAStkFee to 10 to exc1[0m[31m (1265ms)[0m
    [32m  ✔[0m[90m 07 - exc1 excluded[0m[31m (82ms)[0m
    [32m  ✔[0m[90m 08 - owner not excluded[0m
    [32m  ✔[0m[90m 09 - setDevFee to 25 to owner (writing 0 to use default)[0m[31m (141ms)[0m
    [32m  ✔[0m[90m 10 - setDevFee to 25 to exc1 (by default)[0m[31m (380ms)[0m
    [32m  ✔[0m[90m 11 - transfer between standars[0m[31m (270ms)[0m
    [32m  ✔[0m[90m 12 - Verify balances (error 0.6 and 230 ppm for ower and dev)[0m[31m (90ms)[0m
    [32m  ✔[0m[90m 13 - setAStkFee to 100 to exc2 (by default)[0m[31m (210ms)[0m
    [32m  ✔[0m[90m 14 - setDevFee to 25 to exc2 (by default)[0m[31m (276ms)[0m
    [32m  ✔[0m[90m 15 - transfer between excluded and standars[0m[31m (234ms)[0m
    [32m  ✔[0m[90m 16 - Verify balances (error 0 ppm)[0m[31m (102ms)[0m
    [32m  ✔[0m[90m 17 - setAStkFee to 10 to exc2[0m[31m (171ms)[0m
    [32m  ✔[0m[90m 18 - exc2 excluded[0m
    [32m  ✔[0m[90m 19 - std1 excluded[0m
    [32m  ✔[0m[90m 20 - transfer_From between excluded (must fail)[0m
    [32m  ✔[0m[90m 21 - owner approves 7970 to exc1[0m[31m (115ms)[0m
    [32m  ✔[0m[90m 22 - transfer_From between excluded and excluded [0m[31m (272ms)[0m
    [32m  ✔[0m[90m 23 - Allowance reduction to 0[0m[33m (56ms)[0m
    [32m  ✔[0m[90m 24 - Verify balances (error 0 ppm)[0m[31m (129ms)[0m


[92m [0m[32m 230 passing[0m[90m (34s)[0m

