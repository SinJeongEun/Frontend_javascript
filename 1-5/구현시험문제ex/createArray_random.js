function createArray(count, min, max) {
    let result = [count];

    for(let i=0;i<count;i++){
        result[i] = Math.floor(Math.random() * (max-min+1) + min);
    }
    console.log(result);
}

console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));
