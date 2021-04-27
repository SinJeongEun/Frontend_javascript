function sum(a) {
    return a.reduce((a, b) => a + b);
  }
  
  function test_sum(callback) {
    let a = [];
    for (let i = 0; i < 5; ++i)
      a.push(Math.floor(Math.random() * 11));
    console.log(a);
    console.log(callback(a));
  }
  
  test_sum(sum);
  
  