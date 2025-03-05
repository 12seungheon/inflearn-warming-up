let foo = 42;
foo = "bar";
foo = true;
console.log(typeof foo);

// 원시 타입
// 문자열 String
const name = "John";
// 숫자 Number
const age = 26;
// 불린 Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// 심볼 Symbol
const sym = Symbol();

// 참조 타입
// 배열 Array
const hobbies = ["music", "movies"];
// 객체 Object
const address = {
  province: "경기도",
  city: "성남시",
};

console.log(typeof address);
console.log(Array.isArray(hobbies)); // 배열 확인할 때는 Array.isArray() 사용
