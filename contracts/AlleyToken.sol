// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;


import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "./ERC20Permit.sol";


contract AlleyToken is ERC20,Ownable{

    // Max Supply of 10000000 with 18 decimals
    uint256 public constant MAX_CAP = 10 * (10**6) * (10**18);
    constructor()  ERC20("Alley", "ALLEY") {
        _mint(msg.sender, MAX_CAP);
    }
}