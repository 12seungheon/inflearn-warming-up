let val;

// Number to string
val = String(111);
val = String(8 + 4);

// Boolean to string
val = String(false);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();

// string to number
val = Number("1");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1, 2, 3, 4, 5]); // NaN

// parseInt
val = parseInt("100.30"); // 100
val = parseFloat("100.30"); // 100.3

console.log(val);
console.log(typeof val);
console.log(val.length);

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
