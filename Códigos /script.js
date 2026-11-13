
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateDashboard() {
    const completed = tasks.filter(task => task.done).length;
    const pending = tasks.length - completed;

    document.getElementById("completed").textContent = completed;
    document.getElementById("pending").textContent = pending;
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        if (task.done) {
            li.classList.add("done");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        checkbox.addEventListener("change", () => {
            task.done = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete");

        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter(item => item.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.append(checkbox, span, deleteButton);
        taskList.appendChild(li);
    });

    updateDashboard();
}

taskForm.addEventListener("submit", event => {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) return;

    tasks.push({
        id: Date.now(),
        text: text,
        done: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
});

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short"
        });
}

const notes = document.getElementById("notes");

notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("input", () => {
    localStorage.setItem("notes", notes.value);
});

updateClock();
setInterval(updateClock, 1000);

renderTasks();

