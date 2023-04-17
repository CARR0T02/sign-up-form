const cfmPassword = document.getElementById('cfm-password');
const password = document.getElementById('password');

function checkCfmPassword() {
  const cfmPassword = document.getElementById('cfm-password');
  const password = document.getElementById('password');
  const errorMsg = cfmPassword.nextSibling;
  if (cfmPassword.value !== password.value) {
    cfmPassword.setCustomValidity('Passwords do not match.');
    if (errorMsg.classList.contains('hidden')) {
      errorMsg.classList.toggle('hidden');
    }
  } else {
    cfmPassword.setCustomValidity('');
    errorMsg.classList.toggle('hidden');
  }
}
cfmPassword.addEventListener('input', checkCfmPassword);
password.addEventListener('input', checkCfmPassword);

const firstNameInput = document.querySelector('#first-name');
const nameRE = /[A-Z]?[a-z]+/;
firstNameInput.addEventListener('input', () => {});

const lastNameInput = document.querySelector('#last-name');

const emailInput = document.querySelector('#email');

const phoneInput = document.querySelector('#phone-number');
