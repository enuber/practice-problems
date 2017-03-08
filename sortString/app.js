function sortString(str) {
    var lettersOnlyArr = [];
    for (var i=0; i <=str.length; i++) {
        toCheck = str.charCodeAt(i);
        if ((toCheck >= 65 && toCheck <= 90) || (toCheck >=97 && toCheck <= 122)) {
            lettersOnlyArr.push(str[i]);
        }
    }
    //just for fun a bubble sort.
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < lettersOnlyArr.length-1; i++) {
            if (lettersOnlyArr[i] > lettersOnlyArr[i+1]) {
                var temp = lettersOnlyArr[i];
                lettersOnlyArr[i] = lettersOnlyArr[i+1];
                lettersOnlyArr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    // lettersOnlyArr.sort();
    return lettersOnlyArr.join("");
}

console.log(sortString('Hello, how are you?'));
console.log(sortString("Oh The Things You Can Do; If You Only Had Time. Like Work On Your Calculator"));