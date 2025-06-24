document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  // Dummy validation
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
