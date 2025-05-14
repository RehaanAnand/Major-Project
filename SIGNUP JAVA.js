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

document.querySelectorAll(".toggle-password").forEach(function(icon) {
  icon.addEventListener("click", function() {
    const input = document.querySelector(icon.getAttribute("toggle"));
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    icon.classList.toggle("bx-hide");
    icon.classList.toggle("bx-show");
  });
});

const subjectSelect = new Choices('#subjects', {
    removeItemButton: true,
    searchEnabled: true,
    placeholderValue: 'Select your subjects',
    searchPlaceholderValue: 'Search subjects...'
  });

function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm").value;
  const subjects = Array.from(document.getElementById("subjects").selectedOptions).map(option => option.value);

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    alert("Username already taken!");
    return;
  }

  const newUser = { username, email, password, subjects };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("currentUser", username);

  alert("Signup successful! Please log in.");
  window.location.href = "login.html"
}


