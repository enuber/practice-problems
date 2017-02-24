function reverseArr(arr) {
    var newArr = []
    if (!Array.isArray(arr)) {
        return "An Array was not sent in";
    } else {
        for (var i=arr.length-1; i>=0; i--) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}

var tempArray1 = ["hello", 45, 'Bob', 'what', '23'];
var tempArray2 = [23, "You", 1, 'ask', '99'];
var tempArray3 = ["trial", "right", 'ask', 55, 8];

console.log(reverseArr(tempArray1));
console.log(reverseArr(tempArray2));
console.log(reverseArr(tempArray3));
console.log(reverseArr("string"));
console.log(reverseArr(3));

