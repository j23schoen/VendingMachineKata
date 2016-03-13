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

    describe("it will reject invalid coins", function () {
        it("penny will be rejected", function (){
            vend.insertCoins(Money.Penny);
            expect(vend.coinReturn).toContain(Money.Penny);
            expect(vend.display).toEqual("insert coins");
        });
    });

    describe("return added coins to coin return", function () {
        it("will set the coins added to empty and will return coins", function() {
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Nickel);
            vend.returnCoins();
            expect(vend.display).toEqual("insert coins");
            expect(vend.coinReturn).toContain(Money.Nickel, Money.Quarter);
        });
    });

    describe("inventory", function(){
        it("will give the inventory of product", function(){
            vend.addInventory(Product.Candy, 5);
            vend.addInventory(Product.Chips, 10);
            expect(vend.getInventory(Product.Candy)).toEqual(5);
            expect(vend.getInventory(Product.Chips)).toEqual(10);
        });
    });

    describe("can buy products", function(){

        beforeEach(function(){
            vend.addInventory(Product.Chips, 10);
            vend.addInventory(Product.Cola, 1);
            vend.addInventory(Product.Candy, 10);
        });

        it("allows a user to buy a product", function () {
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Quarter);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Dime);
            vend.insertCoins(Money.Quarter);
            vend.vendProduct(Product.Cola);
            expect(vend.itemBin).toContain(Product.Cola);
            expect(vend.display).toBe("insert coins");
        });
    });


});