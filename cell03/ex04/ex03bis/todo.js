$(document).ready(function() {
    loadTasks();

    $("#new-task").click(function() {
        let taskText = prompt("Enter a new TO DO:");
        if (taskText === null || taskText.trim() === "") return;

        let task = $("<div>").addClass("task").text(taskText);

        task.click(function() {
            let confirmDelete = confirm("Do you want to remove this task?");
            if (confirmDelete) {
                $(this).remove();
                saveTasks();
            }
        });

        $("#ft_list").prepend(task);
        saveTasks();
    });

    function saveTasks() {
        let tasks = [];
        $(".task").each(function() {
            tasks.push($(this).text());
        });
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/`;
    }

    function loadTasks() {
        let cookies = document.cookie.split("; ");
        let taskCookie = cookies.find(row => row.startsWith("tasks="));
        
        if (taskCookie) {
            let tasks = JSON.parse(taskCookie.split("=")[1]);
            tasks.forEach(taskText => {
                let task = $("<div>").addClass("task").text(taskText);
                task.click(function() {
                    let confirmDelete = confirm("Do you want to remove this task?");
                    if (confirmDelete) {
                        $(this).remove();
                        saveTasks();
                    }
                });
                $("#ft_list").prepend(task);
            });
        }
    }
});
