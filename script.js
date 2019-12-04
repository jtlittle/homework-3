
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var copyBtn = document.querySelector("#copy");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var lowercaseInput = document.getElementById("lowerCheck");
var uppercaseInput = document.getElementById("capitalCheck");
var punctuationInput = document.getElementById("symbolCheck");
var numbersInput = document.getElementById("numbersCheck");
var lengthInput = document.getElementById("length");
var passwordField = document.getElementById("password");
var generateBtn = document.getElementById("generate");
var plength;
var userPassword;
var passwordCharSet;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (punctuationInput.checked) {
    passwordCharSet += punctuation;
  }
  if (numbersInput.checked) {
    passwordCharSet += numbers;
  }
  plength = Number(lengthInput.value);

  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
}

    // return Math.random().toString(36).slice


function copyToClipboard() {

  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
