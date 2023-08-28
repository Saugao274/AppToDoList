inputHTML = document.getElementById("app__input")
buttonHTML = document.getElementById("app__button")
taskListHTML = document.getElementById("task__list")
totalOfTasksHTML = document.getElementById("totalOfTasks")

let numberOfTasks = 0;

buttonHTML.addEventListener("click", function () {
    numberOfTasks++;
    totalOfTasksHTML.textContent = numberOfTasks;
    const taskItem = document.createElement("li")
    taskItem.innerHTML = `
    <span class = "numTask">${numberOfTasks}</span>
    <p>${inputHTML.value}</p>
    <button onclick = "handleDeleteTasks(this)">DELETE</button>
    `
    console.log(taskItem)
    taskItem.classList.add("task__item")
    taskListHTML.appendChild(taskItem)
    console.log(taskItem.className);

    inputHTML.value = ""
})

const handleDeleteTasks = (button) => {
    const taskItem = button.closest(".task__item")
    let numOfThisTask = taskItem.querySelector(".numTask").textContent
    taskItem.remove()

    taskListHTML.querySelectorAll(".numTask").forEach(function (number) {
        if (number.textContent > numOfThisTask)
            number.innerHTML = number.textContent - 1;
        console.log(number.textContent)
    });
    numberOfTasks--;
    totalOfTasksHTML.textContent = numberOfTasks

}