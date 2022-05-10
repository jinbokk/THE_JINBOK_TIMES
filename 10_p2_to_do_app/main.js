let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask);
let taskList = [];
let taskBar = document.getElementById("task_list");


function addTask() {
  taskList.push(taskInput.value);
  console.log(taskList);
  render()
}

function render() {
  let resultHTML = ''

  for (i = 0; i < taskList.length; i++) {
    resultHTML += `
    <div class="task_list_area">
    <span>${taskList[i]}</span>
    <span>
      <button>CHECK</button>
      <button>DELETE</button>
    </span>
  </div>
  `
  }

  document.getElementById("task_list").innerHTML = resultHTML;
}