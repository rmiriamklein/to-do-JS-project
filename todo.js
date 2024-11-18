document.getElementById("add-button").onclick = function () {
  let todotext = document.getElementById("todo-input").value;
  let completeButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  completeButton.classList.add("complete-button");
  let listItem = document.createElement("li");
  listItem.classList.add("todo-item");
  deleteButton.innerText = "Delete";
  completeButton.innerText = "Complete";
  let taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.innerText = todotext;
  listItem.appendChild(taskText);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  document.getElementById("todo-list").appendChild(listItem);
  let todotextPlaceHolder = document.getElementById("todo-input");
  todotextPlaceHolder.value = "";

  deleteButton.onclick = function () {
    deleteButton.parentElement.remove();
  };

  completeButton.onclick = function () {
    completeButton.previousSibling.classList.add("completed");
  };
};
