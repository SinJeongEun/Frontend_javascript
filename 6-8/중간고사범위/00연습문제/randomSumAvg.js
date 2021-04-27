let a =[];
for(let i=0;i<100;++i){
    a.push(Math.floor(Math.random()*100 + 1));
}

let sum = a.reduce((a,b) => a + b);
let avg = sum/a.length;
console.log(avg.toFixed(1));

//내림차순 정렬
console.log(a.sort((a,b) => b - a));