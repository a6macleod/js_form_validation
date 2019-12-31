// onblur: check to see input is valid - if not highlight in red

// Email confirmation: check to see if it matches email on each key stroke

// Zipcode onfocus: check to see what is in country and apply the appropriate pattern
// country: changing country should clear the zipcode

// password: at least 8 characters; 1 of each capital (A-Z), lowercase (a-z); Digit (0-9)

const allInputs = document.querySelectorAll(".input-field");
const allEmail = document.querySelectorAll(`input[type="email"]`);
const email = document.querySelector("#email");
const confirmEmail = document.querySelector("#email-confirmation");
const emailDiv = document.querySelector(`div[class="email"]`);

function validityCheck() {
  if (this.checkValidity()) {
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
  }
}

function emailToUpperCase(inputField) {
  // console.log(this)
  // const inputField = this;
  const upperCaseEmail = inputField.value.toUpperCase();
  inputField.value = upperCaseEmail;
}

function confirmEmailErrorMessage(inputField) {
  removeConfirmEmailErrorMessage();
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("confirmEmailErrorMessage");
  errorMessage.innerHTML = "The email address entered does not match.";

  emailDiv.appendChild(errorMessage);
}

function removeConfirmEmailErrorMessage() {
  const errorMessage = document.querySelector(
    `p[class="confirmEmailErrorMessage"]`
  );
  if (errorMessage == null) {
    return
  } else {
    errorMessage.remove();
  }
}

function checkEmailMatch(inputField) {
  if (email.value != confirmEmail.value) {
    confirmEmail.value = "";
    confirmEmailErrorMessage();
    if (confirmEmail.classList.contains("invalid")){
      return
    } else {
      confirmEmail.classList.add("invalid");  
    }
  } else {
    removeConfirmEmailErrorMessage();
  }
}

allInputs.forEach(input => input.addEventListener("blur", validityCheck));
allEmail.forEach(input => input.addEventListener("blur", function () {
  const inputField = this;
  emailToUpperCase(inputField);
  if (email.value == "" || confirmEmail.value == "") {
    return
  } else {
    checkEmailMatch(inputField);
    }
  }
));

