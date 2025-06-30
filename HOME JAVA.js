document.addEventListener("DOMContentLoaded", function () {
  const currentUsername = localStorage.getItem("currentUser"); 
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = users.find(user => user.username === currentUsername);

  if (currentUser) {
    const usernameSpans = [
      document.getElementById("dashboard-username"),
      document.getElementById("dashboard-name"),
      document.querySelector(".user-dropdown span")
    ];

    usernameSpans.forEach(el => {
      if (el) el.textContent = currentUser.username;
    });

    const subjectList = document.getElementById("dashboard-subjects");
    if (subjectList && currentUser.subjects && currentUser.subjects.length > 0) {
      subjectList.innerHTML = ""; 
      currentUser.subjects.forEach(subject => {
  const li = document.createElement("li");

  const key = subject.toLowerCase().replace(/\s+/g, "-");

  const iconMap = {
    math: "fas fa-square-root-alt",
    english: "fas fa-book",
  };

  const iconClass = iconMap[key] || "fas fa-book-open";

  li.className = `subject-${key}`;
  li.innerHTML = `<i class="${iconClass}"></i> ${subject}`;
  subjectList.appendChild(li);
});

    }

  } else {
    window.location.href = "login.html";
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