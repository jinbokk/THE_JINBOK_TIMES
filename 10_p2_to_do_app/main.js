let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask); //동시에 ALL tab이 클릭되게 구현할 것!
let inputBox = document.getElementById("task_input");
inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTask()
  }
});
let taskList = [];
let taskBar = document.getElementById("task_list");
let tabs = document.querySelectorAll(".tabs_area span");
let filterList = []
let mode = "ALL"
let underLine = document.getElementById("tab_underline")

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event)
  });
}

function addTask() {
  let task = {
    id: randomIDGenerator(),
    taskName: taskInput.value,
    isComplete: false
  };
  taskList.push(task);
  inputBox.value = ""
  console.log(taskList);
  render()
}

function render() {
  let status = [];
  if (mode == "ALL") {
    status = taskList
  } else if (mode == "To Do" || mode == "Done") {
    status = filterList
  }

  let resultHTML = ''
  for (let i = 0; i < status.length; i++) {

    if (status[i].isComplete == true) {
      resultHTML +=
        `
    <div class="task_list_area">
    <span class="task_done">${status[i].taskName}</span>
    <span>
      <button class="button-38" onclick="toggleComplete('${status[i].id}')">CHECK</button>
      <button class="button-38" onclick="deleteTask('${status[i].id}')">DELETE</button>
    </span>
  </div>
  `
    } else {
      resultHTML +=
        `
    <div class="task_list_area">
    <span>${status[i].taskName}</span>
    <span>
      <button class="button-38" onclick="toggleComplete('${status[i].id}')">CHECK</button>
      <button class="button-38" onclick="deleteTask('${status[i].id}')">DELETE</button>
    </span>
  </div>
  `
    }
  }
  document.getElementById("task_list").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  console.log(taskList);
  render()
}

function randomIDGenerator() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  console.log(taskList);
  render()
}

function filter(event) {

  if (event) {
    selectedMenu = event.target.id;
    underLine.style.width = event.target.offsetWidth + "px";
    underLine.style.left = event.target.offsetLeft + "px";
    underLine.style.top =
      event.target.offsetTop + (event.target.offsetHeight - 4) + "px";
  }

  mode = event.target.id
  filterList = []

  if (mode == "ALL") {
    render()
  } else if (mode == "To Do") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i])
      }
      render()
    }
  } else if (mode == "Done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i])
      }
      render()
    }
  }

  console.log(filterList)
}