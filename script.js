const back = document.querySelector("#background");
const input = document.querySelector(".input");
const icon = document.querySelector("#icon");
const list = document.querySelector(".list");
let countSpan = document.querySelector("#count");
let elements = document.querySelectorAll("list_element");
const allLi = document.getElementsByTagName("li");
const options = document.querySelector(".options");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
let allElements = [];
let activeElements = [];
let completedElements = [];
const del = document.getElementById("delete");

//adding ToDo
addbtn.addEventListener("click", function (event) {
  event.preventDefault();
  createLi();
  input.value = "";
});

//creating new list
function createLi() {
  const li = document.createElement("li");
  li.className = "list_element";

  document.body.classList.contains("dark-mode")
    ? (li.style.backgroundColor = "#393A4B")
    : (li.style.backgroundColor = "#ffff");
  document.body.classList.contains("dark-mode")
    ? (li.style.color = "#ffff")
    : (li.style.color = "#393A4B");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "checkbox";
  li.append(check);
  const btn = document.createElement("button");
  btn.id = "button";
  btn.textContent = "X";

  var text = input.value;
  text !== "" ? (text = input.value) : (text = "empty");
  const div = document.createElement("div");
  div.className = "text";
  document.body.classList.contains("dark-mode")
    ? (btn.style.color = "#ffff")
    : (btn.style.color = "#393A4B");
  li.classList.add("all");
  li.classList.add("active");

  div.append(text);
  div.append(btn);

  list.append(li);
  li.append(div);

  check.addEventListener("click", function () {
    if (check.checked) {
      div.style.textDecoration = "line-through";
      li.classList.add(".checked");
      li.classList.remove("active");
      completedElements.push(li);
      activeElements.splice(activeElements.indexOf(li), 1);
    } else {
      div.style.textDecoration = "none";
      li.classList.remove(".checked");
      li.classList.add("active");
      activeElements.push(li);
      completedElements.splice(completedElements.indexOf(li), 1);
    }
  });
  btn.addEventListener("click", function () {
    li.remove();
    countSpan.innerHTML = Number(countSpan.textContent) - 1;
  });
  countSpan.innerHTML = Number(countSpan.textContent) + 1;
}

//dark-mode
icon.addEventListener("click", function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.contains("dark-mode")
    ? (back.src = "./img/bg-desktop-dark.jpg")
    : (back.src = "./img/bg-desktop-light.jpg");
  element.classList.contains("dark-mode")
    ? (icon.src = "./img/icon-sun.svg")
    : (icon.src = "./img/icon-moon.svg");
  element.classList.contains("dark-mode")
    ? (input.backgroundColor = "#393A4B")
    : (input.backgroundColor = "#ffff");
  element.classList.contains("dark-mode")
    ? (options.backgroundColor = "#393A4B")
    : (options.backgroundColor = "#ffff");
});

//deleteCompleted
del.addEventListener("click", function () {
  list.innerHTML = "";
  countSpan.innerHTML = 0;
});

//displaying
function display(array) {
  let [...userListArray] = list.children;
  for (let elem of userListArray) {
    if (elem.className === "list_item") {
      elem.remove();
    }
  }

  for (let elem of array) {
    userList.insertAdjacentElement("afterbegin", elem);
  }
}

// filtr buttons
all.addEventListener(
  "click",
  document.querySelectorAll(".all").forEach(function (elem) {
    elem.addEventListener("click", function () {
      display(allElements);
    });
  })
);

active.addEventListener(
  "click",
  document.querySelectorAll(".active").forEach(function (elem) {
    elem.addEventListener("click", function () {
      display(activeElements);
    });
  })
);

completed.addEventListener(
  "click",
  document.querySelectorAll(".completed").forEach(function (elem) {
    elem.addEventListener("click", function () {
      display(completedElements);
    });
  })
);
