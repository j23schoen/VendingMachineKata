describe("Vending Machine", function(){

    var vendingMachine;

    beforeEach(function () {
        vendingMachine = new VendingMachine();
    });

    describe("Construction", function(){

        it("displays insert coin when starting up", function(){
            expect(vendingMachine.display).toEqual("insert coins");
        });

    })

});