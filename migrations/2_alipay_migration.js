const alipay = artifacts.require("Alipay");

module.exports = function(deployer) {
  deployer.deploy(alipay);
};