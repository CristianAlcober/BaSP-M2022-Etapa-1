window.onload = function () {
    //          VARIABLES            //
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
    let Num = ['1','2','3','4','5','6','7','8','9','0'];
    let Char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let Rare = ['!','¡','"','#','$','%','&','/','(',')','=','?','¿',',','.',';',':'];
    var name = document.getElementById('f-name');
    var lastName = document.getElementById('l-name');
    var birth = document.getElementById('birth');
    var dni = document.getElementById('dni');
    var phone = document.getElementById('phone');
    var adress = document.getElementById('adress');
    var location = document.getElementById('location');
    var zipCode = document.getElementById('zip');
    var email = document.getElementById('e-mail');
    var pass = document.getElementById('pass');
    var passConfirmed = document.getElementById('c-pass');
    var submit = document.getElementById('continue');

    

    //          NAME VALIDATOR            //
    function nameValidator() {
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

    //          LAST NAME VALIDATOR            //
    function lastNameValidator() {
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
                break;
            }
        }

        if (nameLong && charLetters) {
            textCorrect.concat('\n Last Name: ' + lastName.value);
            return true;
        } else {
            text.concat('\n -Invalid last name format');
            return false;
        }
    }

    //          DATE OF BIRTH VALIDATOR            //
    function birthDateValidator() {
        if (birth.value.substring(6,9) <= 2004) {
            textCorrect.concat('\n DoB: ' + birth.value);
            return true;
        } else {
            text.concat('\n -Invalid birth date format. Minors are not allowed');
            return false;
        }
    }

    //          DNI VALIDATOR            //
    function dniValidator() {       
        if (dni.value.length() == 7 || dni.value.length() == 8) {
            textCorrect.concat('\n DNI: ' + dni.value);
            return true;
        }  else {
            text.concat('\n -Invalid dni length');
            return false;
        }
    }

    //          PHONE NUMBER VALIDATOR            //
    function phoneValidator() {
        if (phone.value.length() == 10) {
            textCorrect.concat('\n Phone Number: ' + phone.value);
            return true;
        }  else {
            text.concat('\n -Invalid phone length');
            return false;
        }
    }

    //          ADRESS VALIDATOR            //
    function adressValidator() {
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

    //          LOCATION VALIDATOR            //
    function locationValidator() {
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

    //          ZIP CODE VALIDATOR            //
    function zipCodeValidator() {
        if (zipCode.value.length == 4 || zipCode.value.length == 5 ) {
            textCorrect.concat('\n ZIP Code: ' + zipCode.value);
            return true;
        } else {
            return false;
        }
    }

    //          E-MAIL VALIDATOR            //
    function emailValidator() {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            textCorrect.concat('\n E-Mail: ' + email.value);
            return true;
        } else {
            text.concat('-Invalid email format');
            return false;
        }
    }

    //          PASSWORD VALIDATOR            //
    function passwordValidator() {
        for (let i = 0; i <= pass.value.length; i++) {
            for (let n = 0; n < pass.value.length; n++) {
                if (pass.value.substring(i,(i+1)) == Num[n]) {
                    charNum = true;
                    break;
                } else {
                    charNum = false;
                }
            }
            if (charNum) {
                break;
            }
        }

        for (let i = 0; i <= pass.value.length; i++) {
            for (let n = 0; n < pass.value.length; n++) {
                if (pass.value.substring(i,(i+1)) == Char[n]) {
                    charLet = true;
                    break;
                } else {
                    charLet = false;
                }
            }
            if (charLet) {
                break;
            }
        }

        for (let i = 0; i < pass.value.length; i++) {
            for (let n = 0; n < pass.value.length; n++) {
                if (pass.value.substring(i,(i+1)) == Rare[n]) {
                    charWeird = false;
                    break;
                } else {
                    charWeird = true;
                }
            }
        }

        if (pass.value.length >= 8 ) {
            passLong = true;
        } else {
            passLong = false;
        }

        if (passLong && charNum && charLet && charWeird) {
            textRight.concat('\n Password: ' + pass.value);
            return true;
        } else if (pass.value == '') {
            text.concat('\n -Password fieldset is empty');
            return false;
        } else {
            text.concat('\n -Invalid password format');
            return false;
        }
    }

    //          CONFIRM PASSWORD VALIDATOR            //
    function confirmPasswordValidator() {
        if (passConfirmed.value == pass.value && passConfirmed.value.length == pass.value.length) {
            return true;
        } else {
            text.concat('-Both passwords do not match');
            return false;
        }
    }

    //          SUBMIT            //
    function fillForm(event) {
        if (passwordValidator() && emailValidator() && nameValidator() && lastNameValidator() && dniValidator() && phoneValidator
         && confirmPasswordValidator() && zipCodeValidator() && locationValidator() && adressValidator() && birthDateValidator()) {
            
            alert('You have registered successfully!' + textCorrect);
        } else {
            event.preventDefault();
            alert('The next fields have not been validated: \n' + text);
        }
    }

    //          FOCUS            //
    function focusFieldsetEmail() {
        pass.classList.remove("error");
    }

    function focusFieldsetPass() {
        pass.classList.remove("error");
    }

    function focusFieldsetName() {
        name.classList.remove("error");
    }

    function focusFieldsetLastName() {
        lastName.classList.remove("error");
    }

    function focusFieldsetDni() {
        dni.classList.remove("error");
    }

    function focusFieldsetPhone() {
        phone.classList.remove("error");
    }

    function focusFieldsetAdress() {
        adress.classList.remove("error");
    }

    function focusFieldsetLocation() {
        location.classList.remove("error");
    }

    function focusFieldsetZip() {
        zipCode.classList.remove("error");
    }

    function focusFieldsetCPass() {
        passConfirmed.classList.remove("error");
    }

    function focusFieldsetBirth() {
        birth.classList.remove("error");
    }
    
    //          BLUR            //
    function blurFieldsetEmail() {
        if (emailValidator) {
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    }

    function blurFieldsetPass() {
        if (passwordValidator) {
            pass.classList.remove("error");
        } else {
            pass.classList.add("error");
        }
    }

    function blurFieldsetName() {
        if (nameValidator) {
            name.classList.remove("error");
        } else {
            name.classList.add("error");
        }
    }

    function blurFieldsetLastName() {
        if (lastNameValidator) {
            lastName.classList.remove("error");
        } else {
            lastName.classList.add("error");
        }
    }

    function blurFieldsetDni() {
        if (dniValidator) {
            dni.classList.remove("error");
        } else {
            dni.classList.add("error");
        }
    }

    function blurFieldsetPhone() {
        if (phoneValidator) {
            phone.classList.remove("error");
        } else {
            phone.classList.add("error");
        }
    }

    function blurFieldsetAdress() {
        if (adressValidator) {
            adress.classList.remove("error");
        } else {
            adress.classList.add("error");
        }
    }

    function blurFieldsetLocation() {
        if (locationValidator) {
            location.classList.remove("error");
        } else {
            location.classList.add("error");
        }
    }

    function blurFieldsetZip() {
        if (zipCodeValidator) {
            zipCode.classList.remove("error");
        } else {
            zipCode.classList.add("error");
        }
    }

    function blurFieldsetCPass() {
        if (confirmPasswordValidator) {
            passConfirmed.classList.remove("error");
        } else {
            passConfirmed.classList.add("error");
        }
    }

    function blurFieldsetBirth() {
        if (birthDateValidator) {
            birth.classList.remove("error");
        } else {
            birth.classList.add("error");
        }
    }

    //          EVENT LISTENER SUBMIT            //
    submit.addEventListener("click", fillForm());

    //          EVENT LISTENERS BLUR            //
    email.addEventListener("blur", blurFieldsetEmail);
    pass.addEventListener("blur", blurFieldsetPass);
    name.addEventListener("blur", blurFieldsetName);
    lastName.addEventListener("blur", blurFieldsetLastName);
    dni.addEventListener("blur", blurFieldsetDni);
    phone.addEventListener("blur", blurFieldsetPhone);
    adress.addEventListener("blur", blurFieldsetAdress);
    location.addEventListener("blur", blurFieldsetLocation);
    zipCode.addEventListener("blur", blurFieldsetZip);
    passConfirmed.addEventListener("blur", blurFieldsetCPass);
    birth.addEventListener("blur", blurFieldsetBirth);

    //          EVENT LISTENERS FOCUS            //
    email.addEventListener("focus", focusFieldsetEmail);
    pass.addEventListener("focus", focusFieldsetPass);
    name.addEventListener("focus", focusFieldsetName);
    lastName.addEventListener("focus", focusFieldsetLastName);
    dni.addEventListener("focus", focusFieldsetDni);
    phone.addEventListener("focus", focusFieldsetPhone);
    adress.addEventListener("focus", focusFieldsetAdress);
    location.addEventListener("focus", focusFieldsetLocation);
    zipCode.addEventListener("focus", focusFieldsetZip);
    passConfirmed.addEventListener("focus", focusFieldsetCPass);
    birth.addEventListener("focus", focusFieldsetBirth);
}