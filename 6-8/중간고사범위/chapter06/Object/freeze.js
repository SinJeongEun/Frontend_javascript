//Object.freeze(객체)
// :  객체를 수정할 수 없는 상태로 변경한다. -> 내부 값 변경 x

let person1 = { name: "홍길동", age: 16 };
person1.age = 20;
person1.department = "소프";
console.log(person1);

let person2 = { name: "홍길동", age: 16 };
Object.freeze(person2);
person2.age = 20;
person2.department = "소프";
console.log(person2);


//객체가 freeze 되었는지 여부를 리턴 Object.isFrozen
console.log(Object.isFrozen(person1));
console.log(Object.isFrozen(person2));
