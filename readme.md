

Example of new datatype in Tellor Playground 
```solidity 
     address private _contractAddress;
    constructor (string memory name, string memory symbol) {
        _name = name;
        _symbol = symbol;
        _decimals = 18;
        _contractAddress = address(this);
    }
    /**
     * @dev Public function to return the current address of the contract
     * 
     *
     */
    function contractAddress() external view returns (address){
        return _contractAddress;
    }
```