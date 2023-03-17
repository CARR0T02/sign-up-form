const cfmPassword = document.getElementById("cfm-password");
const password = document.getElementById("password");

cfmPassword.addEventListener("input", () => {
  if (cfmPassword.value !== password.value) {
    showError();
    cfmPassword.classList.add("invalid");
    password.classList.add("invalid");
  } else {
    cfmPassword.classList.remove("invalid");
    password.classList.remove("invalid");
  }
});

function showError() {
  let errorMsg = document.querySelector(".error");
  errorMsg.textContent = "* Passwords do not match";
}
