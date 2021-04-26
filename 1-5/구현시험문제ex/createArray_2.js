function createArray() {
    let arr = [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ];
    return arr;
}

let a = createArray();
console.log(a);

a[0][1] = 10;
console.log(a);
