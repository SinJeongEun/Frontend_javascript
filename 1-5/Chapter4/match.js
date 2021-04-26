let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx",
        ];

let b;


let c ;
let result1 = []; //.hwp
let result2 = []; //guide.hwp
let result3 = []; //guide
let j=0;
for(let i=0;i<a.length;i++){
        c= a[i].match(/([a-z0-9]+)(\.[a-z]+)/); 
        result1[j] = c[2];
        result2[j] = c[0];
        result3[j] = c[1];

        j++;
 } 

console.log(result1);
console.log(result2);
console.log(result3);



