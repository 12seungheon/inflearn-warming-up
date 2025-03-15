// window.onload = function () {
//   // 문서가 load 될 때 이 함수를 실행
//   let text = document.getElementById("text");
//   // 아이디가 text인 요소를 가져옴

//   text.innerText = "HTML 문서 load 완료!";
//   // text 요소의 텍스트를 변경
// };

// const aElement = document.querySelector("a");
// // a 태그 요소를 가져옴

// aElement.addEventListener("click", () => {
//   // a 태그 요소에 클릭 이벤트를 추가
//   alert("a 태그 클릭!");
//   // 경고창을 띄움
// });

// const buttonElement = document.querySelector(".btn2");

// buttonElement.addEventListener("click", (event) => {
//   let val;
//   val = event.target;
//   // 이벤트가 발생한 요소를 출력
//   val = event.type;
//   // 이벤트 타입을 출력
//   val = event.timeStamp;
//   // 이벤트 발생 시간을 출력
//   val = event.clientY;
//   // 브라우저 창에서의 마우스 y 좌표를 출력
//   val = event.clientX;
//   // 브라우저 창에서의 마우스 x 좌표를 출력
//   val = event.offsetY;
//   // 이벤트가 발생한 요소에서의 마우스 y 좌표를 출력
//   val = event.offsetX;
//   // 이벤트가 발생한 요소에서의 마우스 x 좌표를 출력
//   console.log(val);
//   // 이벤트 객체를 출력
// });

// const submitBtn = document.querySelector(".submit-btn");
// const form = document.querySelector("form");
// const title = document.querySelector("h2");

// // Click Event
// submitBtn.addEventListener("click", handleEvent);
// // 클릭했을때
// submitBtn.addEventListener("dblclick", handleEvent);
// // 더블클릭했을때
// submitBtn.addEventListener("mousedown", handleEvent);
// // 마우스를 눌렀을때
// submitBtn.addEventListener("mouseup", handleEvent);
// // 마우스를 뗐을때
// submitBtn.addEventListener("mouseenter", handleEvent);
// // 마우스가 요소에 들어갔을때
// submitBtn.addEventListener("mouseleave", handleEvent);
// // 마우스가 요소에서 나갔을때
// submitBtn.addEventListener("mouseover", handleEvent);
// // 마우스가 요소 위에 있을때
// submitBtn.addEventListener("mouseout", handleEvent);
// // 마우스가 요소 밖에 있을때

// From Event
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const title = document.querySelector("h2");

form.addEventListener("submit", handleEvent);
emailInput.addEventListener("keydown", handleEvent);
// 키를 눌렀을때
emailInput.addEventListener("keyup", handleEvent);
// 키를 뗐을때
emailInput.addEventListener("focus", handleEvent);
// 포커스가 되었을때
emailInput.addEventListener("blur", handleEvent);
// 포커스가 해제되었을때
emailInput.addEventListener("cut", handleEvent);
// 텍스트를 잘랐을때
emailInput.addEventListener("paste", handleEvent);
// 텍스트를 붙였을때
emailInput.addEventListener("input", handleEvent);
// 텍스트를 입력했을때

function handleEvent(e) {
  if (e.type === "submit") {
    e.preventDefault();
    // 기본 이벤트를 막음
  }
  // e.preventDefault();
  // 기본 이벤트를 막음
  console.log(`Event type: ${e.type}`);
  title.textContent = e.target.value;
}
