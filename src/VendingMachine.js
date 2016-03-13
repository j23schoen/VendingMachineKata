 var Money = {
     Nickel: {name: "Nickel", value: 0.05},
     Dime: {name: "Dime", value: 0.10},
     Quarter: {name: "Quarter", value: 0.25},
     Penny: {name: "Penny", value: 0.01}
 };

 var Product = {
     Cola: {name: "Cola", cost: 1.00},
     Chips: {name: "Chips", cost: 0.50},
     Candy: {name: "Candy", cost: 0.65}
 };

 function VendingMachine() {
     this.display = "insert coins";
     this.coinsAccepted = [Money.Nickel, Money.Dime, Money.Quarter];
     this.coinsAdded = [];
     this.coinReturn = [];
     this.amountOfMoneyInserted = 0;
     this.products = [Product.Cola, Product.Chips, Product.Candy];
     this.inventory = this.products.map(function() {
         return 0;
     });
     this.itemBin = [];

     this.insertCoins = function (coin) {
         var coinIndex = this.coinsAccepted.indexOf(coin);
         if (coinIndex > -1) {
             this.coinsAdded.push(coin);
         }
         else {
             this.coinReturn.push(coin);
         }
         this.updateDisplay();

     };

     this.returnCoins = function () {
         this.coinReturn = this.coinsAdded;
         this.coinsAdded = [];
         this.updateDisplay();
     }

     this.updateDisplay = function () {
         this.findTotal();

         if (this.amountOfMoneyInserted > 0) {
             this.display = '$' + this.amountOfMoneyInserted.toFixed(2);
         }
         else {
             this.display = "insert coins";
         }

     };

     this.findTotal = function () {
         var total = 0;

         for (var i = 0; i < this.coinsAdded.length; i++) {
             total += this.coinsAdded[i].value;
         }
         this.amountOfMoneyInserted = total;
     };

     this.addInventory = function (product, number) {
         var index = this.products.indexOf(product);
         if(index > -1){
             if(number == null){
                 number = 1;
             }
            this.inventory[index] = this.inventory[index] + number;
         }
     };

     this.getInventory = function (product) {
         var index = this.products.indexOf(product);
         if(index > -1){
             return this.inventory[index];
         }
         else{
             return 0;
         }
     };

     this.purchaseProduct = function (product) {
         this.amountOfMoneyInserted = this.amountOfMoneyInserted - Product.cost;
         this.coinsAdded = [];
     };

     this.vendProduct = function(product) {
         var index = this.products.indexOf(product);
         if (index > -1) {
             this.purchaseProduct(product);

             this.inventory[index]--;

             this.itemBin.push(product);

             this.updateDisplay();
         }
     };



 }
