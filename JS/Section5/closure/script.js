// function outerFuction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   };
// }

// const newFunction = outerFuction("OutSide");
// console.log("newFunction: " + newFunction);
// newFunction("InSide");

let a = "a";

function functionA() {
  let b = "b";
  function functionB() {
    let c = "c";
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}

functionA();
