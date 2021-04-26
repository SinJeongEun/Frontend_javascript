class Rectangle {
    constructor(w,h){
        this.width = w;
        this.hight = h;
    }
    //public 메소드 
    area(){
        return this.width * this.hight;
    }
}

let rectangle = new Rectangle(10,15);
console.log(rectangle);
console.log(rectangle.area());