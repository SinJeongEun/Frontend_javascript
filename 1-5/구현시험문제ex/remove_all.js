function remove(a, value) {
    while(a.indexOf(value) > 0){
        let del = a.indexOf(value);
        a.splice(del,1);
    }
    return a;
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);
