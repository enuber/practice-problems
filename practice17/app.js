function skippyNumbers(num, value) {
    var finalArray = [];
    for (var i = num; i < num * value; i++) {
        var counter = 0;
        while (counter < num) {
            finalArray.push(i++);
            counter++
        }
    }
    return finalArray;
}


console.log(skippyNumbers(2, 15));
console.log(skippyNumbers(3, 6));
console.log(skippyNumbers(4, 8));