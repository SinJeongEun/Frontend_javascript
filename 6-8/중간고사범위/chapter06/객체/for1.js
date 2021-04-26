let person = { id: 101, name: "홍길동", age: 16 };

for (let key in person) {
  let value = person[key];
  console.log("%s: %s", key, value);
}
 //person 객체의 멤버 변수 각각에 대해서, 
 //그 이름이 key 변수에 대입되고 반복문이 실행된다.

 let rectangle = { 
    width: 5, 
    height: 7, 
    area : function() { return this.width * this.height; }
  };
  
  for (let key in rectangle) {
    let value = rectangle[key];
    console.log("%s: %s", key, value);
  }
  //area 멤버 변수의 값은 함수이다.