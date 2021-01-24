![](https://i.imgur.com/YfP8eLA.png)

Video: 
https://youtu.be/8lLBL-hFRRg

Example using  Tellor Playground returning the contractAddress of
the deployed contract.
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