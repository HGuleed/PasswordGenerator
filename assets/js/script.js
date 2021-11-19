// VARIABLES
var passwordText = document.querySelector("#password");
var numb = "0,1,2,3,4,5,6,7,8,9";
var lowCas = "abcdefghijklmnopqrstuvwxyz";
var uppCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var speChar = "!@#$%^&*()";
var password = (" ");
  var allValue = (" "); 
// Assignment code here

debugger;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){
 

  var passwordStarter = window.alert("You will be given a series of prompts to customize your password.");

  var passLength = window.prompt( "How long would you like your password?", "Pick a number between 8 and 128");


  if ( passLength >= 8 && isNaN(passLength)===true && passLength <= 128) {
    alert("Password must be at least 8 characters but no greater than 128 characters.");
    passLength = window.prompt( "How long would you like your password?", "Pick a number between 8 and 128");
  }
  
  // var numbers = window.confirm("Do you want to include numberical values?");
  // var upCase = window.confirm( "Do you want to include uppercase letters?");
  // var lowCase = window.confirm("Do you want to include lowercase letters?");
  // var special = window.confirm("DO you want to include special characters?");
};




// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


// }

function generatePassword ()

/Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
