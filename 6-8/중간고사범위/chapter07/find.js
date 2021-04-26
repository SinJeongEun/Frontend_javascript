let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }  
];

let person = persons.find(p => p.age == 18);
console.log(person);

//find 메소드는, 이 콜백 함수가 true를 리턴하는 첫번째 원소를 리턴한다.
  