const form = document.getElementById("registration-form");
const successMessage = document.querySelector("#success");
const errorMessage = document.getElementById('error')
var submitbtn = document.querySelector('#submitbtn');
  var errorEmail = document.getElementById('error-email')
   var errorPass = document.getElementById('error-pass')
   var errorPhone = document.getElementById('error-phone')


console.log(submitbtn);

function mailValidationHandler() {
  var email = document.getElementById("email").value;
  var emailRegex =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  let mailComp = emailRegex.test(email);
  if (!mailComp) {
    console.log('email not valid')

      errorEmail.innerHTML = "Please enter a valid email address."
      
  } else {
   
      errorEmail.innerHTML = ""
      
  }
  disabledEnabled()
}

function passwordValidationHandler() {
  var password = document.getElementById("password").value;
  var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/
 
  console.log(password)

  if (!passwordRegex.test(password)) {
   
      errorPass.innerHTML = "Password must contain at least 8 characters, including at least one number, one lowercase letter, one special character, and one uppercase letter."
     
  } else {
   
      errorPass.innerHTML = ""
       

  }
  disabledEnabled()
}

function phoneValidationHandler() {
  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phone)) {
   
      errorPhone.innerHTML = "Please enter a valid 10-digit phone number."
    
  } else {
   
      errorPhone.innerHTML = ""
       
  }
  disabledEnabled()
}

function disabledEnabled(){
if(errorEmail.innerHTML || errorPass.innerHTML || errorPhone.innerHTML){
  submitbtn.setAttribute('disabled', true);
  successMessage.innerHTML = "";
}else{
  submitbtn.removeAttribute('disabled');
}
}

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      city === "" ||
      phone === ""
    ) {
  
        errorMessage.innerHTML = "Please fill out all fields."
  
      return;
    }

    errorMessage.innerHTML = "";

      successMessage.innerHTML = "Registration successful!!"
   
  });
