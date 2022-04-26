window.onload = function () {
    //          VARIABLES            //
    var text = '';
    var charNum = false;
    var charLet = false;
    var email = document.getElementById('e-mail');
    var pass = document.getElementById('pass');
    var iPass = document.getElementById('input-p');
    var iEmail = document.getElementById('input-e');
    var submit = document.getElementById('continue');

    //          E-MAIL VALIDATOR            //
    function emailValidator() {
        if (email.value == '') {
            text.concat('-E-mail fieldset is empty');
            return false;
        }
        
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            return true;
        } else {
            text.concat('-Invalid email format');
            return false;
        }
    }

    //          PASSWORD VALIDATOR            //
    function passwordValidator() {
        var charCounter = 0;
        var numCounter = 0;
        var falseNum = 0;
        var falseChar = 0;

        if (pass.value == '') {
            text.concat('-Password fieldset is empty');
            return false;
        }

        for (let i = 0; i <= pass.value.length; i++) {
            if (Number.isInteger(pass.value.substring((i-1),i))) {
                numCounter += 1;
                console.log(numCounter);
            } else {
                falseNum += 1;
            }
        }
        
        for (let i = 0; i <= pass.value.length; i++) {
            if (Number.isNaN(pass.value.substring((i-1),i))) {
                charCounter += 1;
                console.log(charCounter);
            } else {
                falseChar += 1;
            }
        }

        if (falseNum == charCounter) {
            charLet = true;
        } else {
            charLet = false;
        }

        if (falseChar == numCounter) {
            charNum = true;
        } else {
            charNum = false;
        }

        if (pass.value.length >= 8 && charNum && charLet) {
            return true;
        } else {
            text.concat('\n' + '-Invalid password format')
            return false;
        }
    }

    //          SUBMIT            //
    function fillForm() {
        if (passwordValidator() && emailValidator()) {
            alert('You have logged in successfully!' + ' \n E-Mail: ' + email.value + ' \n Password: ' + pass.value);
        } else {
            alert('The next fields have not been validated: \n' + text);
        }
    }

    //          PASSWORD FOCUS            //
    function focusFieldsetPass() {
        pass.classList.remove("error");
        iPass.classList.remove("in-error");
    }

    //          E-MAIL FOCUS            //
    function focusFieldsetEmail() {
        email.classList.remove("error");
        iEmail.classList.remove("in-error");
    }

    //          E-MAIL BLUR            //
    function blurFieldsetEmail() {
        if (emailValidator()) {
            email.classList.remove("error");
            iEmail.classList.remove("in-error");
        } else {
            email.classList.add("error");
            iEmail.classList.add("in-error");
            
        }
    }
    

    //          PASSWORD BLUR            //
    function blurFieldsetPass() {
        if (passwordValidator()) {
            pass.classList.remove("error");
            iPass.classList.remove("in-error");
        } else {
            pass.classList.add("error");
            iPass.classList.add("in-error");
        }
    }

    //          EVENT LISTENERS            //
    email.addEventListener("blur", blurFieldsetEmail);
    email.addEventListener("focus", focusFieldsetEmail);
    pass.addEventListener("blur", blurFieldsetPass);
    pass.addEventListener("focus", focusFieldsetPass);
    submit.addEventListener("click", fillForm());

}