function sort(a) {
    a.sort().reverse();
    return a;
}

let a = [ "one", "two", "three", "four", "five" ];
sort(a);
console.log(a);
