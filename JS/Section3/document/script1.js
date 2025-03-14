let val;

// val = document;

// val = document.baseURI;
// val = document.head;
// val = document.body;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].classList;

// val = document.scripts;
// val = document.scripts[1].getAttribute("src");

const headerContainer = document.querySelector("#header-container");
// headerContainer.style.display = "none";

// console.log(headerContainer);

headerContainer.textContent = "Hello World";
headerContainer.innerText = "inner text";
headerContainer.innerHTML = "<h1>inner html</h1>";

const items = document.getElementsByClassName("list-group-item");

console.log(items);

items[0].style.color = "red";
items[1].textContent = "Hello";

let lists = document.getElementsByTagName("li");

lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
  list.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");

liOdd.forEach((li) => {
  li.style.background = "#ccc";
});
