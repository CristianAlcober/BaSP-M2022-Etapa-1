window.onload = function () {
    var text = '';
    var charNum = false;
    var charLet = false;
    var form = document.querySelector("#form");
    new Array = Alphabet["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    function emailValidator() {
        var email = document.getElementById('e-mail');
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            return true;
        } else {
            text.concat('-Invalid email format');
            return false;
        }
    }

    function passwordValidator() {
        var charCounter = 0;
        var numCounter = 0;
        var falseNum = 0;
        var falseChar = 0;
        var weirdCounter = 0;
        var pass = document.getElementById('pass');

        for (let i = 0; i <= pass.value.length; i++) {
            if (Number.isInteger(pass.value.substring((i-1),i))) {
                numCounter ++;
            } else {
                falseNum ++;
            }
        }
        
        for (let i = 0; i <= pass.value.length; i++) {
            if (isNaN(pass.value.substring((i-1),i))) {
                if (Alphabet.indexOf(pass.value.substring((i-1),i)) >= 0) {
                    charCounter ++;
                } else {
                    weirdCounter ++;
                }
            } else {
                falseChar ++;
            }
        }

        if (falseNum == charCounter && weirdCounter == 0) {
            charLet = true;
        } else {
            charLet = false;
        }

        if (falseChar == numCounter && weirdCounter == 0) {
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

    function fillForm(e) {
        if (passwordValidator() && emailValidator()) {
            alert('You have logged in successfully!' + ' \n E-Mail: ' + email.value + ' \n Password: ' + pass.value);
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