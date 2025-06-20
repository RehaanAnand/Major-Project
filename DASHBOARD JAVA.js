document.addEventListener("DOMContentLoaded", function () {
  const currentUsername = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = users.find(user => user.username === currentUsername);

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userSpan = document.querySelector(".user-dropdown span");
  if (userSpan) {
    userSpan.textContent = currentUser.username;
  }
});

function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".user-dropdown");
  const menu = document.getElementById("dropdown-menu");
  if (menu && !dropdown.contains(event.target)) {
    menu.style.display = "none";
  }
});

const userSpan = document.getElementById("username-display");
if (userSpan && currentUser) {
  userSpan.textContent = currentUser.username;
}