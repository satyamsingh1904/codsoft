function openForm() {
  document.getElementById("hireForm").style.display = "block";
}

function closeForm() {
  document.getElementById("hireForm").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert(`Thanks ${name}, your message has been received!`);
  closeForm();

  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

