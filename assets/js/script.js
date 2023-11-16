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
// function writePassword();


//  var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index];

function generatePassword() {
  //your code goes here...
let charTotal = []

  let charSets = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    specialChars: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  }

  let upperCase = window.confirm("include uppercase letters?")
  if (upperCase) {
    charTotal = charSets.upperCase;
  }

  let lowerCase = window.confirm("include lowercase letters?")
  if (lowerCase) {
    charTotal += charSets.lowerCase;
  }

  let numbers = window.confirm("include numbers?")
  if (numbers) {
    charSets = charSets.concat(numeric);
  }

  let specialChars = window.confirm("include special characters?")
  if (specialChars) {
    charSets = charSets.concat(specialChars);
  }

  var passLength = window.prompt("Choose a password length between 8 and 128");

  var index = Math.floor(Math.random() * charSets.length);


  if (passLength < 8 || passLength > 128) {
    alert("You must choose a number between 8 and 128!");
    window.open("index.html");
  }

  passLength = window.prompt("which character types would you like to include?");

}