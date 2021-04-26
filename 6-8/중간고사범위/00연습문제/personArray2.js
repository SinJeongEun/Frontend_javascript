let person1 =[];

for(let i=0; i<10 ; ++i){
    person1.push({name: "홍길동", age: 16 + i });
}

let person2 = [];
for(let i=0; i<person1.length ; ++i){
    person2.push(Object.assign({},person1[i]));
}
console.log(person2);