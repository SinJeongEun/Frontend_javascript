function doSomething(a,b,c){
    let nums =[a,b,c];
    let max = nums[0];

    for(let i=1;i<nums.length;i++){
        if(max<nums[i]) max = nums[i];
    }
    console.log(max);
}

console.log(doSomething(3,1,2));
console.log(doSomething(1,2,3));
console.log(doSomething(1,3,2));