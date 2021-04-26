let person1 = {name: "홍길동", age: 16};
let person2 = {name: "홍길동", age: 16};

let p = person1;

console.log(person1 == person2);
console.log(person1 ==p);

// 객체를 == 연산자로 비교하면  참조를 비교!  내부값 비교x