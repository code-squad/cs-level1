var arr = [];


//arr.include(x)
//arr.indexOf(x)
var find = function(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        console.log("idx:", i, "value:", arr[i],"want:",value);
        if (arr[i] === value) {
            return true;
        }
    }
    console.log("못 찾았다!");
    return false;
};

for (var i = 1; i <= 45; i++) {
    arr.push(i);
}

var lotto = []
while (lotto.length != 6) {
    var idx = Math.floor(Math.random() * arr.length);
    var x = arr[idx];
    if (!lotto.includes(x)) {
        lotto.push(arr[idx]);
    }
}

lotto.sort((a, b) => (a - b));
console.log(lotto);