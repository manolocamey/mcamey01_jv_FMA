window.onload = bindings;

function bindings() {
    document.getElementById('submitBtn').onclick = submitForm;
    document.getElementById('LastName').onfocus = clearError;
    document.getElementById('LastName').onblur = checkLastName;
    document.getElementById('Title').onfocus = clearError;
    document.getElementById('Title').onblur = checkTitle;
    document.getElementById('Han').onfocus = clearError;
    document.getElementById('Han').onblur = checkHan;
    document.getElementById('Email').onfocus = clearError;
    document.getElementById('Email').onblur = checkEmail;
    document.getElementById('Phone').onfocus = clearError;
    document.getElementById('Phone').onblur = checkPhone;
    checkFirstName();
    toolTipDisplay();
}

function submitForm(){
    var fnameCheck = checkFirstName();
    var lnameCheck = checkLastName();
    var titleCheck = checkTitle();
    var hanCheck = checkHan();
    var emailCheck = checkEmail();
    var phoneCheck = checkPhone();

	if(fnameCheck == false || lnameCheck == false || titleCheck == false || hanCheck == false || emailCheck == false || phoneCheck == false ){
		document.getElementById('onclickError').innerHTML = " * There are errors in the form";
		return false;
    }
}

// Field Validation
function checkFirstName(){
    var valid = true;
    var InputDefault = document.getElementById("FirstName");
    var defaultTxt = " Enter First Name";
    InputDefault.value = defaultTxt;
    InputDefault.style.color = "#cccccc";
    InputDefault.style.fontStyle = "italic";
    InputDefault.onfocus = function() {
        if (this.value === defaultTxt) {
          this.value = "";
          this.style.color = "#000";
          this.style.fontStyle = "normal";
          document.getElementById('FirstNameError').innerHTML = "&nbsp;";
        }
    }
    InputDefault.onblur = function() {
        if (this.value=="") {
          this.value = defaultTxt;
          this.style.color = "#cccccc";
          this.style.fontStyle = "italic";
          document.getElementById('FirstNameError').innerHTML = ' * You must enter a valid First Name';
		  valid = false;
        }
        return valid;
    } 
}

function checkLastName(){
	var valid = true;
    var lnameInput = document.getElementById("LastName");
	if(lnameInput.value==""){
		document.getElementById('LastNameError').innerHTML = ' * You must enter a valid Last Name';
		valid = false;
	}
    return valid;
}

// Title Validator: check if an option has been selected.
function checkTitle(){
	var valid = true;
    var titleInput = document.getElementById("Title");
	if(titleInput.value==0){
		document.getElementById('TitleError').innerHTML = ' * You must select one option';
		valid = false;
	}
    return valid;
}

// Number must be entered in the form of a six-digit integer prefixed with the letters ZHA (e.g. ZHA346783 or zha346783).
function checkHan(){
	var valid = true;
    var hanInput = document.getElementById("Han").value;
    var hanRegEx = /^((ZHA)|(zha))+[0-9]{6}$/;
	if((hanInput=="") || (!hanRegEx.test(hanInput))){
		document.getElementById('HanError').innerHTML = ' * You must enter a valid Health Authority Number and Format (e.g. ZHA346783 or zha346783)';
		valid = false;
	}
    return valid;
}

// Email Validator: check email format.
function checkEmail(){
	var valid = true;
    var emailInput = document.getElementById("Email").value;
    var emailRegEx = /^\w+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,}$/;
	if((emailInput=="") || (!emailRegEx.test( emailInput)) ){
		document.getElementById('EmailError').innerHTML = ' * You must enter a valid email address';
		valid = false;
	}
    return valid;
}

// Phone Number Validator : contains only numbers, not letters and has 11 digits (no spaces)
function checkPhone(){
    var valid = true;
    var phoneRegEx = /^\d{11}$/;
    var phoneInput = document.getElementById("Phone").value;
	if((phoneInput=="") || (!phoneRegEx.test(phoneInput))){
		document.getElementById('PhoneError').innerHTML = ' * You must enter a valid telephone number (11 digits)';
		valid = false;
	}
    return valid;
}

function clearError(){
	document.getElementById(this.id + 'Error').innerHTML = "&nbsp;";
	document.getElementById('onclickError').innerHTML = "&nbsp;";
}

function toolTipDisplay() {           
    document.getElementById('mark').onmouseover = function() {
    var toolTip = document.getElementById('tooltip');
    toolTip.style.display='block';
    } 	    
    document.getElementById('mark').onmouseout = function() {
    var toolTip = document.getElementById('tooltip');
    toolTip.style.display='none';
    } 	
  }	



