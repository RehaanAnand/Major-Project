function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const matchingUser = users.find(user => user.username === username && user.password === password);

  if (matchingUser) {
    localStorage.setItem("currentUser", username); 
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
}