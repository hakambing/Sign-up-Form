password = document.querySelector("#password");
cfmPassword = document.querySelector("#cfmPassword");
pwdValidation = document.querySelector("#pwdValidate");

function validatePassword(){
    pwdValidation.innerText = password.value == cfmPassword.value ? 'Password Match' : 'Password does not match';
    if (password.value == cfmPassword.value){
        pwdValidation.style.color = '#046307'
        password.style.border = '3px solid #046307'
        cfmPassword.style.border = '3px solid #046307'

    } else {
        pwdValidation.style.color = '#FF0000'
        password.style.border = '3px solid #FF0000'
        cfmPassword.style.border = '3px solid #FF0000'
    }
}

password.addEventListener('keyup', () => {
    if (cfmPassword.value.length != 0) validatePassword();
})

cfmPassword.addEventListener('keyup', validatePassword)


