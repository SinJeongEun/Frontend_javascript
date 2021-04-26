// 자바의 Map 처럼 자바스크립트 객체를 사용 가능하다

//1 이상 1000 이하의 수를 랜덤하게 100 개를 생성했을 때,
//두 번 이상 생성된 수를 출력하는 코드를 구현하자.

const MAX = 1000, MIN = 1;
let count = [];

//count 방법1
//for(let i=0;i<100;++i){
//    let a = Math.floor(Math.random()*(MAX - MIN + 1)+ MIN);
//   if (typeof count[a] == "undefined") count[a] = 1;
//    else count[a] += 1;
//}

//count 방법2
for(let i=0;i<100;++i){
    let a = Math.floor(Math.random()*(MAX - MIN + 1)+ MIN);
    count[a] = count[a]? count[a]+1 : 1;
    //count[a] = (count[a] || 0) + 1;
}


//출력 방법 1
//for (let i = 0; i < count.length; ++i)
// if (count[i] >= 2)
//    console.log("%d %d", i, count[i]);

//출력 방법 2
for(let key in count){
    if(count[key] >= 2) console.log("%d %d", key, count[key]);
}

console.log("length = ", count.length);
//count 배열의 크기는, 랜덤하게 생성된 값의 최대값 + 1 이다.