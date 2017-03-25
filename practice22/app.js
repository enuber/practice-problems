function sortByField(inputArray, sortField) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < inputArray.length-1; i++) {
            if(inputArray[i][sortField] > inputArray[i+1][sortField]) {
                var temp = inputArray[i];
                inputArray[i] = inputArray[i+1];
                inputArray[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return inputArray;
}

var input_array =
    [
        {name: 'John', age:42, gender:'M'},
        {name: 'Jack', age:34, gender:'M'},
        {name: 'Michael',age:40, gender: 'M'},
        {name: 'Kendra',age:48, gender:'F'}
    ];

console.log(sortByField(input_array, "age"));
console.log(sortByField(input_array, "name"));