(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var itemsList1 = this;

  itemsList1.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  itemsList1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };


}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var itemsList2 = this;
  itemsList2.itemsBought= ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService(){
  var service = this;
  //list of items to buy
  var itemsToBuy =[{name:'Chocolates',qty:2},{name:'Apples',qty:5},
          {name:'Lettuce',qty:1},{name:'Chicken',qty:2},{name:'Oranges',qty:3}];

  //list of bought items
  var itemsBought = [];


  service.addItem = function (itemIndex) {
    var item = {
      name: itemsToBuy[itemIndex].name,
      qty: itemsToBuy[itemIndex].qty
    };
    itemsBought.push(item);
  };

  service.removeItem = function (itemIndex) {
    service.addItem(itemIndex);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}

})();
