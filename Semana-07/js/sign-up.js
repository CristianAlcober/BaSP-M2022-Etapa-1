window.onload = function () {
    
    //          VARIABLES            //
    var nameLong = false;
    var charLetters = false;
    var charLettersTwo = false;
    var charNum = false;
    var charLet = false;
    var charWeird = false;
    var passLong = false;
    var text = '';
    var textCorrect = '';
    var adSpace = 0;
    var adLong = false;
    var adNum = false;
    var adChar = false;
    var locationLong = false;
    var locationLetters = false;
    let compDate = '2004-05-03';
    let Num = ['1','2','3','4','5','6','7','8','9','0'];
    let Char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let Rare = ['!','¡','"','#','$','%','&','/','(',')','=','?','¿',',','.',';',':'];
    var name = document.getElementById('f-name');
    var lastName = document.getElementById('l-name');
    var birth = document.getElementById('birth');
    var dni = document.getElementById('dni');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var zipCode = document.getElementById('zip');
    var email = document.getElementById('e-mail');
    var pass = document.getElementById('pass');
    var passConfirmed = document.getElementById('c-pass');
    var submit = document.getElementById('continue');
    var date = birth.value;

    //          NAME VALIDATOR            //
    function nameValidator() {
        if (name.value.length >= 3 ) {
            nameLong = true;
        } else {
            nameLong = false;
            text.concat('\n -Invalid name length');
        }

        for (let i = 0; i <= name.value.length; i++) {
            for (let n = 0; n < Char.length; n++) {
                if (name.value.substring(i,(i+1)) == Char[n]) {
                    charLetters = true;
                    break;
                } else {
                    charLetters = false;
                }
            }
            if (charLetters) {
                break;
            }
        }

        if (nameLong && charLetters) {
            textCorrect.concat('\n Name: ' + name.value);
            return true;
        } else {
            text.concat('\n -Invalid name format');
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

        for (let i = 0; i <= lastName.value.length; i++) {
            for (let n = 0; n < Char.length; n++) {
                if (lastName.value.substring(i,(i+1)) == Char[n]) {
                    charLettersTwo = true;
                    break;
                } else {
                    charLettersTwo = false;
                }
            }
            if (charLettersTwo) {
                break;
            }
        }

        if (nameLong && charLettersTwo) {
            textCorrect.concat('\n Last Name: ' + lastName.value);
            return true;
        } else {
            text.concat('\n -Invalid last name format');
            return false;
        }
    }

    //          DATE OF BIRTH VALIDATOR            //
    function birthDateValidator() {
        if (birth.value < compDate) {
            textCorrect.concat('\n DoB: ' + birth.value);
            return true;
        } else {
            text.concat('\n -Invalid birth date format. Minors are not allowed');
            return false;
        }
    }

    function birthDateConverter(date) {
        let dateArray = date.split('-');
        
        return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
    }

    //          DNI VALIDATOR            //
    function dniValidator() {       
        if (dni.value.length == 7 || dni.value.length == 8) {
            textCorrect.concat('\n DNI: ' + dni.value);
            return true;
        }  else {
            text.concat('\n -Invalid dni length');
            return false;
        }
    }

    //          PHONE NUMBER VALIDATOR            //
    function phoneValidator() {
        if (phone.value.length == 10) {
            textCorrect.concat('\n Phone Number: ' + phone.value);
            return true;
        }  else {
            text.concat('\n -Invalid phone length');
            return false;
        }
    }

    //          ADDRESS VALIDATOR            //
    function addressValidator() {
        if (address.value.length >= 5) {
            adLong = true;
        } else {
            text.concat('\n -Invalid address length');
            adLong = false;
        }
        
        for (let i = 0; i <= address.value.length; i++) {
            for (let n = 0; n < Char.length; n++) {
                if (address.value.substring(i,(i+1)) == Char[n]) {
                    adChar = true;
                    break;
                } else {
                    adChar = false;
                }
            }
            if (adChar) {
                break;
            }
        }

        if (adChar == false) {
            text.concat('\n -Invalid address format');
        }

        for (let i = 0; i <= address.value.length; i++) {
            for (let n = 0; n < Num.length; n++) {
                if (address.value.substring(i,(i+1)) == Num[n]) {
                    adNum = true;
                    break;
                } else {
                    adNum = false;
                }
            }
            if (adNum) {
                break;
            }
        }

        if (adNum == false) {
            text.concat('\n -There is not a numeration in the address');
        }

        for (let i = 0; i < address.value.length; i++) {
            if (address.value.substring(i,(i+1)) == " ") {
                adSpace = true;
                break
            } else {
                text.concat('\n -There is not a separation in the address');
                adSpace = false;
            }
        }
        
        if (adLong && adChar && adNum && adSpace) {
            textCorrect.concat('\n address: ' + address.value);
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

        for (let i = 0; i <= location.value.length; i++) {
            for (let n = 0; n < Char.length; n++) {
                if (location.value.substring(i,(i+1)) == Char[n]) {
                    locationLetters = true;
                    break;
                } else {
                    locationLetters = false;
                }
            }
            if (locationLetters) {
                break;
            }
        }

        if (locationLong && locationLetters) {
            textCorrect.concat('\n Location: ' + location.value);
            return true;
        } else {
            text.concat('\n -Invalid location format');
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
            textCorrect.concat('\n Password: ' + pass.value);
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

    //          LOCAL STORAGE            //
    function setLocalStorage() {
        localStorage.setItem('name', name.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('dni', dni.value);
        localStorage.setItem('dob', birth.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('city', location.value);
        localStorage.setItem('zip', zipCode.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', pass.value);
    }
    
    //          SUBMIT            //
    function fillForm(event) {
        event.preventDefault(event);
        
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
        var queryParams = '?name=' + name.value + '&lastName=' + lastName.value + '&dni=' + dni.value + 
        '&phone=' + phone.value + '&dob=' + birthDateConverter(date) + '&address=' + address.value + '&city=' + location.value + 
        '&zip=' + zipCode.value + '&email=' + email.value + '&password='+ pass.value;

        if (passwordValidator() && emailValidator() && nameValidator() && lastNameValidator() && dniValidator() && phoneValidator()
         && confirmPasswordValidator() && zipCodeValidator() && locationValidator() && addressValidator() && birthDateValidator()) {
            fetch(url + queryParams)
                .then(res => res.json())
                .then(data => {
                    alert(data.msg)
                    if (data.success) {
                        setLocalStorage();
                        console.log(textCorrect);
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert('Oops, something went wrong with your registration...' + err);
                })
        } else {
            alert(text);
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

    function focusFieldsetAddress() {
        address.classList.remove("error");
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
        if (emailValidator()) {
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    }

    function blurFieldsetPass() {
        if (passwordValidator()) {
            pass.classList.remove("error");
        } else {
            pass.classList.add("error");
        }
    }

    function blurFieldsetName() {
        if (nameValidator()) {
            name.classList.remove("error");
        } else {
            name.classList.add("error");
        }
    }

    function blurFieldsetLastName() {
        if (lastNameValidator()) {
            lastName.classList.remove("error");
        } else {
            lastName.classList.add("error");
        }
    }

    function blurFieldsetDni() {
        if (dniValidator()) {
            dni.classList.remove("error");
        } else {
            dni.classList.add("error");
        }
    }

    function blurFieldsetPhone() {
        if (phoneValidator()) {
            phone.classList.remove("error");
        } else {
            phone.classList.add("error");
        }
    }

    function blurFieldsetAddress() {
        if (addressValidator()) {
            address.classList.remove("error");
        } else {
            address.classList.add("error");
        }
    }

    function blurFieldsetLocation() {
        if (locationValidator()) {
            location.classList.remove("error");
        } else {
            location.classList.add("error");
        }
    }

    function blurFieldsetZip() {
        if (zipCodeValidator()) {
            zipCode.classList.remove("error");
        } else {
            zipCode.classList.add("error");
        }
    }

    function blurFieldsetCPass() {
        if (confirmPasswordValidator()) {
            passConfirmed.classList.remove("error");
        } else {
            passConfirmed.classList.add("error");
        }
    }

    function blurFieldsetBirth() {
        if (birthDateValidator()) {
            birth.classList.remove("error");
        } else {
            birth.classList.add("error");
        }
    }

    //          EVENT LISTENER SUBMIT            //
    submit.addEventListener("click", fillForm);

    //          EVENT LISTENERS BLUR            //
    email.addEventListener("blur", blurFieldsetEmail);
    pass.addEventListener("blur", blurFieldsetPass);
    name.addEventListener("blur", blurFieldsetName);
    lastName.addEventListener("blur", blurFieldsetLastName);
    dni.addEventListener("blur", blurFieldsetDni);
    phone.addEventListener("blur", blurFieldsetPhone);
    address.addEventListener("blur", blurFieldsetAddress);
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
    address.addEventListener("focus", focusFieldsetAddress);
    location.addEventListener("focus", focusFieldsetLocation);
    zipCode.addEventListener("focus", focusFieldsetZip);
    passConfirmed.addEventListener("focus", focusFieldsetCPass);
    birth.addEventListener("focus", focusFieldsetBirth);
}