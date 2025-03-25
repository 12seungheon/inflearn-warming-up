// const sum = (x, y) => x + y;

// const curriedSum = (x) => (y) => x + y;

// console.log(sum(2, 3)); // 5
// console.log(curriedSum(2)); // 5
// console.log(curriedSum(2)(3)); // 5

// const makeFood = (ingredient1) => {
//   return (ingredient2) => {
//     return (ingredient3) => {
//       return `You made a sandwich with ${ingredient1}, ${ingredient2}, ${ingredient3}`;
//     };
//   };
// };

// const hamberger = makeFood("bread")("lettuce")("tomato");
// console.log(hamberger);

// const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
//   `You made a sandwich with ${ingredient1}, ${ingredient2}, ${ingredient3}`;

// const newHamberger = cleanerMakeFood("bread")("lettuce")("tomato");
// console.log(newHamberger);

// function log(date, importance, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//   );
// }

// log(new Date(), "normal", "Hello");

// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return f(a, b, c);
//       };
//     };
//   };
// }

// const curriedLog = curry(log);
// curriedLog(new Date())("normal")("Hello");
