// 자바스크립트 객체의 멤버 변수는 
// 속성이라고 표현하는 것이 정확하다.

//숫자 속성명이 가능하다.

let person = { name: "홍길동", age: 16 }
console.log(person)


person[0] = "호형호제"
person[1] = "도술"  // 인덱스를 말하는 것이 아니라 1 이라는 속성 의미

console.log(person)
console.log(person[0])
console.log(person["name"]);

for(let key in person){
    console.log("%s : %s",key , person[key]);
}

