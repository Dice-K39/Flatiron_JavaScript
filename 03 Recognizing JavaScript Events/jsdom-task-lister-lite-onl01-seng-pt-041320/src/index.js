document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskList = document.getElementById("tasks");


    function listItems(item) {
        const newList = document.createElement("li");

        newList.textContent = item;

        return newList
    };

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTaskDescription = document.getElementById("new-task-description");

        if (newTaskDescription !== "") {
            const li = document.createElement("li");

            li.innerText = newTaskDescription.value;
            newTaskList.append(li);
            newTaskDescription.value = "";
        }

        e.target.reset();
    });

    newTaskList.addEventListener("click", function(e) {
        if (event.target !== event.currentTarget) {
            event.target.remove();
        }
    })
});