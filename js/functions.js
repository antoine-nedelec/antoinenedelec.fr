



function checkMinutes() {
    let now = new Date().getMinutes();
    if (now > checkMinutes.prevTime){
        setPhoneTime();
    }
    checkMinutes.prevTime = now;
    setTimeout(checkMinutes,1000);
}

function setPhoneTime() {
    let date = new Date;
    document.getElementById("phone").setAttribute('data-time', ("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2));
}

function screenClick() {
    let screen = document.getElementById("screen");
    let form = document.getElementById("contact-form");
    if(screen.classList.contains("focused")) {
        screen.classList.remove("focused");
        form.classList.remove("focused");
    } else {
        screen.classList.add("focused");
        form.classList.add("focused");
    }
}

function formClick() {
    let form = document.getElementById("contact-form-container");
    let input = document.getElementById("contact-name");
    if(!form.classList.contains("full-screen")) {
        form.classList.add("full-screen");
        input.focus();
    }
}

function formClose(event) {
    event.stopPropagation();
    let form = document.getElementById("contact-form-container");
    if(form.classList.contains("full-screen")) {
        form.classList.remove("full-screen");
    }
}

function submitForm(e) {
    e.preventDefault();
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
    return false;
}

(function() {
    setPhoneTime();
    setTimeout(checkMinutes, 1000);
    document.getElementById("post-it").addEventListener("click", screenClick);
    document.getElementById("contact-form-container").addEventListener("click", formClick);
    document.getElementById("form-close").addEventListener("click", formClose);
})();
