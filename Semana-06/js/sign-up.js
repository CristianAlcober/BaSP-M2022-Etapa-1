window.onload = function () {
    var nameLong = false;
    var charLetters = false;
    var text = '';
    var textCorrect = '';
    var adSpace = 0;
    var adLong = false;
    var adNum = false;
    var adChar = false;
    var locationLong = false;
    var locationLetters = false;
    new Array = Alphabet["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u",
    "v","w","x","y","z"];

    function nameValidator() {
        var name = document.getElementById('f-name');

        if (name.value.length > 3 ) {
            nameLong = true;
        } else {
            nameLong = false;
            text.concat('\n -Invalid name length');
        }

        for (let i = 0; i < name.length; i++) {
            if (isNaN(name.value.substring((i-1),i))) {
                charLetters = true;
            } else {
                charLetters = false;
                text.concat('\n -Invalid name format');
                break;
            }
        }

        if (nameLong && charLetters) {
            textCorrect.concat('\n Name: ' + name.value);
            return true;
        } else {
            return false;
        }
    }

    function lastNameValidator() {
        var lastName = document.getElementById('l-name');

        if (lastName.value.length > 3 ) {
            nameLong = true;
        } else {
            nameLong = false;
            text.concat('\n -Invalid last name length');
        }

        for (let i = 0; i < lastName.length; i++) {
            if (isNaN(lastName.value.substring((i-1),i))) {
                charLetters = true;
            } else {
                charLetters = false;
                text.concat('\n -Invalid last name format');
                break;
            }
        }

        if (nameLong && charLetters) {
            textCorrect.concat('\n Last Name: ' + lastName.value);
            return true;
        } else {
            return false;
        }
    }

    function birthDateValidator() {
        var birth = document.getElementById('birth');

        if (birth.value.substring(6,9) <= 2004) {
            textCorrect.concat('\n DoB: ' + birth.value);
            return true;
        } else {
            text.concat('\n -Invalid birth date format. Minors are not allowed');
            return false;
        }
    }

    function dniValidator() {
        var dni = document.getElementById('dni');
        
        if (dni.value.length() == 7 || dni.value.length() == 8) {
            textCorrect.concat('\n DNI: ' + dni.value);
            return true;
        }  else {
            text.concat('\n -Invalid dni length');
            return false;
        }
    }

    function phoneValidator() {
        var phone = document.getElementById('phone');
        
        if (phone.value.length() == 10) {
            textCorrect.concat('\n Phone Number: ' + phone.value);
            return true;
        }  else {
            text.concat('\n -Invalid phone length');
            return false;
        }
    }

    function adressValidator() {
        var adress = document.getElementById('adress');

        if (adress.value.length >= 5) {
            adLong = true;
        } else {
            text.concat('\n -Invalid adress length');
            adLong = false;
        }

        for (let i = 0; i < adress.length; i++) {
            if (isNaN(adress.value.substring((i-1), i))) {
                adChar = true;
                break;
            } else {
                adChar = false;
            } 
        }

        if (adChar == false) {
            text.concat('\n -Invalid adress format');
        }

        for (let i = 0; i < adress.length; i++) {
            if (Number.isInteger(adress.value.substring((i-1), i))) {
                adNum = true;
                break;
            } else {
                adNum = false;
            } 
        }

        if (adNum == false) {
            text.concat('\n -There is not a numeration in the adress');
        }

        if (adress.value.indexOf(' ') >= 0) {
            adSpace = true;
        } else {
            text.concat('\n -There is not a separation in the adress');
            adSpace = false;
        }
        
        if (adLong && adChar && adNum && adSpace) {
            textCorrect.concat('\n Adress: ' + adress.value);
            return true;
        } else {
            return false;
        }
    }

    function locationValidator() {
        var location = document.getElementById('location');
        var counter = 0;

        if (location.value.length > 3 ) {
            locationLong = true;
        } else {
            locationLong = false;
            text.concat('\n -Invalid location length');
        }

        for (let i = 0; i < location.length; i++) {
            if (isNaN(location.value.substring((i-1),i))) {
                counter ++;
            } 

            if (counter == 3) {
                locationLetters = true;
            } else {
                locationLetters = false;
                text.concat('\n -Invalid location format');
            }
        }

        if (locationLong && locationLetters) {
            textCorrect.concat('\n Location: ' + location.value);
            return true;
        } else {
            return false;
        }
    }

    function zipCodeValidator() {
        var zipCode = document.getElementById('zip');
        if (zipCode.value.length == 4 || zipCode.value.length == 5 ) {
            textCorrect.concat('\n ZIP Code: ' + zipCode.value);
            return true;
        } else {
            return false;
        }
    }

    function emailValidator() {
        var email = document.getElementById('e-mail');
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            textCorrect.concat('\n E-Mail: ' + email.value);
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
            textCorrect.concat('\n Password: ' + pass.value);
            return true;
        } else {
            return false;
            text.concat('\n' + '-Invalid password format')
        }
    }

    function confirmPasswordValidator() {
        var passConfirmed = document.getElementById('c-pass');

        if (passConfirmed.value == pass.value && passConfirmed.value.length == pass.value.length) {
            return true;
        } else {
            text.concat('-Both passwords do not match');
            return false;
        }
    }

    function fillForm(e) {
        if (passwordValidator() && emailValidator() && nameValidator() && lastNameValidator() && dniValidator() && phoneValidator
         && confirmPasswordValidator() && zipCodeValidator() && locationValidator() && adressValidator() && birthDateValidator()) {
            
            alert('You have registered successfully!' + textCorrect);
        } else {
            e.preventDefault();
            alert('The next fields have not been validated: \n' + text);
        }
    }

    function focusFieldset(id) {
        id.style = "border-color: none";
    }

    function blurFieldset(id,boolean) {
        if (boolean) {
            id.style = "border: solid 4px red";
        } else {
            id.style = "border-color: none";
        }
    }

    form.addEventListener("continue", fillForm);
    form.addEventListener("e-mail".onblur, blurFieldset("email", emailValidator));
    form.addEventListener("pass".onblur, blurFieldset("pass", passwordValidator));
    form.addEventListener("f-name".onblur, blurFieldset("f-name", nameValidator));
    form.addEventListener("l-name".onblur, blurFieldset("l-name", lastNameValidator));
    form.addEventListener("dni".onblur, blurFieldset("dni", dniValidator));
    form.addEventListener("phone".onblur, blurFieldset("phone", phoneValidator));
    form.addEventListener("adress".onblur, blurFieldset("adress", adressValidator));
    form.addEventListener("location".onblur, blurFieldset("location", locationValidator));
    form.addEventListener("zip".onblur, blurFieldset("zip", zipCodeValidator));
    form.addEventListener("c-pass".onblur, blurFieldset("c-pass", confirmPasswordValidator));
    form.addEventListener("birth".onblur, blurFieldset("birth", birthDateValidator));

    form.addEventListener("e-mail".onfocus, focusFieldset("e-mail"));
    form.addEventListener("pass".onfocus, focusFieldset("pass"));
    form.addEventListener("f-name".onfocus, focusFieldset("f-name"));
    form.addEventListener("l-name".onfocus, focusFieldset("l-name"));
    form.addEventListener("dni".onfocus, focusFieldset("dni"));
    form.addEventListener("phone".onfocus, focusFieldset("phone"));
    form.addEventListener("adress".onfocus, focusFieldset("adress"));
    form.addEventListener("location".onfocus, focusFieldset("location"));
    form.addEventListener("zip".onfocus, focusFieldset("zip"));
    form.addEventListener("c-pass".onfocus, focusFieldset("c-pass"));
    form.addEventListener("birth".onfocus, focusFieldset("birth"));
}