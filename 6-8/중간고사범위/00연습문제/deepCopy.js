function deepCopy(persons) {
    let copy= [];
    for(let i=0;i<persons.length;++i){
        copy.push(Object.assign({},persons[i]));
    }
    return copy;  
} 

let persons1 = [ 
    { name: "홍길동", age: 16 }, 
    { name: "임꺽정", age: 18 } 
]; 

let persons2 = deepCopy(persons1);
persons1[0].age = 20; 
console.log(persons2);
