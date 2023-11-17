// Assignment Code - MAIN START
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//this method uses the charSets object and a criteria object to select the criteria based on the users choices. 
//this method returns a list made of all the user selected criteria lists.
function checkCriteria(charSets, criteria) {
  let charTotal = [];
  
  window.alert("Please choose at least 1 of the following criteria for your password.");
 
  criteria.isUppercase = window.confirm("Include uppercase letters?");
  if (criteria.isUppercase) {
    //used console.log for debugging
    // console.log("upper: " + charSets.upperCase);
    charTotal = charTotal.concat(charSets.upperCase);
  }

  criteria.isLowercase = window.confirm("Include lowercase letters?");
  if (criteria.isLowercase) {
    //used console.log for debugging
    // console.log("lower: " + charSets.lowerCase);
    charTotal = charTotal.concat(charSets.lowerCase);
  }

  criteria.isNumbers = window.confirm("Include numbers?");
  if (criteria.isNumbers) {
    //used console.log for debugging
    // console.log("num: " + charSets.numbers); 
    charTotal = charTotal.concat(charSets.numbers);
  }

  criteria.isSpecial = window.confirm("Include special characters?");
  if (criteria.isSpecial) {
    //used console.log for debugging
    // console.log("special: " + charSets.specialChars);
    charTotal = charTotal.concat(charSets.specialChars);
  }

  criteria.passLength = window.prompt("Choose a password length between 8 and 128");

  if (criteria.passLength < 8 || criteria.passLength > 128) {
    alert("You must choose a number between 8 and 128!");
    charTotal = [];
  }

   return charTotal;
}

//this method use the criteriaList and the password length to generate a random password.
function generate(criteriaList, passLength) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let random_index = Math.floor(Math.random() * criteriaList.length)
    password += criteriaList[random_index];
  }
  return password;
}

// this method will generate a password based on a specific user selected criteria list. this method will return the generated password.
function generatePassword() {
  // this function created the charSets and criteria objects with keys and values.
  let charSets = {
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    specialChars: [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"],
  }

  let criteria = {
    isUppercase: false,
    isLowercase: false,
    isNumbers: false,
    isSpecial: false,
    passLength: 0
  }

  // made totalCriteriaList by passing charSets and criteria through checkCriteria function, which uses charSets to make a random list.
  let totalCriteriaList = checkCriteria(charSets, criteria);
  // if the user doesn't select any criteria, (the totalCriteriaList is empty) they will be brought back to the beginning. 
  if (totalCriteriaList.length == 0)
  {
    alert("You must select at least 1 criteria and password length must be between 8 and 128!");
    window.open("index.html");
  }

  //this function uses the totalCriteriaList and the password length chosen and generates the password.
  let password = generate(totalCriteriaList, criteria.passLength);
  return password;
}