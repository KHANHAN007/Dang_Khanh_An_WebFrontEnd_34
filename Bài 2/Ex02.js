const tasks = [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm th`' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci Ớt Ớt' }
];
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    loadTasks();
});


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";
    tasks.forEach((task, index) => {
        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button class="edit-btn" onclick="editTask(${index})">Sửa</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Xoá</button>
            </td>
        </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function addTask() {
    let content = document.getElementById("content").value;
    let dueDate = document.getElementById('dueDate').value;
    let status = document.getElementById('status').value;
    let assignedTo = document.getElementById('assignedTo').value;

    if (content === "" || dueDate === "" || assignedTo === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ content, dueDate, status, assignedTo });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    clearForm();
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let task = tasks[index];
    document.getElementById("content").value = task.content;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("assignedTo").value = task.assignedTo;

    document.getElementById("submitBtn").onclick = function () {
        updateTask(index);
    };
}

function updateTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index] = {
        content: document.getElementById("content").value,
        dueDate: document.getElementById("dueDate").value,
        status: document.getElementById("status").value,
        assignedTo: document.getElementById("assignedTo").value
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    clearForm();
    document.getElementById("submitBtn").onclick = addTask;
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function clearForm() {
    document.getElementById("content").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "Pending";
    document.getElementById("assignedTo").value = "";
}
