// class Person {
//   constructor(name, email, brithday) {
//     this.name = name;
//     this.email = email;
//     this.brithday = new Date(brithday);
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I was born on ${this.brithday}`;
//   }

//   static multiplyNumber(x, y) {
//     return x * y;
//   }
// }

// const john = new Person("john", "qwe@naver.com", "1990-10-10");

// console.log(john);

class Person {
  constructor(name, email, brithday) {
    this.name = name;
    this.email = email;
    this.brithday = new Date(brithday);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I was born on ${this.brithday}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);
    this.phone = phone;
    this.address = address;
  }
}

const john = new Client("John", "qwer@naver.com", "010-1234-5678", "Seoul");
console.log(john);
