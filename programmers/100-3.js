// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// 중간 글자로 정렬하기 

var compare = function(a, b) {
    return (a > b) - (a < b);   
}

function solution(strings, n) {
    strings.sort(function(a, b) {
        if (a[n] === b[n]) {
            return compare(a, b);
        } else {
            return compare(a[n], b[n]);
        }
    });   
    return strings;
}