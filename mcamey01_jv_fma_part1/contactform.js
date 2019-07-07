// Getting values from contact form
var fname = document.contact.fname.value;
var lname = document.contact.lname.value;
var title = document.contact.title.value;
var han = document.contact.han.value;
var email = document.contact.email.value;
var phone = document.contact.phone.value;

function bindings() {           
    document.getElementById("submitBtn").onclick = displayResults;
}

function displayResults(){
    inputFnameValue = validateFname(fname);
    inputEmailValue = validateEmail(email);
    inputPhoneValue = validatePhone(phone);
}


function validateFname(name){
    var alphachar = /-[a-zA-Z]/;
    if(name=="" && !name.match(alphachar) && isNaN(name)  ){
        alert("Invalid Name format");
    }
}

function validateEmail(mail) {
    var emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailVal.test(mail)){
        alert("Good!");
        return (true)
    }else{
        alert("You have entered an invalid email address!")
        return (false)
    }
}

function validatePhone(tel){
    var numericchar = /^[0-9]+$/;
    var telSize = tel.length
    if(name=="" && !name.match(numericchar) && isNaN(name)  ){
        alert("Invalid Name format");
    }
}

window.onload = bindings;



// function getInputValue(name){
//     var elem = document.contact.name.value;
//     alert('Invalid Name format', elem);
     
//  }

 
