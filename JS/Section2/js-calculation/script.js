const num1 = 20;
const num2 = 10;

// 간단한 연산
let val;
val = num1 + num2; // 30
val = num1 - num2; // 10
val = num1 * num2; // 200
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math Object
val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // -2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // 55
val = Math.random(); // 0.0 <= x < 1.0
val = Math.floor(Math.random() * 20 + 1); // 1 <= x <= 20

console.log(val);
