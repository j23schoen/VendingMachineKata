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
     var start = "insert coins";
     this.display = start;
     console.log(start);
     return start;
 }


