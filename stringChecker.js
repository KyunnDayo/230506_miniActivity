function login(username, password) {
  //Check if the arguments passed are strings
  if (typeof username === "string" && typeof password === "string") {
    console.log("Both arguments are strings.");
    
    //Check if the username is at least 8 characters long
    if (username.length < 8) {
      console.log("Username is too short.");
      //username being too short
    } 
    // Check if the password is at least 8 characters long
    else if (password.length < 8) {
      console.log("Password is too short.");
    //password being too short
    } 
    else {
      console.log("Credentials are valid.");
     
    }
  } else {
    console.log("Invalid arguments. Both username and password should be strings.");
   
  }
}

function getdata(){
  username = prompt("Enter UserName: ")
  password = prompt("Enter Password: ")
  login()

}

getdata()