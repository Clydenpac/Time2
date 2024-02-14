var passwordInput = document.getElementById("password");

function genPassword() {
    var chars = "0123456789abcdefghiklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWZ";
    var passwordLength = 12;
    var newPassword = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        newPassword += chars.charAt(randomNumber);
    }

    passwordInput.value = newPassword;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard: " + passwordInput.value);
}

