const showFormBtn = document.getElementById("show-popup-form");
const closeFormBtn = document.getElementById("close-popup-form");
const termsCheckmark = document.getElementById("terms-checkmark");
const termsCheckbox = document.getElementById("terms-checkbox");
const popup = document.querySelector(".popup");
const loginForm = document.querySelector(".login-form");
const formError = document.getElementById("form-error");

//toggle popup
showFormBtn.addEventListener("click", function() {
  popup.classList.toggle("popup_hidden");
  this.classList.toggle("btn-main_hidden");
});
closeFormBtn.addEventListener("click", () => {
  popup.classList.toggle("popup_hidden");
  showFormBtn.classList.toggle("btn-main_hidden");
  formError.classList.add("login-form__error_hidden");
});

//checkbox on change
termsCheckbox.addEventListener("change", () => {
  termsCheckmark.style.borderColor = "grey";
  termsCheckmark.style.backgroundColor = "unset";
});

//email validation
function validateEmail(email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
}

//show form error
function showFormError(message) {
  if (!formError.classList.contains("login-form__error_hidden")) {
    formError.classList.add("login-form__error_hidden");
  } else {
    formError.classList.remove("login-form__error_hidden");
    formError.innerHTML = message;
  }
  setTimeout(() => {
    formError.classList.remove("login-form__error_hidden");
    formError.innerHTML = message;
  }, 200);
}
//hide form error
formError.addEventListener("click", function() {
  this.classList.add("login-form__error_hidden");
});

//login form submit
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email-input");
  const password = document.getElementById("password-input");
  //validation
  if (email.value === "") {
    email.focus();
    showFormError("You need to enter e-mail address");
    return false;
  }
  if (!validateEmail(email.value)) {
    email.focus();
    showFormError("You need to enter valid e-mail address");
    return false;
  }
  if (password.value === "") {
    password.focus();
    showFormError("You need to enter password");
    return false;
  }
  if (password.value.length < 8) {
    password.focus();
    showFormError("Password need to be at least 8 characters long");
    return false;
  }
  if (!termsCheckbox.checked) {
    termsCheckmark.style.borderColor = "red";
    termsCheckmark.style.backgroundColor = "rgb(255, 180, 180)";
    showFormError("You need to agree to terms & conditions");
    return false;
  }

  //hide error
  formError.classList.add("login-form__error_hidden");

  //hide popup and show success message
  setTimeout(() => {
    popup.classList.toggle("popup_hidden");
    document
      .querySelector(".success-message")
      .classList.toggle("success-message_hidden");
  }, 3000);
});
