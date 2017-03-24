function pigLatin (str) {
    var vowels = ["a","e","i","o","u","y"];
    var wordArray = str.split(" ");
    for (var i=0; i < wordArray.length; i++) {
        var firstLetter = wordArray[i][0];
       if (vowels.indexOf(firstLetter) !== -1) {
           wordArray[i] += "way";
       } else if (vowels.indexOf(wordArray[i][1]) === -1) {
           var secondLetter = wordArray[i][1]
           wordArray[i] = wordArray[i].substring(2);
           wordArray[i] += firstLetter + secondLetter + "ay";
       } else {
           wordArray[i] = wordArray[i].substring(1);
           wordArray[i] += (firstLetter + "ay");       }
    }
    return(wordArray.join(' '));
}

console.log(pigLatin("Hello There This is the String Cheers"))