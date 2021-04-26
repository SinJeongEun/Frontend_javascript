function even(a) {
    for(let i=0;i<a.length;i++){
       if(a[i]==a[i+1]) a.splice(i+1,1);
       if(a[i-1]==a[i]) a.splice(i,1);
    }

    for(let i=0;i<a.length;i++){
        if(a[i]%2 != 0 ){
            a.splice(i,1); 
        }       
    }
    return a;
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
even(a);
console.log(a);
