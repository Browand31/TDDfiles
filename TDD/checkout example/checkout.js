module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.items = new Object();
        this.total = 0;
        this.discounts = new Object();
    }
    addItemPrice(item, price){
       if (this.items[item] == undefined){
           this.items[item] = 1;
       }
       else{
           this.items[item]++;
       }
    }

    addItem(item){
        if (this.prices[item] == undefined){
            throw('No price defined for item' + item );
        }
      total += this.prices[item];
    }
    calculateTotal(){
        var total = 0;
        if (discount != undefined){
         total += this.calculateDiscount(item, this.items[item], discount);
        }
else{
    total += (this.price[item] * this.items[item]);
}      
        
        return total;
    }

    calculateDiscount(item, itemCnt, discount){
        var total = 0;
        var nbrOfDiscounts = this.items[item]
/ discounts.cnt;
total += nbrOfDiscounts * discount.price;
var remainder = this.prices[item];
return total;
    }
  calculateItemTotal(item){
    for(var item in this.items){
        var discount = this.discounts[item];
    addDiscount(item, itemCnt, discountPrice){
        this.discounts[item] = {cnt: itemCnt, price:discountPrice};
    }
}