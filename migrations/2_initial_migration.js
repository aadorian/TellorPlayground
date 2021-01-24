const Playground = artifacts.require("TellorPlayground");

module.exports = function (deployer) {
  //constructor (string memory name, string memory symbol) 
  deployer.deploy(Playground, "XXX","XXX");
};
