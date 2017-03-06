function randomizeList(inputArr) {
    var outputArr = [];
    if (inputArr.length > 0) {
        var originalArrLength = inputArr.length;
        for (var i = 0; i < originalArrLength; i++) {
            //inputArr.length - 1 is used because we have something at index 0, you can also take the -1 and +1
            //out to resolve this as well.
            var randNum = Math.floor(Math.random() * inputArr.length-1)+1;
            outputArr.push(inputArr[randNum]);
            inputArr.splice(randNum, 1);
        }
    } else {
        return ("The Array Has Nothing In It.")
    }
    return outputArr;
}

var testArray =  [0,1,2,3,4,5,6,7,8,9];
var testArray2 = [];

//testing arrays
console.log(randomizeList(testArray));
console.log(randomizeList(testArray2));


