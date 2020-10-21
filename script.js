// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_+";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// series of prompts used for users to choose password length and character types to include
function writePassword() {

  // Character length validation
    var length = prompt("Choose character length between 8 and 128");
  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters in length!");
    var length = prompt("Choose character length between 8 and 128");
    var passwordLength = alert("you have chosen a character length of:" + length);
  };
  
  if (length >= 8 && length <= 128) {
    // Prompts choice of characters to use
    var numberChosen = confirm("Use numbers?");
    var lowerChosen = confirm("Use lower case letters?");
    var upperChosen = confirm("Use upper case letters?");
    var specialChosen = confirm("Use special characters?");
};

// If no option is chosen. Validates at least one choice
if (numberChosen && lowerChosen && upperChosen && specialChosen === false) {
    var chosen = alert("Must choose at least one option");
}
// If all four are chosen
else if (numberChosen && lowerChosen && upperChosen && specialChosen === true) {
  chosen = numbers + lowerCase + upperCase + special;
}
// When 3 different options are picked
// Numbers, lower case, and upper case are chosen
else if (numberChosen && lowerChosen && upperChosen === true) {
  chosen = numbers + lowerCase + upperCase;
}
// Lower case, upper case, and special characters are chosen
else if (lowerChosen && upperChosen && specialChosen === true) {
  chosen = lowerCase + upperCase + special;
}
// Numbers, upper case, and special characters are chosen
else if (numberChosen && upperChosen && specialChosen === true) {
  chosen = numbers + upperCase + special;
} 
// Numbers, lower case, and special characters are chosen
else if (numberChosen && lowerChosen && specialChosen === true) {
  chosen = numbers + lowerCase + special;
}
// When only 2 different options are picked
// Numbers and lower case chosen
else if (numberChosen && lowerChosen === true) {
  chosen = numbers + lowerCase;
}
// Numbers and upper case chosen
else if (numberChosen && upperChosen === true) {
  chosen = numbers + upperCase;
}
// Numbers and special characters chosen
else if (numberChosen && specialChosen === true) {
  chosen = numbers + special;
}
// Lower and upper case chosen
else if (lowerChosen && upperChosen === true) {
  chosen = lowerCase + upperCase;
}
// Lower and special characters chosen
else if (lowerChosen && specialChosen === true) {
  chosen = lowerCase + special;
}
// Upper Case and special characters chosen
else if (upperChosen && specialChosen === true) {
  chosen = upperCase + special;
}
// When only 1 option is picked
// Numbers chosen
else if (numberChosen === true) {
  chosen = numbers;
}
// Lower case chosen
else if (lowerChosen === true) {
  chosen = lowerCase;
}
// Upper case chosen
else if (upperChosen === true) {
  chosen = upperCase;
}
// Special characters chosen
else if (specialChosen === true) {
  chosen = special;
}
// Placeholder for event that there is a bug with user input
else {
  alert("Oops how did you even get here?");
};
};