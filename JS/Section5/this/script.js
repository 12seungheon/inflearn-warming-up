// // Method => Object

// const audio = {
//   title: "a",
//   play() {
//     console.log("play this", this);
//   },
// };

// audio.play(); // play this { title: 'a', play: [Function: play] }

// audio.stop = function () {
//   console.log("stop this", this);
// };

// audio.stop(); // stop this { title: 'a', play: [Function: play], stop: [Function] }

// Function => Window Object
// function playaudio() {
//   console.log(this);
// }

// playaudio(); // Window Object

// Constructor Fuction => {}
// function Audio(title) {
//   this.title = title;
//   console.log(this);
// }

// const audio = new Audio("a"); // Audio { title: 'a' }

// const audio = {
//   title: "audio",
//   categories: ["a", "b", "c"],
//   displayCategories() {
//     this.categories.forEach(
//       function (category) {
//         console.log(`title: ${this.title}, category: ${category}`);
//       },
//       { title: "audio" }
//     );
//   },
// };

// audio.displayCategories();

// 화살표 함수 ===> this는 상위 스코프의 this를 가리킨다.
const audio = {
  title: "audio",
  categories: ["a", "b", "c"],
  displayCategories() {
    this.categories.forEach((category) => {
      console.log(this);
    });
  },
};

audio.displayCategories();
