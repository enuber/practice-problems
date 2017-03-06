function biggerWords(strToCheck, arr) {
    var lengthOfStr = strToCheck.length;
    var outputArr = [];
    for (var i=0; i<arr.length; i++) {
        if(arr[i].length > lengthOfStr) {
            outputArr.push(arr[i]);
        }
    }
    return outputArr;
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
console.log(biggerWords('whales', myArray));
var myArray = ['ramon', 'rachel', 'ken', 'james', 'nick', 'santiago'];
console.log(biggerWords('erik', myArray));