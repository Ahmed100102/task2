let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");

function addTask() {
    let taskValue = taskInput.value;
    if (taskValue === "") {
        return;
    }

    let task = document.createElement("li");
    task.classList.add("task");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            task.classList.add("completed");
        } else {
            task.classList.remove("completed");
        }
    });
    task.appendChild(checkbox);

    let taskText = document.createElement("span");
    taskText.innerText = taskValue;
    task.appendChild(taskText);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(task);
    });
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskInput.value = "";
}

