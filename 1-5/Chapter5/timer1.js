let count=0;
let a =setInterval((msg) => {
    ++count;
    console.log(msg,new Date());
    if(count==10) clearInterval(a) ;},
    1000,"1초간격");

    