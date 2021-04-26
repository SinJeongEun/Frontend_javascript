let nums=[];

for(let i=0;i<100;i++){
    nums[i] = Math.floor(Math.random() * 100 + 1);
}

for(let j =0;j<nums.length;j++){
    if(nums[j]%2 ==0) {
        nums.splice(j,1);
    }
}
console.log(nums.toString());