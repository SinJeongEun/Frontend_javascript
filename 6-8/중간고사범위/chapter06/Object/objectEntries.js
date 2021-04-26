//Object.entries(객체)
//객체의 모든 멤버 변수 값이 들어있는 
//2차원 배열을 리턴한다.


let person ={name :"홍길동", age : 16};
console.log(Object.entries(person));

//방법1
for(let key in person){
    let value = person[key];
    console.log("%s: %s", key, value);
}

//방법2
for(let [key, value] of Object.entries(person))
    console.log("%s: %s", key, value);