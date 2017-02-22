var arr = ['a','b','c','d','e'];

function getRandom(upper, lower) {
    return Math.floor(Math.random()* (upper-lower)) + lower;
}

function randNum(arg1, arg2) {
    var number;
    //this just checks to see if arg2 is set to anything, if not it sets it to 0;
    var arg2 = arg2 || 0;
    //Array.isArray returns true or false if the passed in parameter is an array.
    if (Array.isArray(arg1)) {
         number = getRandom(0, arg1.length);
         return arg1[number];
    } else if (arg1>=arg2) {
        return getRandom(arg1, arg2);
    } else {
        return getRandom(arg2, arg1);
    }
}

console.log(randNum(arr, 0));
console.log(randNum(arr));
console.log(randNum(1, 10));
console.log(randNum(5, 15));
console.log(randNum(30, 20));
console.log(randNum(5));