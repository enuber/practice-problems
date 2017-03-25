var startArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];

function fittingWords(str, arrayOfStr) {
    var finalArray = [];
    // var possibleMatchArray = [];
    for (var i=0; i < arrayOfStr.length; i++) {
        // for (var j = 0; j < str.length; j++) {
        //     if (arrayOfStr[i].indexOf(str[j]) != -1) {
        //         possibleMatchArray.push(arrayOfStr[i]);
        //     }
        // }
        // if (possibleMatchArray.length >= str.length) {
        //     finalArray.push(possibleMatchArray[0]);
        //     possibleMatchArray = [];
        // } else {
        //     possibleMatchArray = [];
        // }
        for (var i=0; i < arrayOfStr.length; i++) {
            letter = 0;
            while (arrayOfStr[i].indexOf(str[letter++]) > -1) {
                if (letter === str.length) {
                    finalArray.push(arrayOfStr[i]);
                }
            }
        }
    }
    return finalArray;
}

console.log(fittingWords("cat", startArray));
console.log(fittingWords('ct', startArray));

