function submitForm() {
    var email = document.getElementById("emailId");
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    var address = document.getElementById("address");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('#mobile').val();
    if (email = " ") {
        alert("Please input and confirm your email");
        return false;
    } else if (!filter.test(email.value)) {
        alert('Please input correct your email.\nExample@gmail.com');
        email.focus;
        return false;
    }
    if (password1 = " ") {
        alert('Please enter your password');
        return false;
    } else if (password1 == password2) {
        alert("Your password has already been confirmed!");
        return true;
    } else {
        alert("Password is incorrect! Please try again!");
    }

    if (mobile !== " ") {
        if (vnf_regex.test(mobile) == false) {
            alert("Your input is invalid, please try again!");
            return false;
        } else {
            alert("Your number has already been updated!");
        }
    } else {
        alert("Please enter your number");
        return false;
    }

    if (address = " ") {
        alert("Please enter your address");
        return false;
    }
    alert("Thank you for submit in Form!");
}

function reset() {
    document.getElementById("myForm").reset();
}
