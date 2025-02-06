document.addEventListener("DOMContentLoaded", loadTasks);

const ftList = document.getElementById("ft_list");
const newTaskButton = document.getElementById("new-task");

newTaskButton.addEventListener("click", addTask);

function addTask() {
    let taskText = prompt("Enter a new TO DO:");
    if (taskText === null || taskText.trim() === "") return;

    let task = document.createElement("div");
    task.className = "task";
    task.textContent = taskText;

    task.addEventListener("click", () => {
        let confirmDelete = confirm("Do you want to remove this task?");
        if (confirmDelete) {
            task.remove();
            saveTasks();
        }
    });

    ftList.prepend(task);
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push(task.textContent);
    });
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/`;
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    let taskCookie = cookies.find(row => row.startsWith("tasks="));
    
    if (taskCookie) {
        let tasks = JSON.parse(taskCookie.split("=")[1]);
        tasks.forEach(taskText => {
            let task = document.createElement("div");
            task.className = "task";
            task.textContent = taskText;

            task.addEventListener("click", () => {
                let confirmDelete = confirm("Do you want to remove this task?");
                if (confirmDelete) {
                    task.remove();
                    saveTasks();
                }
            });

            ftList.prepend(task);
        });
    }
}
