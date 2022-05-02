window.onload = function () {
    //          VARIABLES            //
    var charNum = false;
    var charLet = false;
    var charWeird = false;
    var passLong = false;
    var text = 'Error, could not log in because of the following: ';
    var email = document.getElementById('e-mail');
    var pass = document.getElementById('pass');
    let Num = ['1','2','3','4','5','6','7','8','9','0'];
    let Char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let Rare = ['!','¡','"','#','$','%','&','/','(',')','=','?','¿',',','.',';',':'];
    var iPass = document.getElementById('input-p');
    var iEmail = document.getElementById('input-e');
    var submit = document.getElementById('continue');

    //          E-MAIL VALIDATOR            //
    function emailValidator() {
        if (email.value == '') {
            return false;
        }
        
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            return true;
        } else {
            text.concat('\n -Invalid email input');
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
            return true;
        } else if (pass.value == '') {
            text.concat('\n -Password input is empty');
            return false;
        } else {
            text.concat('\n -Invalid password input');
            return false;
        }
    }
    
    //          LOCAL STORAGE            //
    function setLocalStorage() {
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', pass.value);
    }

    //          SUBMIT            //
    function fillForm(event) {
        event.preventDefault(event);

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        var queryParams = '?email=' + email.value + '&password='+ pass.value;
        var list = '';
        
        if (passwordValidator() && emailValidator()) {
            fetch(url, queryParams)
                .then(res => res.json())
                .then(json => {
                    for (var key in json) {
                        list.concat = key.json;
                    }
                })
                alert('You have logged in successfully!' + list)
                .catch(err => {
                    alert('Oops, something went wrong with your log in...');
                    alert(err)
                })
                setLocalStorage();
        } else {
            alert(text);
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
    submit.addEventListener("click", fillForm);


}