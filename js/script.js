/*HIDDEN NAV*/
function now_nav() {

    var a = document.getElementById("drop_dow");

    if(a.style.display === "none")  {     
        a.style.display = "flex";
        document.getElementById("close_icon").style.display = "block";

        document.getElementById("body_bg").style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("navicon").style.display = "none";
    }  
    else{
        a.style.display = "none";
        document.getElementById("body_bg").style.display = "none";
        document.getElementById("body").style.overflow = "inherit";
        document.getElementById("navicon").style.display = "block";
        document.getElementById("close_icon").style.display = "none";
    }


}
/*SHOW MORE*/

function show_hide() {
    var button = document.getElementById('btn'),
        hidden_qns = document.getElementById("hidden_qns");

    if(hidden_qns.style.display === "none"){
        hidden_qns.style.display = "block";
        button.textContent = `Show less`; 
    }
    else{
        hidden_qns.style.display = "none";
        button.textContent = `Show More`; 
    }
} 



/*CONTACT FORM VALIDATION*/
var form = document.getElementById('form'),
    username = document.getElementById('username'),
    surname = document.getElementById('surname'),
    subject = document.getElementById('subject'),
    email = document.getElementById('email'),
    txt_mesg = document.getElementById('txt_mesg');

form.addEventListener('submit', form_submition => {
    form_submition.preventDefault();                
    inputs_content();
});

function inputs_content() {
    // trim to remove the whitespaces
    var usernameValue = username.value.trim(),
        surnameValue = surname.value.trim(),
        subjectValue = subject.value.trim(),
        emailValue = email.value.trim(),
        txt_mesgValue = txt_mesg.value.trim();

    if(usernameValue === '') {
        username.placeholder = "First name CANNOT BE EMPTY!!";
        username.classList.add("error_style");
    } 
    else {
        username.classList.add("validated_style");
    }

    if(surnameValue === '') {
        surname.placeholder = "Surname CANNOT BE EMPTY!!";
        surname.classList.add("error_style");
    } 
    else {
        surname.classList.add("validated_style");
    }



    if(subjectValue === '') {
        subject.placeholder = "Subject CANNOT BE EMPTY";
        subject.classList.add("error_style");
    } 
    else {
        subject.classList.add("validated_style");
    }



    if(emailValue === '') {
        email.placeholder = "EMAIL CANNOT BE EMPTY!!";
        email.classList.add("error_style");
    } 
    else {
        email.classList.add("validated_style");
    }



    if(txt_mesgValue === '') {
        txt_mesg.placeholder = "The message CANNOT BE SENT EMPTY!!";
        txt_mesg.classList.add("error_style");
    } 
    else {
        txt_mesg.classList.add("validated_style");
    }
}