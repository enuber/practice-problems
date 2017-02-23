function invertNums(num1) {
    if (isNaN(num1)) {
        return false;
    } else if (num1 > 0) {
        return (-num1);
    } else {
        return num1;
    }
}

console.log(invertNums(-5));
console.log(invertNums(4000));
console.log(invertNums("what!"));