# 간단 연습문제

## 함수 만들기

- print10() 이라는 화면에 1-10까지 뿌려주는 함수
- printN(n) 이라는 화면에 1부터 n까지 뿌려주는 함수
- isEven(n) 이라는 짝수면 true, 홀수면 false를 리턴하는 함수
- myReminder(a, b) 나머지를 리턴하는 함수
- square(n) 이라는 화면에 n * n 네모를 출력하는 함수

```js
// simple
var foo = function() {
    console.log("hello");
};

foo();

// 1 arguments, no return
var myecho = function(str) {
    console.log(str);
};

myecho("hello");
myecho(5);

//1 argument, 1 return
var square = function(n) {
    return n * n;
}

var x = square(10);
console.log(x);

// 2 argument, 1 return
var mySum = function(a, b) {
    return a + b;
};

x= mySum(5, 7);
console.log(x);
```