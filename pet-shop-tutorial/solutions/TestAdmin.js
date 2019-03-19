const Adoption = artifacts.require("Adoption");

contract('After creating a new contract...', function(accounts) {

    it('should have an admin address set to account that deployed', async () => {
        // new() defaults to account[0]
        const instance = await Adoption.new();
        const admin = await instance.admin();
        assert.equal(admin, accounts[0]);
    });

    it('should have an admin address set to account that deployed (nondefault)', async () => {
        const instance = await Adoption.new({from: accounts[1]});
        const admin = await instance.admin();
        assert.equal(admin, accounts[1]);
    });

    
});
