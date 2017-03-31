// Write a function takes in an array of people objects, structured as so:
// {
//     firstname: "firstname",
//     lastname: "lastname"
// }
//
// and returns the same array, sorted by last name, then by first name
// (as a tie-breaker), using  either an insertion or selection sort


function sortNames (arrayOfNames) {

    var length = arrayOfNames.length;

    for (var i=0; i < length; i++) {
        var tempCopy = arrayOfNames[i];
        /*Check through the sorted part and compare with
        the number in tempCopy. If large, shift the person*/
        for (var j=i-1; j >= 0 && (arrayOfNames[j].lastname > tempCopy.lastname); j--) {
            arrayOfNames[j+1] = arrayOfNames[j];
        }
        arrayOfNames[j+1] = tempCopy;
    }
    return arrayOfNames;

}

var ul = [
    {firstname: "Minnie", lastname: "Mouse"},
    {firstname: "Donald", lastname:"Duck"},
    {firstname: "Mickey", lastname: "Mouse"},
    {firstname: "Pluto", lastname: "Dog"},
    ];

console.log(sortNames(ul));

