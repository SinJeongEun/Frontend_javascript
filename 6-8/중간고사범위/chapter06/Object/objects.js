//Object.assign(to,from) f\
//  from 객체의 모든 변수 값을 to로 복사한다.
// assign 메소드는 to 객체를 리턴함

let person = { name: "홍길동", age: 16 };
let info = { age: 20, department: "소프", year: 2 };

Object.assign(person, info);
console.log(person);

//객체 복제
let person1 = { name: "홍길동", age: 16 };
let person2 = Object.assign({},person1);

//person1의 모든 값이 { } 빈 객체에 복사된다.
//즉 person1 객체를 복제한 새 객체가 만들어져서, person2 변수에 대입되었다.

console.log(person2);
