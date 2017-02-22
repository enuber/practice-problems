function doMath (num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "No Math Was Done";
    }

}

console.log(doMath(5, 2, "*"));
console.log(doMath(5, 2, "-"));
console.log(doMath(5, 2, "+"));
console.log(doMath(5, 2, "/"));


console.log(doMath(3, 5, "*"));
console.log(doMath(3, 5, "-"));
console.log(doMath(3, 5, "+"));
console.log(doMath(3, 5, "/"));