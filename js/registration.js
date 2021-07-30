const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

form .addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();


    // Überprüfuung für "username"
    // Erlaubte Zeichen in "username".
    var letters = /^[A-Za-z]+$/;
    if(usernameValue === ""){setErrorFor(username, "Das Feld darf nicht leer sein!");}
    else if(!(usernameValue.match(letters))){setErrorFor(username, "Bitte nur Buchstaben!");}
    else{setSuccessFor(username);}

    // Überprüfung für "email"
    let emailFormat =  /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9-.]+$/;
    if(emailValue.length === 0 || emailValue.length < 6){setErrorFor(email, "Deine E-Mail Adresse benötigt mindestens 6 Zeichen");}
    else if(!(emailValue.match(emailFormat))){setErrorFor(email, "Ungültiges Format!");}
    else{setSuccessFor(email);}

    // Überprüfung für "password"
    let passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    if(passwordValue.length < 8){setErrorFor(password, "Die Mindestlänge für dein Passwort, beträgt 8 Zeichen.")}
    else if(!(passwordValue.match(passwordFormat))){setErorFor(password, "Passwortanforderung min. 1x (a-z) 1x (A-Z) 1x (0-9)");}
    else{setSuccessFor(password);}

    // Überprüfung für "confirmPassword"
    if(passwordValue != passwordConfirmValue || passwordConfirmValue.length === 0){setErrorFor(passwordConfirm, "Deine Passwörter stimmen nicht überein!");}
    else{setSuccessFor(passwordConfirm);}
    
}

function setErrorFor(input, message) {
    const inputbuttons = input.parentElement;
    const small = inputbuttons.querySelector('small');
    inputbuttons.className = 'input-buttons error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const inputbuttons = input.parentElement;
	inputbuttons.className = 'input-buttons success';
}
