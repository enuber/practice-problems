function ABCheck(str) {
    for (var i=0; i < str.length; i++) {
        if (str.charAt(i) === "a" || str.charAt(i) === "A") {
            if (str.charAt(i+4) === "b" || str.charAt(i + 4) === "B") {
                return true;
            }
        }
    }
    return false;
}

console.log(ABCheck("after badly"));
console.log(ABCheck("Laura sobs"));
console.log(ABCheck("aaaaab"));
console.log(ABCheck("aaaaaaaB"))