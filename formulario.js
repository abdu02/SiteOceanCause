const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const data = document.getElementById('data');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const email2Value = email2.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const dataValue = data.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Não pode estar em branco');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'E-mail não informado');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Não é um email válido');
	} else {
		setSuccessFor(email);
	}

	if(email2Value === '') {
		setErrorFor(email2, 'Não pode estar em branco');
	} else if(emailValue !== email2Value) {
		setErrorFor(email2, 'email não combina');
	} else{
		setSuccessFor(email2);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Senha não informada');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Não pode estar em branco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'senhas não combinam');
	} else{
		setSuccessFor(password2);
	}

	if(dataValue === '') {
		setErrorFor(data, 'Não pode estar em branco');
	} else {
		setSuccessFor(data);
	}
}

/* função para checar se está certo os dados de input ou não*/
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}