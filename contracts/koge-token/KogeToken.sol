// SPDX-License-Identifier: MIT

pragma solidity ^0.7.1;

import "./BEP20.sol";
import "./BEP20Burnable.sol";
import "./SafeMath.sol";

contract KogeToken is BEP20, BEP20Burnable {
    constructor() BEP20("BNB48 Club Token", "KOGE") {
        _mint(msg.sender, 5000000 * (10**uint256(decimals())));
    }
}
