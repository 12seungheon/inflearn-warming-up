const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("foo");

console.log(sym1 === sym2); // false

console.log(sym3.description); // "foo"
