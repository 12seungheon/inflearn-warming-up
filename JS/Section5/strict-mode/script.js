// "use strict";

// function sum(a, b) {
//   "use strict";
//   return a + b;
// }

// class Cat {}

// "use strict";

// let greeting = "Hello";

// greeting = "Hello, world!";

// console.log(greeting);
// console.log(window.greeting);

// "use strict";

// undefined = 8;
// NaN = 8;

// console.log(undefined);
// console.log(NaN);

// "use strict";

// const obj = {};

// Object.defineProperty(obj, "name", { value: "John", writable: false });

// console.log(obj);

// obj.name = "Doe";

// "use strict";

// const obj = {
//   get readOnly() {
//     return 10;
//   },
// };

// console.log(obj.readOnly);

// obj.readOnly = 20;

// console.log(obj.readOnly);

// function add(a, a, b) {
//   "use strict";
//   return a + a + b;
// }

// console.log(add(1, 2, 3));

// "use strict";

// "string".prop = 7;

// console.log("string".prop);

function sum(a, b) {
  console.log(this);
  return a + b;
}

console.log(this);
sum(1, 2);
