document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        emailError.textContent = "";
        passwordError.textContent = "";
        if (!email) {
            emailError.textContent = "Email không được bỏ trống.";
            return;
        }
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (!foundUser) {
            passwordError.textContent = "Email hoặc mật khẩu không đúng.";
            return;
        }
        alert("Đăng nhập thành công!");
        window.location.href = "homepage.html";
    });
});
