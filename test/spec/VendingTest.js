describe("Vending Machine", function(){

    var vend;

    beforeEach(function () {
        vend = new VendingMachine();
    });

    describe("Construction", function(){
        it("displays insert coin when starting up", function(){
            expect(vend.display).toEqual("insert coins");
        });
    });

    describe("testing coin values", function(){
        it("will display 0.10 when a dime is inserted", function(){
            vend.insertCoins(Money.Dime);
            expect(vend.display).toEqual('$' + "0.10");
        });
        it("will display 0.25 when a quarter is inserted", function(){
            vend.insertCoins(Money.Quarter);
            expect(vend.display).toEqual('$' + "0.25");
        });
        it("will display 0.05 when a nickel is inserted", function(){
            vend.insertCoins(Money.Nickel);
            expect(vend.display).toEqual('$' + "0.05");
        });
    });

    describe("multiple coins added", function(){
        it("will display proper amount after multiple coin insertions", function(){
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Nickel);
            expect(vend.display).toEqual('$' + "0.75");
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Nickel);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Nickel);
            expect(vend.display).toEqual('$' + "1.30");
        });
    });

});