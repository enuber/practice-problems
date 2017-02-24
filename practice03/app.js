function multiSort(arr){
    var numArr = [],
        strArr = [],
        boolArr = [],
        undefArr = [],
        nullArr = [],
        finalArr = [];

    if (!Array.isArray(arr)) {
        return "An array was not sent into the function";
    } else {
        for (var i=0; i<arr.length; i++) {
            switch(typeof(arr[i])) {
                case "number":
                    numArr.push(arr[i]);
                    break;
                case "string":
                    strArr.push(arr[i]);
                    break;
                case "boolean":
                    boolArr.push(arr[i]);
                    break;
                case "undefined":
                    undeArr.push(arr[i]);
                    break;
                case "object":
                    nullArr.push(arr[i]);
                    break;
                default:
                    return "This should not have happened; if it has, raise your hands in disbelief";
            }
        }
        if (numArr.length > 0) {
            finalArr.push(numArr);
        }
        if (strArr.length > 0) {
            finalArr.push(strArr);
        }
        if (boolArr.length > 0) {
            finalArr.push(boolArr);
        }
        if(undefArr.length > 0) {
            finalArr.push(undefArr);
        }
        if(nullArr.length > 0) {
            finalArr.push(nullArr);
        }

        return finalArr;
    }

}

var tempArr = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

console.log(multiSort(tempArr));