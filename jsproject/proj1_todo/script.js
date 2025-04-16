document.addEventListener("DOMContentLoaded", () => {
  const todoinput = document.getElementById("todo-input");
  const addtaskbutton = document.getElementById("add-task-btn");
  const todolist = document.getElementById("to-list");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    rendertask(task);
  });
  addtaskbutton.addEventListener("click", () => {
    const tasktext = todoinput.value.trim();
    if (tasktext === "") return;
    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    rendertask(newTask);
    todoinput.value = "";
    console.log(tasks);
  });
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function rendertask(task) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });
    todolist.appendChild(li);
  }
});
