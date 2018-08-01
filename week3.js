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
for (var i = 0; i < 6; i++) {
    var idx = Math.floor(Math.random() * arr.length);
    var x = arr[idx];
    lotto.push(arr[idx]);
    arr.splice(idx, 1);
}

lotto.sort((a, b) => (a - b));
console.log(lotto);

var lottocheck = function(ours, winner) {
    var count = 0;
    for (var i = 0; i < ours.length; ours++) {
        if (winner.includes(ours[i])) {
            count++;
        } 
    }
    return count;
}

var ans = [1,2,3,4,5,6]
console.log(lottocheck(lotto, ans));