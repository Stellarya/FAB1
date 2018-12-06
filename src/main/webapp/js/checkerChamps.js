/**
 * 
 */
function setAlertPhone(){
	var phone = document.getElementById("alertphone");
	var stylePhone = phone.style;
	stylePhone.visibility = "visible";
	if(checkPhone()){
		phone.className = "alert alert-success"
		phone.innerText = "Ok"
	}else{
		phone.className = "alert alert-danger"
		phone.innerText = "Veuillez renseigner un numéro de 10 chiffres"
	}
	
}
function setAlertPassword(){
	var password = document.getElementById("alertpassword");
	var stylePassword = password.style;
	stylePassword.visibility = "visible";
	if(checkPass()){
		password.className = "alert alert-success"
		password.innerText = "Ok"
	}else{
		password.className = "alert alert-danger"
		password.innerText = "Le mot de passe doit contenir minimum 5 caractères"
	}
}
function setAlertPasswordConfirm(){
	var passConf = document.getElementById("alertpasswordconfirm");
	var stylePasswordConf = passConf.style;
	stylePasswordConf.visibility = "visible";
	if(checkConfirm()){
		passConf.className = "alert alert-success"
		passConf.innerText = "Ok"
	}else{
		passConf.className = "alert alert-danger"
		passConf.innerText = "Veuillez confirmer le mdp correctement lol"
	}
}

function setAlertEmail(){
	var email = document.getElementById("alertmail");
	var styleEmail = email.style;
	styleEmail.visibility = "visible";
	if(checkEmail()){
		email.className = "alert alert-success"
		email.innerText = "Ok"
	}else{
		email.className = "alert alert-danger"
		email.innerText = "Veuillez renseigner un mail plus joli"
	}
}
function checkPhone() {
	if(document.getElementById("telephone").value.length != 10 ){
		return false;
	}
	return true;
}
function checkPass() {
	if(document.getElementById("password").value.length < 5 ){
		return false;
	}
	return true;
}
function checkConfirm() {
	if(document.getElementById("password").value != document.getElementById("passwordconfirm").value ){
		return false;
	}
	return true;
}

function checkEmail() {
	if(!validateEmail(document.getElementById("mail").value)){
		return false;
	}
	return true;
}
function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}