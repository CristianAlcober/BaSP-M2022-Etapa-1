window.onload = function () {
    var text = '';
    var charNum = false;
    var charLet = false;
    var form = document.querySelector("#form");

    function emailValidator() {
        var email = document.getElementById('e-mail');
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            email.style = "border-color: none";
            return true;
        } else {
            email.style = "border: solid 2px red; border-radius: 5px";
            text.concat('-Invalid email format');
            return false;
        }
    }

    function passwordValidator() {
        var pass = document.getElementById('pass');
        for (let i = 0; i <= pass.value.length; i++) {
            if (Number.isInteger(pass.value.substring((i-1),i))) {
                charNum = true;
                break;
            } else {
                charNum = false;
            }
        }
        
        for (let i = 0; i <= pass.value.length; i++) {
            if (isNaN(pass.value.substring((i-1),i))) {
                charLet = true;
                break;
            } else {
                charLet = false;
            }
        }

        if (pass.value.length >= 8 && charNum && charLet) {
            return true;
        } else {
            return false;
            text.concat('\n' + '-Invalid password format')
        }
    }

    function fillForm(e) {
        if (passwordValidator() && emailValidator()) {
            alert('You have logged in successfully!');
        } else {
            e.preventDefault();
            alert('The next fields have not been validated: \n' + text);
        }
    }

    function focusFieldset(id) {
        id.style = "border-color: none";
    }

    function blurFieldsetEmail(id) {
        if (emailValidator() == false) {
            id.style = "border: solid 4px red";
        } else {
            id.style = "border-color: none";
        }
    }

    function blurFieldsetPass(id) {
        if (passwordValidator() == false) {
            id.style = "border: solid 4px red";
        } {
            id.style = "border-color: none";
        }
    }

    form.addEventListener("continue", fillForm);
    form.addEventListener("#e-mail".onblur, blurFieldsetEmail("#email"));
    form.addEventListener("#pass".onblur, blurFieldsetPass("#pass"));
    form.addEventListener("#e-mail".onfocus,focusFieldset("#e-mail"));
    form.addEventListener("#pass".onfocus,focusFieldset("#pass"));
    
}