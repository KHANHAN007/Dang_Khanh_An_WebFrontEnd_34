document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const positionInput = document.getElementById("positionInput");
    const addEmployeeBtn = document.getElementById("addEmployeeBtn");
    const employeeTableBody = document.getElementById("employeeTableBody");
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    function renderEmployees() {
        employeeTableBody.innerHTML = "";
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            `;
            employeeTableBody.appendChild(row);
        });
    }
    function addEmployee() {
        const name = nameInput.value.trim();
        const position = positionInput.value.trim();
        if (name === "" || position === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        employees.push({ name, position });
        localStorage.setItem("employees", JSON.stringify(employees));
        nameInput.value = "";
        positionInput.value = "";
        renderEmployees();
    }
    addEmployeeBtn.addEventListener("click", addEmployee);
    renderEmployees();
});
