let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    let completedCount = 0;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleCompletion(${index})">
            ${task.text}
            <button onclick="removeTask(${index})">Delete</button>
        `;

        if (task.completed) {
            li.style.textDecoration = "line-through";
            completedCount++;
        }

        taskList.appendChild(li);
    });

    const totalTasks = document.getElementById("total-tasks");
    const completedTasks = document.getElementById("completed-tasks");

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completedCount;
}

updateTaskList();
