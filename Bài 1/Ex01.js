document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    let isValid = true;
    if (email === "") {
        emailError.textContent = "Email không được để trống!";
        isValid = false;
    }
    if (password === "") {
        passwordError.textContent = "Mật khẩu không được để trống!";
        isValid = false;
    }
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Mật khẩu xác nhận không trùng khớp!";
        isValid = false;
    }
    if (!isValid) return;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        emailError.textContent = "Email đã tồn tại!";
        return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    document.getElementById("registerForm").reset();
});