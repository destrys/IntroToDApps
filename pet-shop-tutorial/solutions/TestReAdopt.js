const Adoption = artifacts.require("Adoption");
const truffleAssert = require('truffle-assertions');

contract('After creating a new contract...', function(accounts) {

    it('should revert if trying to adopt an adopted pet', async () => {
        const instance = await Adoption.new();
        await instance.adopt(0, {from: accounts[0]});
        await truffleAssert.reverts(instance.adopt(0, {from: accounts[1]}));
    });

});

contract('After creating a new contract...', function(accounts) {

    it('should revert if trying to access an invalid pet index', async () => {
        const instance = await Adoption.new();
        await truffleAssert.reverts(instance.adopt(20, {from: accounts[1]}));
    });

});
