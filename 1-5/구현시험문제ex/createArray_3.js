function createArray() {
    let a = [ 1, 2, 3 ];
    let b =a;
    let c =a;
    let result = [a, b, c];
    return result;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
