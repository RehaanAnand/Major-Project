document.addEventListener("DOMContentLoaded", function () {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  
    if (activeUser && activeUser.username) {
      const usernameDisplay = document.getElementById("dashboard-username");
      if (usernameDisplay) {
        usernameDisplay.textContent = activeUser.username;
      }
  
      const userDropdown = document.querySelector(".user-dropdown span");
      if (userDropdown) {
        userDropdown.textContent = activeUser.username;
      }
    } else {
      window.location.href = "login.html";
    }
  });