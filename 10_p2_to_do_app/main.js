let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask);
let taskList = [];
let taskBar = document.getElementById("task_list");

function addTask() {
  let task = {
    id: randomIDGenerator(),
    taskName: taskInput.value,
    isComplete: false
  };
  taskList.push(task);
  console.log(taskList);
  render()
}

function render() {

  let resultHTML = ''

  for (i = 0; i < taskList.length; i++) {

    if (taskList[i].isComplete == true) {
      resultHTML +=
        `
    <div class="task_list_area">
    <span class="task_done">${taskList[i].taskName}</span>
    <span>
      <button onclick="toggleComplete('${taskList[i].id}')">CHECK</button>
      <button onclick="deleteTask('${taskList[i].id}')">DELETE</button>
    </span>
  </div>
  `
    } else {
      resultHTML +=
        `
    <div class="task_list_area">
    <span>${taskList[i].taskName}</span>
    <span>
      <button onclick="toggleComplete('${taskList[i].id}')">CHECK</button>
      <button onclick="deleteTask('${taskList[i].id}')">DELETE</button>
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
    }
  }
  render()
}