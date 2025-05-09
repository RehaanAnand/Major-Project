function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  if (existingUsers.some(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }

  existingUsers.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(existingUsers));

  alert('Account created successfully!');
  window.location.href = 'login.html';
}

