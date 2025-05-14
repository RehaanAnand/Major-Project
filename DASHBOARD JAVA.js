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
    history: "fas fa-landmark",
    chemistry: "fas fa-flask",
    physics: "fas fa-atom",
    biology: "fas fa-dna",
    geography: "fas fa-globe-europe"
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
