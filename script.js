function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}
