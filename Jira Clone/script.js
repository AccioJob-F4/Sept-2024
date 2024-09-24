document.addEventListener("DOMContentLoaded", () => {
  const taskModal = document.getElementById("task-modal");
  const createTaskBtn = document.getElementById("create-task-btn");
  const closeModalBtn = document.getElementsByClassName("close")[0];
  const taskForm = document.getElementById("task-form");

  const columns = {
    todo: document.getElementById("todo").querySelector(".task-list"),
    inProgress: document
      .getElementById("in-progress")
      .querySelector(".task-list"),
    done: document.getElementById("done").querySelector(".task-list"),
  };

  createTaskBtn.addEventListener("click", () => {
    taskModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;

    const newTask = createTaskElement(title, desc);

    columns.todo.appendChild(newTask);

    taskForm.reset();
    taskModal.style.display = "none";
  });

  const createTaskElement = (title, desc) => {
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
    task.draggable = true;

    task.addEventListener("dragstart", () => handleDragStart(task));

    task.addEventListener("dragend", handleDragEnd);

    return task;
  };

  let draggedTask = null;

  const handleDragStart = (task) => {
    draggedTask = task;
  };

  const handleDragEnd = () => {
    draggedTask = null;
  };

  Object.values(columns).forEach((column) => {
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    column.addEventListener("drop", () => {
      if (draggedTask) {
        column.appendChild(draggedTask);
      }
    });
  });
});
