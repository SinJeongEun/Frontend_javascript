class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(point1, point2) {
    let dx = point1.x - point2.x;
    let dy = point1.y - point2.y;
    return Math.hypot(dx, dy);
  }
}

let p1 = new Point(10, 15);
let p2 = new Point(25, 40);

console.log(Point.distance(p1, p2));

//static 메소드의 특징은, 현재 객체를 의미하는 this 키워드를 사용할 수 없다
//this 객체가 아닌 다른 객체의 멤버 변수나 메소드를 사용하는 것은 가능하다