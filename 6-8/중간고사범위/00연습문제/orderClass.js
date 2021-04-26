class Order {
    constructor(s,i1,i2){
        this.name = s;
        this.price =i1;
        this.quantity =i2;
    }
    get amount(){
        return this.price * this.quantity;
    }

    set amount(amount){
        this.quantity = amount / this.price;
    }
   
    
    

 } 
let order1 = new Order("우유", 900, 3); 
console.log(order1.price, order1.quantity, order1.amount); 
order1.amount = 1800; // 주문 금액을 1800원으로 수정한다. 
console.log(order1.price, order1.quantity, order1.amount);
