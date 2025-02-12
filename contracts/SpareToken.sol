// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SphearToken is ERC20 {
  
    uint256 public constant TOTAL_SUPPLY = 21_000_000 * 10 ** 18; // 21 million tokens with 18 decimals

    constructor() ERC20("Sphear", "SPHEAR") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    receive() external payable {}
}