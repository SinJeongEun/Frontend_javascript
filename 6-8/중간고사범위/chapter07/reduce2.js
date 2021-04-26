let a1 = [7, 3, 8, 6, 9, 5, 1, 4];

//reduce로 최대값 찾기
let max = a1.reduce((a,b) => a > b ? a : b);
console.log(max)

//reduce로 최소값 찾기
let min = a1.reduce((a,b) => a < b ? a : b);
console.log(min);
