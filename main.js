const pswrd = document.getElementById("pswrd");
const toggleBtn = document.getElementById("toggle_btn");

const lowerCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const digit = document.getElementById("number");
const specialChar = document.getElementById("special");
const minLength = document.getElementById("length");

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  // lower
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
  }
  // upper
  if (upper.test(data)) {
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
  }
  // number
  if (number.test(data)) {
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
  }
  // special
  if (special.test(data)) {
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
  }
  // length
  if (length.test(data)) {
    minLength.classList.add("valid");
  } else {
    minLength.classList.remove("valid");
  }
}

// show hide password
toggleBtn.onclick = function () {
  if (pswrd.type === "password") {
    pswrd.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    pswrd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};
