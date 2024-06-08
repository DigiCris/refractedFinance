Summary
 - [divide-before-multiply](#divide-before-multiply) (6 results) (Medium)
 - [events-maths](#events-maths) (4 results) (Low)
 - [missing-zero-check](#missing-zero-check) (2 results) (Low)
 - [pragma](#pragma) (1 results) (Informational)
 - [dead-code](#dead-code) (5 results) (Informational)
 - [solc-version](#solc-version) (2 results) (Informational)
 - [naming-convention](#naming-convention) (26 results) (Informational)
 - [too-many-digits](#too-many-digits) (7 results) (Informational)
 - [immutable-states](#immutable-states) (2 results) (Optimization)
## divide-before-multiply
Impact: Medium
Confidence: Medium
 - [ ] ID-0
[HedgeCoin._transferToExcluded(address,address,uint256)](contracts/Hedgecoin.sol#L178-L203) performs a multiplication on the result of a division:
	- [rAmount = tAmount * q / q_init](contracts/Hedgecoin.sol#L181)
	- [rDev = readDevFee(msgSender) * rAmount / 10000](contracts/Hedgecoin.sol#L183)

contracts/Hedgecoin.sol#L178-L203


 - [ ] ID-1
[HedgeCoin._transferStandard(address,address,uint256)](contracts/Hedgecoin.sol#L149-L176) performs a multiplication on the result of a division:
	- [rAmount = tAmount * q / q_init](contracts/Hedgecoin.sol#L152)
	- [rDev = readDevFee(msgSender) * rAmount / 10000](contracts/Hedgecoin.sol#L155)

contracts/Hedgecoin.sol#L149-L176


 - [ ] ID-2
[HedgeCoin._transferFromExcluded(address,address,uint256)](contracts/Hedgecoin.sol#L207-L224) performs a multiplication on the result of a division:
	- [tFee = _fee * tAmount / 10000](contracts/Hedgecoin.sol#L211)
	- [rFee = tFee * q / q_init](contracts/Hedgecoin.sol#L212)

contracts/Hedgecoin.sol#L207-L224


 - [ ] ID-3
[HedgeCoin._transferStandard(address,address,uint256)](contracts/Hedgecoin.sol#L149-L176) performs a multiplication on the result of a division:
	- [rAmount = tAmount * q / q_init](contracts/Hedgecoin.sol#L152)
	- [rfee = uint256(_fee) * rAmount / 10000](contracts/Hedgecoin.sol#L154)

contracts/Hedgecoin.sol#L149-L176


 - [ ] ID-4
[HedgeCoin._transferFromExcluded(address,address,uint256)](contracts/Hedgecoin.sol#L207-L224) performs a multiplication on the result of a division:
	- [rAmount = tAmount * q / q_init](contracts/Hedgecoin.sol#L213)
	- [rDev = readDevFee(msgSender) * rAmount / 10000](contracts/Hedgecoin.sol#L214)

contracts/Hedgecoin.sol#L207-L224


 - [ ] ID-5
[HedgeCoin._transferToExcluded(address,address,uint256)](contracts/Hedgecoin.sol#L178-L203) performs a multiplication on the result of a division:
	- [rDev = readDevFee(msgSender) * rAmount / 10000](contracts/Hedgecoin.sol#L183)
	- [tDev = rDev * q_init / q](contracts/Hedgecoin.sol#L184)

contracts/Hedgecoin.sol#L178-L203


## events-maths
Impact: Low
Confidence: Medium
 - [ ] ID-6
[HedgeCoin.setDefaultDevFee(uint256)](contracts/Hedgecoin.sol#L292-L295) should emit an event for: 
	- [defaultDevFee = _value](contracts/Hedgecoin.sol#L294) 

contracts/Hedgecoin.sol#L292-L295


 - [ ] ID-7
[HedgeCoin.setDefaultMaxTx(uint256)](contracts/Hedgecoin.sol#L270-L273) should emit an event for: 
	- [defaultMaxTx = _value](contracts/Hedgecoin.sol#L272) 

contracts/Hedgecoin.sol#L270-L273


 - [ ] ID-8
[HedgeCoin.setDefaultMaxWallet(uint256)](contracts/Hedgecoin.sol#L282-L285) should emit an event for: 
	- [defaultMaxWallet = _value](contracts/Hedgecoin.sol#L284) 

contracts/Hedgecoin.sol#L282-L285


 - [ ] ID-9
[HedgeCoin.setDefaultAStkFee(uint256)](contracts/Hedgecoin.sol#L258-L261) should emit an event for: 
	- [defaultAStkFee = _value](contracts/Hedgecoin.sol#L260) 

contracts/Hedgecoin.sol#L258-L261


## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-10
[HedgeCoin.setDevWallet(address)._addr](contracts/Hedgecoin.sol#L297) lacks a zero-check on :
		- [devWallet = _addr](contracts/Hedgecoin.sol#L298)

contracts/Hedgecoin.sol#L297


 - [ ] ID-11
[HedgeCoin.constructor(address)._ownerToken](contracts/Hedgecoin.sol#L32) lacks a zero-check on :
		- [devWallet = _ownerToken](contracts/Hedgecoin.sol#L37)

contracts/Hedgecoin.sol#L32


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-12
2 different versions of Solidity are used:
	- Version constraint ^0.8.19 is used by:
 		- contracts/Hedgecoin.sol#2
	- Version constraint ^0.8.20 is used by:
 		- node_modules/@openzeppelin/contracts/access/Ownable.sol#4
		- node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol#3
		- node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#4
		- node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#4
		- node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol#4
		- node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#4
		- node_modules/@openzeppelin/contracts/utils/Context.sol#4
		- node_modules/@openzeppelin/contracts/utils/Pausable.sol#4

## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-13
[Context._contextSuffixLength()](node_modules/@openzeppelin/contracts/utils/Context.sol#L25-L27) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L25-L27


 - [ ] ID-14
[ERC20._burn(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L241-L246) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L241-L246


 - [ ] ID-15
[Context._msgData()](node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

node_modules/@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-16
[ERC20._transfer(address,address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L171-L179) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L171-L179


 - [ ] ID-17
[ERC20._mint(address,uint256)](node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L226-L231) is never used and should be removed

node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#L226-L231


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-18
Version constraint ^0.8.19 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess.
 It is used by:
	- contracts/Hedgecoin.sol#2

 - [ ] ID-19
Version constraint ^0.8.20 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- VerbatimInvalidDeduplication
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess.
 It is used by:
	- node_modules/@openzeppelin/contracts/access/Ownable.sol#4
	- node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol#3
	- node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol#4
	- node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol#4
	- node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol#4
	- node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#4
	- node_modules/@openzeppelin/contracts/utils/Context.sol#4
	- node_modules/@openzeppelin/contracts/utils/Pausable.sol#4

## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-20
Parameter [HedgeCoin.setMaxTx(address,uint256)._addr](contracts/Hedgecoin.sol#L263) is not in mixedCase

contracts/Hedgecoin.sol#L263


 - [ ] ID-21
Parameter [HedgeCoin.setDevFee(address,int256)._value](contracts/Hedgecoin.sol#L287) is not in mixedCase

contracts/Hedgecoin.sol#L287


 - [ ] ID-22
Parameter [HedgeCoin.setAStkFee(address,bool,int256)._fee](contracts/Hedgecoin.sol#L305) is not in mixedCase

contracts/Hedgecoin.sol#L305


 - [ ] ID-23
Parameter [HedgeCoin.setDefaultDevFee(uint256)._value](contracts/Hedgecoin.sol#L292) is not in mixedCase

contracts/Hedgecoin.sol#L292


 - [ ] ID-24
Parameter [HedgeCoin.setDevWallet(address)._addr](contracts/Hedgecoin.sol#L297) is not in mixedCase

contracts/Hedgecoin.sol#L297


 - [ ] ID-25
Parameter [HedgeCoin.readDevFee(address)._addr](contracts/Hedgecoin.sol#L101) is not in mixedCase

contracts/Hedgecoin.sol#L101


 - [ ] ID-26
Variable [HedgeCoin.q_init](contracts/Hedgecoin.sol#L13) is not in mixedCase

contracts/Hedgecoin.sol#L13


 - [ ] ID-27
Parameter [HedgeCoin.estAStkFee(address)._addr](contracts/Hedgecoin.sol#L113) is not in mixedCase

contracts/Hedgecoin.sol#L113


 - [ ] ID-28
Parameter [HedgeCoin.setDefaultAStkFee(uint256)._value](contracts/Hedgecoin.sol#L258) is not in mixedCase

contracts/Hedgecoin.sol#L258


 - [ ] ID-29
Parameter [HedgeCoin.maxWallet(address)._addr](contracts/Hedgecoin.sol#L92) is not in mixedCase

contracts/Hedgecoin.sol#L92


 - [ ] ID-30
Parameter [HedgeCoin.maxTx(address)._addr](contracts/Hedgecoin.sol#L83) is not in mixedCase

contracts/Hedgecoin.sol#L83


 - [ ] ID-31
Parameter [HedgeCoin.setDefaultMaxTx(uint256)._value](contracts/Hedgecoin.sol#L270) is not in mixedCase

contracts/Hedgecoin.sol#L270


 - [ ] ID-32
Parameter [HedgeCoin.setDevFee(address,int256)._addr](contracts/Hedgecoin.sol#L287) is not in mixedCase

contracts/Hedgecoin.sol#L287


 - [ ] ID-33
Parameter [HedgeCoin.setBlacklist(address,bool)._value](contracts/Hedgecoin.sol#L301) is not in mixedCase

contracts/Hedgecoin.sol#L301


 - [ ] ID-34
Variable [HedgeCoin._tn](contracts/Hedgecoin.sol#L19) is not in mixedCase

contracts/Hedgecoin.sol#L19


 - [ ] ID-35
Variable [HedgeCoin._rTotal](contracts/Hedgecoin.sol#L20) is not in mixedCase

contracts/Hedgecoin.sol#L20


 - [ ] ID-36
Variable [HedgeCoin._tOwned](contracts/Hedgecoin.sol#L11) is not in mixedCase

contracts/Hedgecoin.sol#L11


 - [ ] ID-37
Variable [HedgeCoin._rOwned](contracts/Hedgecoin.sol#L10) is not in mixedCase

contracts/Hedgecoin.sol#L10


 - [ ] ID-38
Parameter [HedgeCoin.setMaxWallet(address,uint256)._addr](contracts/Hedgecoin.sol#L275) is not in mixedCase

contracts/Hedgecoin.sol#L275


 - [ ] ID-39
Parameter [HedgeCoin.setDefaultMaxWallet(uint256)._value](contracts/Hedgecoin.sol#L282) is not in mixedCase

contracts/Hedgecoin.sol#L282


 - [ ] ID-40
Variable [HedgeCoin._isExcluded](contracts/Hedgecoin.sol#L15) is not in mixedCase

contracts/Hedgecoin.sol#L15


 - [ ] ID-41
Parameter [HedgeCoin.setMaxWallet(address,uint256)._value](contracts/Hedgecoin.sol#L275) is not in mixedCase

contracts/Hedgecoin.sol#L275


 - [ ] ID-42
Parameter [HedgeCoin.setBlacklist(address,bool)._addr](contracts/Hedgecoin.sol#L301) is not in mixedCase

contracts/Hedgecoin.sol#L301


 - [ ] ID-43
Parameter [HedgeCoin.aStkFee(address)._addr](contracts/Hedgecoin.sol#L64) is not in mixedCase

contracts/Hedgecoin.sol#L64


 - [ ] ID-44
Parameter [HedgeCoin.setMaxTx(address,uint256)._value](contracts/Hedgecoin.sol#L263) is not in mixedCase

contracts/Hedgecoin.sol#L263


 - [ ] ID-45
Variable [HedgeCoin._te](contracts/Hedgecoin.sol#L18) is not in mixedCase

contracts/Hedgecoin.sol#L18


## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-46
[HedgeCoin.constructor(address)](contracts/Hedgecoin.sol#L32-L46) uses literals with too many digits:
	- [_update(address(0),_ownerToken,20000000 * 10 ** decimals())](contracts/Hedgecoin.sol#L38)

contracts/Hedgecoin.sol#L32-L46


 - [ ] ID-47
[HedgeCoin.setDefaultMaxWallet(uint256)](contracts/Hedgecoin.sol#L282-L285) uses literals with too many digits:
	- [require(bool,string)(_value >= (100000 * (10 ** decimals())),defaultMaxWallet can't be less than 100000)](contracts/Hedgecoin.sol#L283)

contracts/Hedgecoin.sol#L282-L285


 - [ ] ID-48
[HedgeCoin.setMaxWallet(address,uint256)](contracts/Hedgecoin.sol#L275-L280) uses literals with too many digits:
	- [require(bool,string)(_value >= (100000 * (10 ** decimals())),maxWallet can't be less than 100000)](contracts/Hedgecoin.sol#L277)

contracts/Hedgecoin.sol#L275-L280


 - [ ] ID-49
[HedgeCoin.constructor(address)](contracts/Hedgecoin.sol#L32-L46) uses literals with too many digits:
	- [rQuemado = 20000000 * 10 ** decimals()](contracts/Hedgecoin.sol#L40)

contracts/Hedgecoin.sol#L32-L46


 - [ ] ID-50
[HedgeCoin.constructor(address)](contracts/Hedgecoin.sol#L32-L46) uses literals with too many digits:
	- [_rOwned[_ownerToken] = 20000000 * 10 ** decimals()](contracts/Hedgecoin.sol#L39)

contracts/Hedgecoin.sol#L32-L46


 - [ ] ID-51
[HedgeCoin.constructor(address)](contracts/Hedgecoin.sol#L32-L46) uses literals with too many digits:
	- [_tOwned[_ownerToken] = 20000000 * 10 ** decimals()](contracts/Hedgecoin.sol#L41)

contracts/Hedgecoin.sol#L32-L46


 - [ ] ID-52
[HedgeCoin.constructor(address)](contracts/Hedgecoin.sol#L32-L46) uses literals with too many digits:
	- [defaultMaxWallet = 100000 * 10 ** decimals()](contracts/Hedgecoin.sol#L45)

contracts/Hedgecoin.sol#L32-L46


## immutable-states
Impact: Optimization
Confidence: High
 - [ ] ID-53
[HedgeCoin.rQuemado](contracts/Hedgecoin.sol#L21) should be immutable 

contracts/Hedgecoin.sol#L21


 - [ ] ID-54
[HedgeCoin.q_init](contracts/Hedgecoin.sol#L13) should be immutable 

contracts/Hedgecoin.sol#L13


