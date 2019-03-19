const Adoption = artifacts.require("Adoption");
const truffleAssert = require('truffle-assertions');

contract('Once a pet has been adopted...', function(accounts) {

    let instance;
    let petId = 5;
    
    beforeEach(async () => {
        instance = await Adoption.new();
        await instance.adopt(5, {from: accounts[3]});
    });

    it('should allow admin to unadopt', async () => {
        const zeroAddress = "0x0000000000000000000000000000000000000000";

        await instance.unadopt(petId);
        const adopter = await instance.adopters(petId);
        assert.equal(adopter, zeroAddress);
    });

    it('shouldnt allow non-admin to unadopt', async () => {
        await truffleAssert.reverts(instance.unadopt(petId, {from: accounts[1]}));
    });
    
});
