document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Xóa";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function () {
                removeTodo(index);
            };
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === "") {
            alert("Vui lòng nhập công việc!");
            return;
        }
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        renderTodos();
    }
    function removeTodo(index) {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
    }
    addBtn.addEventListener("click", addTodo);
    renderTodos();
});
