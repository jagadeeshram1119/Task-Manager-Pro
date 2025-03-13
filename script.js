///using  1 local storageand 2 array

//or// using local storage
let data = JSON.parse(localStorage.getItem("data")) || [];
let inputs = document.querySelector(".inputs");
let alllist = document.querySelector(".Alllist");
let submits = document.getElementById("add-btn");

function renderTasks() {
  alllist.innerHTML = "";
  data.forEach((task, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");

    if (task.completed) {
      newDiv.classList.add("completed");
    }

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check-circle-o", "icon");

    if (task.completed) {
      checkIcon.classList.add("fa-rotate-left");
    }

    checkIcon.addEventListener("click", () => {
      task.completed = !task.completed;

      if (task.completed) {
        newDiv.classList.add("completed");
        checkIcon.classList.add("fa-rotate-left");
      } else {
        newDiv.classList.remove("completed");
        checkIcon.classList.remove("fa-rotate-left");
      }
      localStorage.setItem("data", JSON.stringify(data));
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash", "icon");
    deleteIcon.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      renderTasks();
    });

    let taskText = document.createElement("span");
    taskText.textContent = task.text;

    newDiv.appendChild(taskText);
    iconContainer.appendChild(checkIcon);
    iconContainer.appendChild(deleteIcon);
    newDiv.appendChild(iconContainer);
    alllist.appendChild(newDiv);
  });
}

renderTasks();

submits.addEventListener("click", () => {
  if (inputs.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let newTask = {
    text: inputs.value,
    completed: false,
  };

  data.push(newTask);
  localStorage.setItem("data", JSON.stringify(data));
  inputs.value = "";
  renderTasks();
});

let allbtn = document.getElementById("All-btn");
let Completedbtn = document.getElementById("Completed-btn");
let Pendingbtn = document.getElementById("Pending-btn");

allbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    alllist.children[i].style.display = "flex";
  }
});

Completedbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    if (alllist.children[i].classList.contains("completed")) {
      alllist.children[i].style.display = "flex";
    } else {
      alllist.children[i].style.display = "none";
    }
  }
});

Pendingbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    if (!alllist.children[i].classList.contains("completed")) {
      alllist.children[i].style.display = "flex";
    } else {
      alllist.children[i].style.display = "none";
    }
  }
});

/*
//or// using array
let inputs = document.getElementsByClassName("inputs")[0];
let submits = document.getElementById("add-btn");
let alllist = document.getElementsByClassName("Alllist")[0];

submits.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");

  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  let checkIcon = document.createElement("i");
  checkIcon.classList.add("fa", "fa-check-circle-o", "icon");

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash", "icon");

  let taskText = document.createElement("span");
  taskText.textContent = inputs.value;

  newDiv.appendChild(taskText);

  iconContainer.appendChild(checkIcon);
  iconContainer.appendChild(deleteIcon);

  newDiv.appendChild(iconContainer);

  alllist.appendChild(newDiv);

  inputs.value = "";

  checkIcon.addEventListener("click", () => {
    newDiv.classList.add("completed");
    checkIcon.style.display = "none";
  });

  deleteIcon.addEventListener("click", () => {
    newDiv.remove();
  });
});

let allbtn = document.getElementById("All-btn");
let Completedbtn = document.getElementById("Completed-btn");
let Pendingbtn = document.getElementById("Pending-btn");

allbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    alllist.children[i].style.display = "flex";
  }
});

Completedbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    if (alllist.children[i].classList.contains("completed")) {
      alllist.children[i].style.display = "flex";
    } else {
      alllist.children[i].style.display = "none";
    }
  }
});

Pendingbtn.addEventListener("click", () => {
  for (let i = 0; i < alllist.children.length; i++) {
    if (!alllist.children[i].classList.contains("completed")) {
      alllist.children[i].style.display = "flex";
    } else {
      alllist.children[i].style.display = "none";
    }
  }
});

*/
