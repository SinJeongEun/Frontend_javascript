function createArray(count) {
    
    let result = [count];
    let i=0;

    for(let j=1;j<count*2;j+=2){
        result[i]= j;
        i++;
    }
    return (result);
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
