/* Here goes your JS code */
//toggle popup
function togglePopup() {
  document.querySelector(".popup").classList.toggle("popup_hidden");
}
// toggle show form button
function toggleShowFromButton() {
  document
    .getElementById("show-popup-form")
    .classList.toggle("btn-main_hidden");
}
//function on terms checkbox change
function termsCheckboxChanged() {
  let termsCheckmark = document.getElementById("terms-checkmark");
  termsCheckmark.style.borderColor = "grey";
  termsCheckmark.style.backgroundColor = "unset";
}
//function on submit form
function loginFormSubmited(event) {
  var termsCheckbox = document.getElementById("terms-checkbox");
  event.preventDefault();
  if (!termsCheckbox.checked) {
    let termsCheckmark = document.getElementById("terms-checkmark");
    termsCheckmark.style.borderColor = "red";
    termsCheckmark.style.backgroundColor = "rgb(255, 180, 180)";
    return false;
  }
  setTimeout(() => {
    togglePopup();
  }, 3000);
}
