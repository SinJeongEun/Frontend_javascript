function countProperty(obj) {
    let arr = Object.keys(obj);
    let count = arr.length;
    return count;
} 
let p1 = { name: '홍길동', age: 16 }; 
console.log( countProperty(p1) ); 

let r1 = { x: 10, y: 20, width: 30, height: 40 }; 
console.log( countProperty(r1) )