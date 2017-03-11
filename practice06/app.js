function fibonacci(num) {
    var fibArr = [];
    for (var i = 0; i < num; i++) {
        if (fibArr.length == 0) {
            fibArr.push(0);
        } else if (fibArr.length == 1) {
            fibArr.push(1);
        } else {
            fibArr.push(fibArr[i-2] + fibArr[i - 1]);
        }
    }
    return fibArr;
}

console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(100));
