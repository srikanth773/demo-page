const editBtn = document.getElementById("editBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const saveBtn = document.getElementById("saveBtn");

const nameField = document.getElementById("username");
const emailField = document.getElementById("email");
const roleField = document.getElementById("role");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const roleInput = document.getElementById("roleInput");

editBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  nameInput.value = nameField.textContent;
  emailInput.value = emailField.textContent;
  roleInput.value = roleField.textContent;
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  nameField.textContent = nameInput.value;
  emailField.textContent = emailInput.value;
  roleField.textContent = roleInput.value;
  popup.style.display = "none";
});
