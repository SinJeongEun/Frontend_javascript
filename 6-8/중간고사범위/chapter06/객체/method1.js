let rectangle = {
    weight: 5,
    hight: 7,
    area : function(){ return this.weight * this.hight;}
};

console.log(rectangle.area());



let rectangle1 = {
    width: 6,
    hight : 10,
}

rectangle1.area = function(){
    return this.width * this.hight;
}

console.log(rectangle1.area());
