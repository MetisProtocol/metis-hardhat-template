//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    address public immutable owner = msg.sender;

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _mint(_msgSender(), 10000 * 1e8);
    }

    function decimals() public pure override returns (uint8) {
        return 8;
    }

    function mint(address _to, uint256 _amount) public {
        require(_msgSender() == owner, "403");
        _mint(_to, _amount);
    }
}
