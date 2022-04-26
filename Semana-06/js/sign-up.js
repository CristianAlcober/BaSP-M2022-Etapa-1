window.onload = function () {
    var nameLong = false;
    var charLetters = false;
    var text = '';
    var presentDate =  ;
    var adSpace = 0;
    var adLong = false;
    var adNum = false;
    var adChar = false;
    var locationLong = false;
    var locationLetters = false;

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
            return true;
        } else {
            return false;
        }
    }

    function birthDateValidator() {
        
    }

    function dniValidator() {
        var dni = document.getElementById('dni');
        
        if (dni.value.length() == 7 || dni.value.length() == 8) {
            return true;
        }  else {
            text.concat('\n -Invalid dni length');
            return false;
        }
    }

    function phoneValidator() {
        var phone = document.getElementById('phone');
        
        if (phone.value.length() == 10) {
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

        if (adress.value.indexOf(' ')) {
            adSpace = true;
        } else {
            text.concat('\n -There is not a separation in the adress');
            adSpace = false;
        }
        
        if (adLong && adChar && adNum && adSpace) {
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
            return true;
        } else {
            return false;
        }
    }

    function zipCodeValidator() {
        var zipCode = document.getElementById('zip');
        if (zipCode.value.length == 4 || zipCode.value.length == 5 ) {
            return true;
        } else {
            return false;
        }
    }

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
        
    }

    function confirmPasswordValidator() {
        
    }

}