// element 생성
const li = document.createElement("li");

// 클래스 추가하기
li.className = "list-group-item";

// id 추가하기
li.id = "new-item";

// 속성 추가하기
li.setAttribute("name", "New list item");

// link element 생성
const link = document.createElement("a");

link.className = "alarm-item";

link.innerHTML = "<i class='b-alarm'></i>";

li.appendChild(link);

document.querySelector("ul.list-group").appendChild(li);
