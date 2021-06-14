function countEven(a) {
  let arr = a.filter((e) => e % 2 ==0);
  return arr.length;
} 

let a = [7, 1, 9, 4, 15, 23, 2, 11, 5, 12, 3]; 
console.log( countEven(a) );