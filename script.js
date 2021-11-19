// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set avilable character options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lcases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// The generatePasscode function structure
function generatePassword(){
  //Ask user how many characters want to set
  var passcodeLength = window.prompt('How many characters do you want to have?');
  //Set the range of char from 8 to 128
  while (passcodeLength < 8 || passcodeLength > 128){
    window.alert('Passwords length should be [8, 128], please enter again!');
    window.prompt('How many characters do you want to have?');
  }
  //Show passcode length 
  window.alert('Passwords length confirmed: '+ passcodeLength);
  //Options of character types
  var lowercase = window.confirm('Do you want to use lowercase characters?');
  var uppercase= window.confirm('Do you want to use uppercase characters?');
  var numeric= window.confirm('Do you want to use numeric characters?');
  var specialCharacters= window.confirm('Do you want to use special characters?');

  //At least choose one type, or choose again
  while (lowercase===false && uppercase===false && numeric===false && specialCharacters===false){
      window.alert('You must choose at least one character type, please try again.')
      var lowercase = window.confirm('Do you want to use lowercase characters?');
      var uppercase= window.confirm('Do you want to use uppercase characters?');
      var numeric= window.confirm('Do you want to use numeric characters?');
      var specialCharacters= window.confirm('Do you want to use special characters?');
  }

  //Build an empty passcode array filled with selected types
  var passwordCharacters = []
  //4 types of characters, if any selected, copy all the characters to the empaty array above
  if (lowercase) {
    passwordCharacters = passwordCharacters.concat(lcases)
  }
  if (uppercase) {
    passwordCharacters = passwordCharacters.concat(ucases)
  }
  if (numeric) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }
  if (specialCharacters) {
    passwordCharacters = passwordCharacters.concat(specials)
  }
  console.log(passwordCharacters);

  //set a finalpasscode string, which is empaty now
  var finalPasscode= "";
  //use a for loop to iterate the passcode length times, randomly pick char from the array above
  //then be the final showed passcode
  for (let i=0; i<passcodeLength; i++){
      finalPasscode +=passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(finalPasscode);
  }
  return finalPasscode;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


