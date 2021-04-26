let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];

// 나이 내림차순
persons.sort((p1,p2) => p2.age - p1.age);
console.log(persons);

//나이 최대값 찾아서 출력

let person =persons.reduce((p1,p2) => p1.age > p2.age ? p1 : p2);
console.log(person);