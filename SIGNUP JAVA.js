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

  const userData = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  alert('Account created successfully!');
  window.location.href = 'login.html'; 
}
