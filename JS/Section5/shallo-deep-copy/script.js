// const aArray = [1, 2, 3];

// const bArray = [...aArray, 4];

// console.log("aArray", aArray); // [1, 2, 3]
// console.log("bArray", bArray); // [1, 2, 3, 4]
// console.log(aArray === bArray); // false

// // shallow copy with Object.assign
// const cArray = Object.assign([], bArray);
// console.log("cArray", cArray); // [1, 2, 3, 4]
// console.log(bArray === cArray); // false

// // Nested array and object
// cArray.push([5, 6, 7]);
// console.log("cArray", cArray); // [1, 2, 3, 4, [5, 6, 7]]
// const dArray = [...cArray, 10];
// console.log("dArray", dArray); // [1, 2, 3, 4, [5, 6, 7], 10]
// dArray[4].push(8);
// console.log("cArray", cArray); // [1, 2, 3, 4, [5, 6, 7, 8]]
// console.log("dArray", dArray); // [1, 2, 3, 4, [5, 6, 7, 8], 10]

// 얕은 동결
const aObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

// Object.freeze(aObject);
// aObject.a = "c";
// console.log("aObject", aObject); // { a: 'a', b: 'b', cObject: { a: 1, b: 2 } }

// aObject.cObject.a = 3;
// console.log("aObject", aObject); // { a: 'a', b: 'b', cObject: { a: 3, b: 2 } }

// 깊은 복사
// const newAObject = JSON.parse(JSON.stringify(aObject));

// deep copy with nested spread operator
const newAObject = {
  ...aObject,
  cObject: { ...aObject.cObject },
};

console.log("aObject", aObject); // { a: 'a', b: 'b', cObject: { a: 3, b: 2 } }
console.log("newAObject", newAObject); // { a: 'a', b: 'b', cObject: { a: 3, b: 2 } }

aObject.cObject.a = 3;
console.log("aObject", aObject); // { a: 'a', b: 'b', cObject: { a: 3, b: 2 } }
console.log("newAObject", newAObject); // { a: 'a', b: 'b', cObject: { a: 1, b: 2 } }
