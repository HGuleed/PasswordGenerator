//This is a random passowrd generator with prompts for criterias and a charater limit between 8-128

// // VARIABLES
// var passwordText = document.querySelector("#password");
// var generateBtn = document.querySelector("#generate");
// var numb = "0,1,2,3,4,5,6,7,8,9";
// var lowCas = "abcdefghijklmnopqrstuvwxyz";
// var uppCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var speChar = "!@#$%^&*()";

// var userSelections = " ";

// Assignment code here

//debugger;

// Our function to create all the criteria for password
function generatePassword() {
    // Prompt for password legnth
  
    var passLength = window.prompt(
      "How long would you like your password?", "(Please Pick a number between 8 and 128)"
    );
  
    /* while (passLength <= 8 && !passLength = false&&  passLength >= 128) {
      alert(
        "Password must be at least 8 characters but no greater than 128 characters."
      );
      passLength = window.prompt(
        "How long would you like your password?",
        "Pick a number between 8 and 128"
      );
    }
  
    switch (lengthOf){
      case (lengthOf <=8 || isNaN(lengthOf) == false || lengthOf >= 128):
        window.alert("Passwords needs to be greater than 8 but less than.");
      case( lengthOf =< 8 || isNaN(lengthOf)== true || lengthOf >=128):*/
  
    var lengthOf = passLength.length;
  
    if (lengthOf < 8 || lengthOf > 128) {
      alert("Password must be greater than 8 but less than 128");
    } else if (lengthOf >= 8 && lengthOf <= 128) {
      alert("a");
      // var numbers = window.confirm(
      //   "Click okay if you want to include numberical values?"
      // );
      // var upCase = window.confirm(
      //   "Click okay if you want to include uppercase letters?"
      // );
      // var lowCase = window.confirm(
      //   "Click okay if you want to include lowercase letters?"
      // );
      // var special = window.confirm(
      //   "Click okay if you want to include special characters?"
      // );
      //   if ( numbers == null &)
    } else {
      alert("didnt work");
      // say: nah cant do whatever you just tried
    }
  }
  
  //Prompts for parameters of the password
  
  // var numbers = window.confirm(
  //   "Click okay if you want to include numberical values?"
  // );
  // var upCase = window.confirm(
  //   "Click okay if you want to include uppercase letters?"
  // );
  // var lowCase = window.confirm(
  //   "Click okay if you want to include lowercase letters?"
  // );
  // var special = window.confirm(
  //   "Click okay if you want to include special characters?"
  // );
  
  // const newLocal = false;
  // // Making sure one parameter was selected
  
  // while (
  //   numbers === false && upCase === false && lowCase === false &&
  //   special === false
  // ) {
  //   alert("You must choose at least one criteria.");
  //   var numbers = window.confirm(
  //     "Click okay if you want to include numberical values?"
  //   );
  //   var upCase = window.confirm(
  //     "Click okay if you want to include uppercase letters?"
  //   );
  //   var lowCase = window.confirm(
  //     "Click okay if you want to include lowercase letters?"
  //   );
  //   var special = window.confirm(
  //     "Click okay if you want to include special characters?"
  //   );
  // }
  
    var randomPassword = "";
    for (var x=0; x < passLength; x++) {
      randomPassword =  randomPassword =userSelections[Math.floor(Math.random() * userSelections.length)]
    }
  
  
  // // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
  
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  // }
  
  //  //The event listener for the click
  // generateBtn.addEventListener("click", writePassword);
  