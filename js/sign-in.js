let user = 0;
let apps = document.querySelector(".apps");
let errorText = document.querySelector(".error");
let signInForm = document.querySelector(".signIn");
let SeeAppsButton = document.querySelector(".see-button");
let submit = document.querySelector(".submit");
let username = document.querySelector("#username").value;
let email = document.querySelector("#email").value;
let usernameText = document.querySelector("#usernameText");
let emailText = document.querySelector("#emailText");
function seeApps(){
    errorText.style.display = "block";
    signInForm.style.display = "block";
    SeeAppsButton.style.display = "none";
}
function SignIn(){
    if(username === "" && email === ""){
        signInForm.style.display = "none";
        errorText.style.display = "none";
        apps.style.display = "flex";
        SeeAppsButton.style.display = "none";
        usernameText.style.color = "red";
        emailText.style.color = "red";
    }else{
        console.log(username)
        signInForm.style.display = "none";
        errorText.style.display = "none";
        apps.style.display = "flex";
        SeeAppsButton.style.display = "none";
    }
}
// signInForm.style.display = "none";
// errorText.style.display = "none";
// apps.style.display = "flex";
// SeeAppsButton.style.display = "none";

// console.log(username);
// console.log(email)