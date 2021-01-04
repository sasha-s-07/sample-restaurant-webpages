window.onload = function (){

var formHandle = document.forms.form_event;

formHandle.onsubmit = processForm;

function processForm(){
var fnameValue = formHandle.f_name.value;
var lnameValue = formHandle.l_name.value;
var emailValue = formHandle.c_email.value;
var phoneValue = formHandle.c_phone.value;
var guestValue = formHandle.guests.value;
var messageInput = formHandle.message.value;

var fnameRegex = /^[A-Z]+-?$/i; //how to add hyphen
if((!fnameRegex.test(fnameValue))){
  document.getElementById("inf_name").style.background = "grey"; //GET HELPER <span>
  document.getElementById("inf_name").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).
  return false;

}

var lnameRegex = /^[A-Z]+-?$/i; //how to add hyphen
if((!lnameRegex.test(lnameValue))){
  document.getElementById("inl_name").style.background = "grey"; //GET HELPER <span>
  document.getElementById("inl_name").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).
  return false;

}

var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if((!emailRegex.test(emailValue))){
  document.getElementById("inc_email").style.background = "grey"; //GET HELPER <span>
  document.getElementById("inc_email").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).
  return false;

}

var phoneRegex = /^\d\d\d-?\d\d\d-?\d\d\d\d$/;

if((!phoneRegex.test(phoneValue))){
  document.getElementById("in_phone").style.background = "grey"; //GET HELPER <span>
  document.getElementById("in_phone").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).
  return false;

}

if(guestValue >100 || guestValue === null || guestValue=== "" ){
  document.getElementById("in_guests").style.background = "grey"; //GET HELPER <span>
  document.getElementById("in_guests").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).

  return false;

}

if(messageInput === "" || messageInput === null){
  document.getElementById("in_message").style.background = "grey"; //GET HELPER <span>
  document.getElementById("in_message").focus(); //THIS METHOD PUTS THE FOCUS BACK ON THE ELEMENT (see below).
  return false;

}



document.getElementById("thanks_msg").style.display = "block";
formHandle.style.display = "none";
document.getElementById("thanksCustomer").innerHTML = fnameValue
document.getElementById("event-para").style.display = "none"
return false;


}

}
