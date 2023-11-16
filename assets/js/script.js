// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  //your code goes here...
  let charTotal = []

  let charSets = {
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ],
    specialChars: [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  }

  let criteria = {
    isUppercase: false,
    isLowercase: false,
    isNumbers: false,
    isSpecial: false,
  }

  function checkCriteria(charSets, criteria) {
  
    window.alert("Please choose at least 1 of the following criteria for your password. Click okay for yes and cancel for no.");
   
    criteria.isUppercase = window.confirm("Include uppercase letters?")
    if (criteria.isUppercase) {
      charTotal += charSets.upperCase;
    }
  
    criteria.isLowercase = window.confirm("Include lowercase letters?")
    if (criteria.isLowercase) {
      charTotal += charSets.lowerCase;
    }
  
    criteria.isNumbers = window.confirm("Include numbers?")
    if (criteria.isNumbers) {
      charTotal += charSets.numbers;
    }
  
    criteria.isSpecial = window.confirm("Include special characters?")
    if (criteria.isSpecial) {
      charTotal += charSets.specialChars;
    }
  
    let passLength = window.prompt("Choose a password length between 8 and 128");
  
    if (passLength < 8 || passLength > 128) {
      alert("You must choose a number between 8 and 128!");
      window.open("index.html");
    }
  
    // return;
  }
  password = ""
  for (let i = 0; i < charTotal.Length; i++) {
    password += charTotal[i](Math.floor(Math.random() * "charTotal"));
  }
console.log(checkCriteria);
  
  // var index =  * charTotal.length);

  let totalCritieriaList = checkCriteria(charSets, criteria);
  



  
  if (charTotal.length == 0)
  {
    alert("You must select at least 1 criteria!")
    return;
  }

  


















 

  
}