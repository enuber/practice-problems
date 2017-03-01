// Given a string, store a count of every letter that occurs in it.
//     Return an array of any letter that occurs 5 times total or 3 times in a row.
//     For example: `myFunction('abcccdeabuajkeamak');`
// would return `['c', 'a']

function countLetters(str) {
    var finalArray = [];
    var forLetterCount = [];
    var alreadyIn = false;
    for (var i = 0; i < str.length; i++) {
        if (forLetterCount.length>0) {
            for (var j = 0; j < forLetterCount.length; j++) {
                if (forLetterCount[j][0] == str[i]) {
                    var currentCount = forLetterCount[j][1];
                    currentCount++;
                    forLetterCount[j][1] = currentCount;
                    alreadyIn = true;
                    break;
                }
            }
            if (!alreadyIn) {
                forLetterCount.push([str[i], 1]);
            }
            alreadyIn = false;
        } else {
            forLetterCount.push([str[i],1])
        }
    }
    moreThanFive(forLetterCount);
    threeInARow(str);
    return finalArray;
}

function moreThanFive (arr) {
    for (var i = 0; i<arr.length; i++){
        if (arr[i][1]>=5){
            finalArray.push(arr[i][0])
        }
    }
}

function threeInARow(str) {
    var alreadyExist = false;
    for (var i=0; i < str.length; i++) {
        var setToCompare = str[i] + str[i]+ str[i];
        var setOfThree = str.slice(i, i+3);
        if (setToCompare === setOfThree) {
            for (var j=0; j<finalArray.length; j++){
                if (str[i] === finalArray[j]) {
                    alreadyExist = true;
                }
            }
            if (!alreadyExist) {
                finalArray.push(str[i]);
            }
        }
        alreadyExist = false;
    }
}

console.log(countLetters("abadccadaacdba"));
console.log(countLetters("aabdabdaabbbcccefee"));
console.log(countLetters("abcabcabccccdddaaeeeffe"));




// var letters = 'abcccdeabuajkeamak';
//
// function findLetterCombos(inputString){
//     var countObject = {};
//     var outputArray=[];
//     var lastLetter = null;
//     var lastLetterCount = 1;
//     for(var i=0; i<inputString.length; i++){
//         var letter = inputString[i];
// //     if(countObject[letter]===undefined){
// //       countObject[letter] = 1;
// //     } else {
// //       countObject[letter]++;
// //     }
//         countObject[letter] = countObject[letter]+1 || 1;
//         if(lastLetter === letter){
//             lastLetterCount++;
//             if(lastLetterCount===3){
//                 outputArray.push(letter);
//             }
//         } else {
//             lastLetterCount = 1;
//             lastLetter = letter;
//         }
//     }
//     for(var index in countObject){
//         if(countObject[index]>=5){
//             outputArray.push(index);
//         }
//     }
//     return outputArray;
// }
//
//
//
//
//
//
//
//
//
//
// console.log(findLetterCombos(letters));