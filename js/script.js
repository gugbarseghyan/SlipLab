var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
var menuNum = 0;
function MenuShow () {
    if(menuNum == 0){
        document.getElementById("menu").style.display = "inline-block";
        menuNum = 1;
    }else{
        document.getElementById("menu").style.display = "none";
        menuNum = 0;
    }
}

var pic1background = document.querySelector(".slide .radios #pic1 div");
var pic2background = document.querySelector(".slide .radios #pic2 div");
var pic3background = document.querySelector(".slide .radios #pic3 div");
var pic4background = document.querySelector(".slide .radios #pic4 div");
var pic5background = document.querySelector(".slide .radios #pic5 div");
var pic6background = document.querySelector(".slide .radios #pic6 div");
var img = document.querySelector(".slide img");
function pic1(){
    img.src = "img/Slide 1.png"
    pic1background.style.display = "inline-block";
    pic2background.style.display = "none";
    pic3background.style.display = "none";
    pic4background.style.display = "none";
    pic5background.style.display = "none";
    pic6background.style.display = "none";
}
function pic2(){
    img.src = "img/Slide 2.png"
    pic2background.style.display = "inline-block";
    pic1background.style.display = "none";
    pic3background.style.display = "none";
    pic4background.style.display = "none";
    pic5background.style.display = "none";
    pic6background.style.display = "none";
}
function pic3(){
    img.src = "img/Slide 3.png"
    pic3background.style.display = "inline-block";
    pic2background.style.display = "none";
    pic1background.style.display = "none";
    pic4background.style.display = "none";
    pic5background.style.display = "none";
    pic6background.style.display = "none";
}
function pic4(){
    img.src = "img/Slide 4.png"
    pic4background.style.display = "inline-block";
    pic2background.style.display = "none";
    pic3background.style.display = "none";
    pic1background.style.display = "none";
    pic5background.style.display = "none";
    pic6background.style.display = "none";
}
function pic5(){
    img.src = "img/Slide 5.png"
    pic5background.style.display = "inline-block";
    pic2background.style.display = "none";
    pic3background.style.display = "none";
    pic4background.style.display = "none";
    pic1background.style.display = "none";
    pic6background.style.display = "none";
}
function pic6(){
    img.src = "img/Slide 6.png"
    pic6background.style.display = "inline-block";
    pic2background.style.display = "none";
    pic3background.style.display = "none";
    pic4background.style.display = "none";
    pic5background.style.display = "none";
    pic1background.style.display = "none";
}
function SlideShow(){
    
}