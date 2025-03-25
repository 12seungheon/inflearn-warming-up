// Call();
// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// fullName.call(person1, "Oslo", "Norway");

// Apply(); 배열로 넣어줘야 함
// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// fullName.apply(person1, ["Oslo", "Norway"]);

// Bind();
function func(language) {
  if (language === "ko") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕하세요",
  engGreeting: "Hello",
};

const boundFunc = func.bind(greeting);
boundFunc("ko");
boundFunc("en");
