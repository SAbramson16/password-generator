// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var  passLength = window.prompt("Choose a password length between 8 and 128");
console.log(passLength);

if (passLength <8 || passLength >128) {
  alert("You must choose a number between 8 and 128!");
  window.open("index.html");
}

passLength = window.prompt("which character types would you like to include?");



function generatePassword(){
  //your code goes here...
}

