function cocococombomath (num1, num2, num3, num4, num5) {
    var result = num1;
    result *= num2;
    result += num3;
    result /= num4;
    result -= num5;
    return result;
}


console.log(cocococombomath(3,2,6,3,5));
//what we expect: 5 x 6 = 30 + 3 = 33 /3 = 11 - 10 = 1
console.log(cocococombomath(5,6,3,3,10));
//what we expect: 8 * 5 = 40 + 5 = 45 / 9 = 5 - 2 = 3
console.log(cocococombomath(8,5,5,9,2));