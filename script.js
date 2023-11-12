const formInput = document.getElementById("contactForm");
const submitButton = document.getElementById("submit_button");
const mainSection = document.querySelector(".main");

formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    let subjectElement = getElement("#subject").value
    let bodyElement = getElement("#body").value

    if (subjectElement < 5 || subjectElement > 20) {
        alert("Subject must have a minimum length of 5 character!")
    } else {
        if (bodyElement < 20 || bodyElement > 540) {
        alert("Body must have a minimum length of 20 character!")
        } else {
            function sendMail(){
                var body = document.getElementById("body").value;
                var SubjectLine = document.getElementById("Subject").value;
                window.location.href = "mailto:alshandra.walangadi@gmail.com?subject="+SubjectLine+"&body="+body;
            }
        }
    }
});

