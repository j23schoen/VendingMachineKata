 var Money = {
     Nickel: {name: "Nickel", value: 0.05},
     Dime: {name: "Dime", value: 0.10},
     Quarter: {name: "Quarter", value: 0.25}
 }

 var Products = {
     Cola: {name: "Cola", value: 1.00},
     Chips: {name: "Chips", value: 0.50},
     Candy: {name: "Candy", value: 0.65}
 }

 function VendingMachine() {
     this.display = "insert coins";
     this.coinsAccepted = [Money.Nickel, Money.Dime, Money.Quarter];
     this.coinsAdded = [];
     this.coinReturn = [];
     this.amountOfMoneyInserted = 0;


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

 }
