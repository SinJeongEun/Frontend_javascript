let nums =[];

for(let i=0;i<100;i++){
    nums[i] = Math.floor(Math.random()*100 + 1);
}

//let compareNumber=((i,j) => {return i-j});
function compareNumber(i,j) {return i-j};
console.log(nums.sort(compareNumber));