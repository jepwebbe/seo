//*************** Validate contact form ********
document.querySelector("footer form").addEventListener("submit", validate);
const messageField = document.querySelector("#error-message");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(evt) {
let error;

// test if name is filled out
if (this.name.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst dit navn";
    messageField.textContent = error;
    this.name.focus();
    return false;
}

// test email with regular expression
if (!regex.test(this.email.value)) {
    evt.preventDefault();
    error = "Din email-adresse skal være et gyldigt format (f.eks fede@film.com)";
    messageField.textContent = error;
    this.email.focus();
    return false;
}

// test if there is actually typed in a message
if (this.message.value == "") {
    evt.preventDefault();
    error = "Skriv venligst en besked, når du udfylder kontakt-formularen - ellers giver henvendelsen meget lidt mening :-)";
    messageField.textContent = error;
    this.email.focus();
    return false;
}
}
