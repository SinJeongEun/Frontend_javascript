let a = [];

for (let i = 0; i < 100; ++i)
  a[i] = Math.floor(Math.random() * 100 + 1);

let sum = a.filter(a => a % 2 == 0).reduce((a, b) => a + b);
console.log(sum);
//console.log(a.filter(a => a % 2 ==0).reduce((a,b) => a + b));


//일의자리 숫자 5-9 인것 자르기
for (let i = a.length - 1; i >= 0; --i) {
    let d = a[i] % 10;
    if (d >= 5 && d <= 9)
      a.splice(i, 1);
  }

console.log(a);


//숫자를 문자열로 취급하여 정렬 11 < 2
a.sort((a,b) => String(a).localeCompare(String(b)));
console.log(a);

//짝수 개수
let count = a.reduce((count, b) => b % 2 == 0 ? count + 1 : count, 0);
console.log(count);
