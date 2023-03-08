import * as lab1 from './lab1.mjs';

// Calling questionOne
console.log(lab1.questionOne([5, 3, 10]));
console.log(lab1.questionOne([3, 5, 5]));
console.log(lab1.questionOne([8]));
console.log(lab1.questionOne([13, 5]));
console.log(lab1.questionOne([0, 2345, 32]));

// Calling questionTwo
console.log(lab1.questionTwo([1, 2, 3, 4, 5, 6, 7]));
console.log(lab1.questionTwo([1, 2, 4, 3]));
console.log(lab1.questionTwo([23455677890, 1234567890876]));
console.log(lab1.questionTwo([10, 7, 6, 11]));
console.log(lab1.questionTwo([28, 49, 216, 54678]));

// Calling questionThree
console.log(lab1.questionThree({a:1,b:2,c:3}, {c:10, a:20, b:30}));
console.log(lab1.questionThree({a:1,b:2,c:3, d:4}, {f:10, b:20, e:30, d: 40, c:50, a:60}));
console.log(lab1.questionThree({foo:"I'm foo", bar: "I'm bar", fizz: "I'm fizz" , buzz: "I'm buzz" }, {fizz: "I'm not buzz", foo:"I'm not bar", buzz: "I'm not fizz", bar: "I'm not foo", c:50, a:60}));
console.log(lab1.questionThree({a:10, b:20, c:30, d: 40, e:50, f:60}, {a:1,b:2,c:3}));
// console.log(lab1.questionThree({11:a, 22:b}, {11:abc});

// Calling questionFour
console.log(lab1.questionFour(`Patrick,Hill,cs546
Jared,Bass,cs115
Shudong,Hao,cs570`));
console.log(lab1.questionFour(`1,2,3
abc,de
fgh`));
console.log(lab1.questionFour(`New York,USA`));
console.log(lab1.questionFour(`New.Jersey,United    States
New.Delhi,India`));
console.log(lab1.questionFour(`1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0
abcv,cbvg,,'',"",`));