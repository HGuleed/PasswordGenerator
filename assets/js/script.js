//This is a random passowrd generator with prompts for criterias and a charater limit between 8-128

// // VARIABLES
// var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// var numb = "0,1,2,3,4,5,6,7,8,9";
// var lowCas = "abcdefghijklmnopqrstuvwxyz";
// var uppCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var speChar = "!@#$%^&*()";
var passLength = "";

// Assignment code here

//debugger;

// Our function to create all the criteria for password
function generatePassword() {
  // Prompt for password legnth

  passLength = window.prompt(
    "How long would you like your password? (Please Pick a number between 8 and 128)"
  );

  var lengthOf = parseInt(passLength);
  console.log(lengthOf);
  if (Number.isNaN(passLength)){
    alert("Password length must be a number")
    return null;
  }

  if (lengthOf < 8 || lengthOf > 128) {
    alert("Password must be greater than 8 but less than 128");
    return null;
  
  }  
  
  
    var numbers = window.confirm(
      "Click okay if you want to include numberical values?"
    );
   
  
  
    var upCase = window.confirm(
      "Click okay if you want to include uppercase letters?"
    );
  


  
    var lowCase = window.confirm(
    "Click okay if you want to include lowercase letters?"
  );
    

    var special = window.confirm(
    "Click okay if you want to include special characters?"
  );
    
  if ( numbers == false && upCase== false && lowCase== false && special== false) {
    alert( "You must select at least one criteria.");
    return null;
  }

  var userSelections = {
    numbers: numbers,
    lowCase: lowCase,
    upCase: upCase,
    special: special
  };

}

generateBtn.addEventListener("mouseup", generatePassword);

//Prompts for parameters of the password



// const newLocal = false;
// // Making sure one parameter was selected



  var randomPassword = "";
  for (var x=0; x < passLength; x++) {
    randomPassword =  randomPassword =userSelections[Math.floor(Math.random() * userSelections.length)]
  }


// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
*/

//  //The event listener for the click
// generateBtn.addEventListener("click", writePassword);
