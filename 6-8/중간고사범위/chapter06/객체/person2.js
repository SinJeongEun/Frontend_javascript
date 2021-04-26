let person1 = { };

person1.name = "홍길동";
person1.age = 23;
console.log(person1);

let person2 = {name : "임꺽정"};
person2.age = 19;
console.log(person2);

// 멤버 변수 다른 방식으로 만들기 .age  -> ["age"]

let person3 = { };

person3["name"] = "홍길동";
person3["age"] = 23;
console.log(person3);

let person4 = {name : "임꺽정"};
person4["age"] = 19;
console.log(person4);