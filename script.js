function handleError(requirement, element, customValidityMsg) {
  if (requirement) {
    showError(element, customValidityMsg);
  } else {
    hideError(element);
  }
}

function showError(element, customValidityMsg) {
  const errorMsg = element.nextSibling;
  if (errorMsg.classList.contains('hidden')) {
    element.setCustomValidity(customValidityMsg);
    errorMsg.classList.toggle('hidden');
  }
}

function hideError(element) {
  const errorMsg = element.nextSibling;
  element.setCustomValidity('');
  if (!errorMsg.classList.contains('hidden')) {
    errorMsg.classList.toggle('hidden');
  }
}

function checkPassword(e) {
  const passwordElement = e.target;
  const password = passwordElement.value;
  const errorMsg = passwordElement.nextSibling;
  const lengthMsg = 'Must be 8 characters long.';
  const symbolMsg = ' Must contain at least 1 symbol.';
  const uppercaseMsg = ' Must contain at least 1 uppercase letter.';
  const symbolRegEx = /[!@#$%^&*()_+|~\-=`{}[\]:";'<>?,.]/;
  const uppercaseRegEx = /[A-Z]/;
  let isValid = true;
  showError(passwordElement, 'Please meet the password requirements');
  if (password.length < 8) {
    if (!errorMsg.textContent.includes(lengthMsg)) {
      errorMsg.textContent += lengthMsg;
    }
    isValid = false;
  } else {
    errorMsg.textContent = errorMsg.textContent.replace(lengthMsg, '');
  }
  if (!symbolRegEx.test(password)) {
    if (!errorMsg.textContent.includes(symbolMsg)) {
      errorMsg.textContent += symbolMsg;
    }
    isValid = false;
  } else {
    errorMsg.textContent = errorMsg.textContent.replace(symbolMsg, '');
  }
  if (!uppercaseRegEx.test(password)) {
    if (!errorMsg.textContent.includes(uppercaseMsg)) {
      errorMsg.textContent += uppercaseMsg;
    }
    isValid = false;
  } else {
    errorMsg.textContent = errorMsg.textContent.replace(uppercaseMsg, '');
  }
  console.log(isValid);
  if (isValid) {
    console.log('run');
    hideError(passwordElement);
  }
}

const cfmPassword = document.getElementById('cfm-password');
const passwordInput = document.getElementById('password');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone-number');
const submitBtn = document.querySelector('#submit-btn');

const passwordRegEx = /[]{8,}/;
const nameRegEx = /[^a-zA-Z]+/;
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegEx = /\d{8}|\d{4} \d{4}/;

function checkCfmPassword() {
  handleError(
    cfmPassword.value !== passwordInput.value,
    cfmPassword,
    'Passwords do not match.'
  );
}

cfmPassword.addEventListener('input', checkCfmPassword);
passwordInput.addEventListener('input', checkCfmPassword);
passwordInput.addEventListener('input', checkPassword);

firstName.addEventListener('input', () => {
  handleError(
    nameRegEx.test(firstName.value),
    firstName,
    'Only letters are accepted.'
  );
});

lastName.addEventListener('input', () => {
  handleError(
    nameRegEx.test(lastName.value),
    lastName,
    'Only letters are accepted.'
  );
});

emailInput.addEventListener('input', () => {
  handleError(
    !emailRegEx.test(emailInput.value),
    emailInput,
    'Email is not valid'
  );
});

phoneInput.addEventListener('input', () => {
  handleError(
    !phoneRegEx.test(phoneInput.value),
    phoneInput,
    'Phone Number is not valid'
  );
});

submitBtn.addEventListener('click', (e) => {
  if (!document.forms['details'].reportValidity()) {
    e.preventDefault();
  }
});
