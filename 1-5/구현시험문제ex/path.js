function path(s, index) {
   let result= s.split("/");
    return result[index];
}

let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index)
    console.log(path(s, index));
