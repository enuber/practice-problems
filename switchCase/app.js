// function switchCase(str) {
//     var i = 0;
//     var newStr = str.split("");
//     while ( i < newStr.length) {
//         var character = newStr[i];
//         if (character == character.toUpperCase() && isNaN(character)) {
//             newStr[i] = newStr[i].toLowerCase();
//         } else if (character == character.toLowerCase() && isNaN(character)) {
//             newStr[i] = newStr[i].toUpperCase();
//         } else {
//             newStr[i] = newStr[i];
//         }
//         i++
//     }
//     return newStr.join("");
// }

function switchCase(str) {
    var i = 0;
    var newStr = str.split("");
    while ( i < str.length) {
        var character = str[i];
        if (str.charCodeAt(i) >64 && str.charCodeAt(i) < 91 ) {
            newStr[i] = newStr[i].toLowerCase();
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            newStr[i] = newStr[i].toUpperCase();
        } else {
            newStr[i] = newStr[i];
        }
        i++
    }
    return newStr.join("");
}


console.log(switchCase("A String With NUMS and LeTTeRs 123!"));
console.log(switchCase("Wh4T3V3r$"));