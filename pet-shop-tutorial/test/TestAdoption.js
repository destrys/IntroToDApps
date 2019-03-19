const Adoption = artifacts.require("Adoption");

contract('Initially...', function(accounts) {

    it('should return an array of 0x0... addresses.', async () => {
        const instance = await Adoption.deployed();        
        const adopters = await instance.getAdopters();
        const expected = new Array(16).fill("0x0000000000000000000000000000000000000000");
        assert.deepEqual(adopters, expected);
    });

    it('should return a single 0x0... for each adopter address.', async () => {
        const instance = await Adoption.deployed();                
        const zeroAddress = "0x0000000000000000000000000000000000000000";
        let i;
        let adopter;
        for(i = 0; i < 16; i++) {
            adopter = await instance.adopters.call(i);
            assert.equal(adopter, zeroAddress);
        }
    });


    it('should allow pet 0 to be adopted.', async () => {
        const instance = await Adoption.new();
        const zeroAddress = "0x0000000000000000000000000000000000000000";

        await instance.adopt(0, {from: accounts[0]});
        let j;
        for(j = 0; j < 16; j++) {
            adopter = await instance.adopters(j);
            if (j === 0) {
                assert.equal(adopter, accounts[0]);
            } else {
                assert.equal(adopter, zeroAddress);
            }
        }
    });

    it('should allow pet 5 to be adopted by account 1.', async () => {
        const instance = await Adoption.new();
        const zeroAddress = "0x0000000000000000000000000000000000000000";

        await instance.adopt(5, {from: accounts[1]});
        let j;
        for(j = 0; j < 16; j++) {
            adopter = await instance.adopters(j);
            if (j === 5) {
                assert.equal(adopter, accounts[1]);
            } else {
                assert.equal(adopter, zeroAddress);
            }
        }
    });                    
});
