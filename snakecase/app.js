function snakeCase(str) {
    var strArr = str.toLowerCase().split(" ");
    finalStr = "";
    for (var i=0; i<strArr.length; i++) {
        var wordArr = strArr[i].split("");
        wordArr[0] = wordArr[0].toUpperCase();
        strArr[i] = wordArr.join("");
    }
    finalStr = strArr.join("_");
    return finalStr;
}

console.log(snakeCase("Eleven Seven"));
console.log(snakeCase("ElEvEn SEVen"));
console.log(snakeCase("WhAT EveR YOu WAnT"));
console.log(snakeCase("hello there"));
console.log(snakeCase("yOU Are CrAzY"));


//can use substring and indexof. indexOf gives you the local of something like indexOf(" ") will show
// you the space location. You can the do substring(0, that number) to get the word. You can then use
//substring(0).toUpperCase() to change that letter and then add the rest of the string to it with
//substring(1) which will grab the rest of the word starting at that point.