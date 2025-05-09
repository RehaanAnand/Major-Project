function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const matchingUser = users.find(user => user.username === username && user.password === password);

  if (matchingUser) {
    localStorage.setItem('activeUser', JSON.stringify(matchingUser));
    window.location.href = "DASHBOARD.html";
  } else {
    alert("Incorrect username or password.");
  }
}