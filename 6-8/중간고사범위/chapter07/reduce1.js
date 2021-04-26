function callback(a,b){
    console.log(a + "," + b);
    return a+b;
}


let a1 = [10,20,30,40,50];
let sum = a1.reduce(callback);
console.log(sum);


//방법2
let sum2 = a1.reduce((a,b)=>a+b);
console.log(sum2);