let person =[];

for(let i=0; i<10 ; ++i){
    person.push({name: "홍길동", age: 16 + i });
}

for(let i=0; i<10 ; ++i){
   // console.log(person[i]); // 객체 리턴
}

console.log(person) // 배열 리턴