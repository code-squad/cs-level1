//simple test and debug
var compare = function(a, b) {
    return (a > b) - (a < b);
};

var testCompare = function(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;        
    } else {
        return 1;
    }
};

console.log(testCompare(1, 3) === -1);
console.log(testCompare(1, 1) === 0);
console.log(testCompare(3, 1) === 1);


console.log(compare(1, 3) === -1);
console.log(compare(1, 1) === 0);
console.log(compare(3, 1) === 1);


var arr = [1, 11, 2, 22, 3];
// arr.sort((a, b) => (a - b));
//arr.sort(testCompare);
arr.sort(compare);
console.log(arr);