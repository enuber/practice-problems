function findMiddleLetters(str) {
    var oddLetter, evenLetters;
    if (str.length % 2 == 1) {
        oddLetter = str[Math.floor(str.length/2)]
        return (oddLetter);
    } else {
        evenLetters = str[str.length/2] + str[str.length/2 +1];
        return(evenLetters);
    }
}

console.log(findMiddleLetters("seven"));
console.log(findMiddleLetters("dish"));
console.log(findMiddleLetters("1"));