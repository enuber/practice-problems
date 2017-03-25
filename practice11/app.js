function evenOdds(arr) {
    var output = {
        odd: [],
        even: []
    };
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            if (arr[i] % 2 == 0) {
                if (output.even.indexOf(arr[i]) === -1) {
                    output.even.push(arr[i]);
                }
            } else {
                if (output.odd.indexOf(arr[i]) === -1) {
                    output.odd.push(arr[i]);
                }
            }
        }
    }
    return output;
}

console.log(evenOdds([2,5,1,6,8,2,20,'cat',13,3]));