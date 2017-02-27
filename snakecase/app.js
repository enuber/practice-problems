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


