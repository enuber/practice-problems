function sortArray(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

var myArray = ['mouse', 'cat', 'dog', 'human'];

console.log(sortArray(myArray));