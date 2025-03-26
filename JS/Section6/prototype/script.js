// let user = {
//   name: "John",
//   age: 30,
//   email: "hello@naver.com",
// };

// console.log(user.name);
// console.log(user.hasOwnProperty("email")); // false

// function Person(name, email, birthday) {
//   this.name = name;
//   this.email = email;
//   this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

function Person(name, email, birthday) {
  const person = Object.create(personsPrototype);
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

const personsPrototype = {
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};

const John = new Person("john", "email", "9-10-1990");
const han = new Person("han", "email", "9-10-1980");
console.log(John);
console.log(han);
