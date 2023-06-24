// global scope
let addTaskPopUp = document.querySelector(".addTaskPopUp");
let addTaskPopUp2 = document.querySelector(".addTaskPopUp2");
let backButton = document.querySelector(".backBtn");
let backButton2 = document.querySelector(".backBtn2");
let addTaskPopUpSecondPage = document.querySelector(".addTaskPopUpSecondPage");
let addTaskButton = document.querySelector(".addTaskButton");
let closeTaskButton = document.querySelector(".closeTaskButton");
let head1 = document.getElementsByClassName("head1");
let popup = document.getElementsByClassName("addTask");
let popup2 = document.getElementsByClassName("addItem");
let addItemButton = document.querySelector(".addItemButton");
let head2 = document.getElementsByClassName("head2");
let head2Text = document.getElementsByClassName("head2Text");
let todo = document.getElementsByClassName("todos");
let todo2 = document.getElementsByClassName("todo2");
let closeItemButton = document.querySelector(".closeItemButton");

// codeing start with addEventListener
addTaskPopUp.addEventListener("click", () => {
  addPopup();
});
addTaskPopUp2.addEventListener("click", () => {
  addPopup();
});
backButton.addEventListener("click", () => {
  back();
});
backButton2.addEventListener("click", () => {
  back();
});
addTaskPopUpSecondPage.addEventListener("click", () => {
  addPopup();
});
addTaskButton.addEventListener("click", () => {
  addTask();
});
closeTaskButton.addEventListener("click", () => {
  closeTask();
});
addItemButton.addEventListener("click", () => {
  addItem();
});
closeItemButton.addEventListener("click", () => {
  closeItem();
});

// function start
function addPopup() {
  head1[0].classList.add("blur1");
  head2[0].classList.add("blur1");

  popup[0].style.display = "block";
}

function closeTask() {
  popup[0].style.display = "none";
  head1[0].classList.remove("blur1");
  head2[0].classList.remove("blur1");
}
var idCount = 0;
var count = 0;
let todoCardId = 0;
let child;
let headChild;
let childMainDiv;

// adding a new task
function addTask() {
  idCount++;
  count++;

  let cardTittle = document.querySelector(".cardText").value;
  if (count > 0) {
    let checkItems = document.querySelector(".checkItem");
    checkItems.style.display = "none";
  }

  if (cardTittle) {
    createCard(idCount, cardTittle, count);
  } else {
    cardTittle = "No Name";
    createCard(idCount, cardTittle, count);
  }
  closeTask();
  back();
}

function createCard(id, cardTittle, count) {
  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", `${id}`);
  let heading = document.createElement("p");
  let button1 = document.createElement("img");
  let button2 = document.createElement("img");

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", `mainDiv${id}`);
  todo[0].appendChild(todoDiv);
  todoDiv.appendChild(heading);
  todoDiv.append(button1);
  todoDiv.append(button2);
  todoDiv.appendChild(mainDiv);

  heading.innerHTML = `${cardTittle}`;

  button2.src = "./edit.png";
  button1.src = "./trash.png";
  mainDiv.classList.add("mainDiv");
  todoDiv.classList.add("todoscard");
  button1.classList.add("addCardBtn1");
  button2.classList.add("addCardBtn2");
  heading.classList.add("line");

  heading.addEventListener("click", () => {
    head1[0].style.display = "none";
    head2[0].style.display = "block";
    head2Text[0].innerHTML = `${cardTittle}`;
    todoCardId = todoDiv.getAttribute("id");
    headChild = document.getElementById(`${todoCardId}`);
    console.log(headChild);
    todo2[0].appendChild(headChild);
    // here headChaild is a taskParentDiv
  });

  button1.addEventListener("click", () => {
    count--;
    todoDiv.remove();
    if (count === 0) {
      let checkItems = document.querySelector(".checkItem");
      checkItems.style.display = "block";
    }
  });

  button2.addEventListener("click", () => {
    head1[0].classList.add("blur1");
    head2[0].classList.add("blur1");
    popup2[0].style.display = "block";

    // this line is use to finding the main parent of the box
    // jisme sub kuch rakha hai
    todoCardId = todoDiv.getAttribute("id");
    // this line is use to targeting the subtaskContainner
    child = document.getElementById(`${todoCardId}`).children;
    childMainDiv = child[3];
    // here childMainDiv is subtaskContainner
  });
}

function closeItem() {
  head1[0].classList.remove("blur1");
  head2[0].classList.remove("blur1");
  popup2[0].style.display = "none";
}

function addItem() {
  popup2[0].style.display = "none";
  head1[0].classList.remove("blur1");
  head2[0].classList.remove("blur1");

  let itemDiv = document.createElement("div");
  let itemText = document.createElement("div");
  let itemButton = document.createElement("button");

  console.log(childMainDiv);
  childMainDiv.appendChild(itemDiv);
  itemDiv.appendChild(itemText);
  itemDiv.appendChild(itemButton);

  itemDiv.classList.add("itemDiv");
  itemText.classList.add("itemText");
  itemButton.classList.add("itemButton");

  let itemInput = document.querySelector(".cardItem").value;
  // subtask Heading
  if (itemInput) {
    itemText.innerHTML = `${itemInput}`;
    itemButton.innerHTML = " Done";
  } else {
    itemText.innerHTML = `unKnow`;
    itemButton.innerHTML = " Done";
  }

  itemText.innerHTML = `${itemInput}`;
  itemButton.innerHTML = " Done";

  itemButton.addEventListener("click", () => {
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "red";
    itemButton.style.display = "none";
    itemText.style.marginLeft = "55px";

    itemText.addEventListener("click", () => {
      itemText.style.textDecoration = "none";
      itemText.style.color = "black";
      itemButton.style.display = "block";
      itemText.style.marginLeft = "0px";
    });
  });
}

function back() {
  head1[0].style.display = "block";
  head2[0].style.display = "none";
  // here headChaild is a taskParentDiv
  todo[0].appendChild(headChild);
}
