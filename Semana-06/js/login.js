window.onload = function () {
    var validEmail = false;
    var validPass = false;
    var text = '';
    var charNum = false;
    var charLet = false;
    var form = document.querySelector("#form");


    function emailValidator() {
        var email = document.getElementById('e-mail');
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            email.style = "border-color: none";
            validEmail = true;
        } else {
            email.style = "border: solid 2px red; border-radius: 5px";
            text.concat('-Invalid email format');
            validEmail = false;
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
            validPass = true;
        } else {
            validPass = false;
            text.concat('\n' + '-Invalid password format')
        }
    }

    function fillForm(e) {
        if (validPass && validEmail) {
            alert('You have logged in successfully!');
        } else {
            e.preventDefault();
            alert('The next fields have not been validated: \n' + text);
        }
    }

    function focusFieldset(id) {
        id.style = "border-color: none";
    }

    function blurFieldset(id) {
        
        
        id.style = "border: solid 4px red";
    }

    form.addEventListener("continue", fillForm)


}