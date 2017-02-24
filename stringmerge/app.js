function mixUp(arr) {
    var mixWord = "",
        longestWordLength;
    //checks for which word is longer, sets up for loop
    if (arr[0].length > arr[1].length) {
        longestWordLength = arr[0].length;
    } else {
        longestWordLength = arr[1].length;
    }
    for (var i = 0; i < longestWordLength; i++) {
        if (arr[0][i] !== undefined) {
            mixWord += arr[0][i];
        }
        if (arr[1][i] !== undefined) {
        mixWord += arr[1][i];
        }
    }
    document.writeln(mixWord);
}

function splitWord(str, delimiter) {
    var arrSplit = str.split(delimiter);
    mixUp(arrSplit);
}


splitWord('abc*123', "*");
splitWord('abcd%123', "%");
splitWord('abc#12345', "#");
splitWord('abcdedfasd&12345', "&");
