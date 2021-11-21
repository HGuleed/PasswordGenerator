//This is a random passowrd generator with prompts for criterias and a charater limit between 8-128

// VARIABLES
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var numb = "0123456789";
var lowCas = "abcdefghijklmnopqrstuvwxyz";
var uppCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speChar = "!@#$%^&*()";
var passLength = "";
var randomPass = "";

// Assignment code here

//debugger;

// Our function to create all the criteria for password
function generatePassword() {
  //debugger;
  // Prompt for password legnth
  //debugger;
  passLength = window.prompt(
    "How long would you like your password? (Please Pick a number between 8 and 128)"
  );

  var lengthOf = parseInt(passLength);

  if (Number.isNaN(passLength)) {
    alert("Password length must be a number");
    return null;
  }

  if (lengthOf < 8 || lengthOf > 128) {
    alert("Password must be greater than 8 but less than 128");
    return null;
  }

  var numbers = window.confirm(
    "Click OK if you want to include numberical values?"
  );

  var upCase = window.confirm(
    "Click OK if you want to include uppercase letters?"
  );

  var lowCase = window.confirm(
    "Click OK if you want to include lowercase letters?"
  );

  var special = window.confirm(
    "Click OK if you want to include special characters?"
  );

  if (
    numbers == false &&
    upCase == false &&
    lowCase == false &&
    special == false
  ) {
    alert("You must select at least one criteria.");
    return null;
  }

  var userSelections = {
    numbers: numbers,
    lowCase: lowCase,
    upCase: upCase,
    special: special,
    lengthOf: lengthOf,
  };
  return combinesSelection(userSelections);
}

function combinesSelection(options) {
  //debugger;

  if (options.numbers) {
    randomPass += numb;
  }
  if (options.lowCase) {
    randomPass += lowCas;
  }
  if (options.upCase) {
    randomPass += uppCas;
  }
  if (options.special) {
    randomPass += speChar;
  }

  var randomPassword = "";
  for (var x = 0; x < options.lengthOf; x++) {
    randomPassword =
      randomPassword +
      randomPass.charAt(Math.floor(Math.random() * randomPass.length));
  }
  return randomPassword;
}

//Prompts for parameters of the password

// const newLocal = false;
// // Making sure one parameter was selected

// Write password to the #password input

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//The event listener for the click
generateBtn.addEventListener("click", writePassword);
