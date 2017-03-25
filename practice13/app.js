function mathSequence(num1, num2) {
    var operators = ["+", "-", "*", "/"];
    var result = null;
    var finalArray = [];
    for (var i=0; i < operators.length; i++) {
        switch(operators[i]) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        var equation = num1 + operators[i] + num2 + '=' + result;
        finalArray.push(equation);
    }
    return finalArray;
}

console.log(mathSequence(2, 5));
console.log(mathSequence(6, 2));