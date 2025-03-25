// (function () {
//   var aName = "Barry";
// })();

// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가

// console.log(aName); // Error: aName is not defined

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();

// console.log(result); // Barry

// const score = (() => {
//   let count = 0;
//   return {
//     current: () => {
//       return count;
//     },
//     increment: () => {
//       count++;
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
// })();

// console.log(typeof score); // function
// console.log(score);
// console.log(score.current()); // 0
// score.increment();
// console.log(score.current()); // 1
// score.reset();
// console.log(score.current()); // 0

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`it is ${num}`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment());
increment();
increment();
