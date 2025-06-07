function showResources(subject) {
      document.getElementById('subject-selection').style.display = 'none';
      document.getElementById(`${subject}-resources`).style.display = 'block';
    }

    function goBack() {
      document.getElementById('maths-resources').style.display = 'none';
      document.getElementById('english-resources').style.display = 'none';
      document.getElementById('subject-selection').style.display = 'block';
    }