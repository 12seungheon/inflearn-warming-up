// var greeting = "hello";
// console.log(greeting); // hello

// var greeting = "hi";
// console.log(greeting); // hi

// greeting = "how are you";
// console.log(greeting); // how are you

// console.log("----------------------------");

// // 중복 선언 불가, 재할당은 가능
// let greeting2 = "hello";
// console.log(greeting2); // hello

// greeting2 = "hi";
// console.log(greeting2); // hi

// console.log("----------------------------");

// // 중복 선언 불가, 재할당도 불가
// const greeting3 = "hello";
// console.log(greeting3); // hello

// const greeting3 = "hi";
// console.log(greeting3); // Uncaught SyntaxError: Identifier 'greeting3' has already been declared

// greeting3 = "how are you";
// console.log(greeting3); // Uncaught TypeError: Assignment to constant variable.

// function func() {
//   if (true) {
//     var a = "a";
//     console.log(a);
//   }
//   console.log(a);
// }

// func(); // a, a

// function func() {
//   if (true) {
//     let a = "a";
//     console.log(a);
//   }
//   console.log(a);
// }

// func(); // a, Uncaught ReferenceError: a is not defined

// console.log(greeting); // hello
// let greeting = "hello";

// func(); // test

// function func() {
//   console.log("test");
// }
