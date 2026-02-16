/*  Nav section links */
let homeNav = document.getElementById("nav-home") ? document.getElementById("nav-home") : null;
let backgroundNav = document.getElementById("nav-background") ? document.getElementById("nav-background") : null;
let careerNav = document.getElementById("nav-career") ? document.getElementById("nav-career") : null;
let aboutNav = document.getElementById("nav-about") ? document.getElementById("nav-about") : null;

let backgroundCards = document.getElementsByClassName("background-sub") ? document.getElementsByClassName("background-sub") : null;

function up(){
    event.target.style.marginTop = '-5%';
    event.target.style.width = '45%';
}

function returnPosition(){
    event.target.style.marginTop = '';
    event.target.style.width = '';
}

function makeBold(){
    event.target.style.fontWeight = 'bold';
}

function unmakeBold(){
    event.target.style.fontWeight = '';
}

/*  jingle for navigation section links */
if(homeNav !== null){
    homeNav.addEventListener('mouseover', makeBold);
    homeNav.addEventListener('mousedown', makeBold);
    homeNav.addEventListener('mouseout', unmakeBold);
    homeNav.addEventListener('mouseup', unmakeBold);
}

if(backgroundNav !== null){
    backgroundNav.addEventListener('mouseover', makeBold);
    backgroundNav.addEventListener('mousedown', makeBold);
    backgroundNav.addEventListener('mouseout', unmakeBold);
    backgroundNav.addEventListener('mouseup', unmakeBold);
}

if(careerNav !== null){
    careerNav.addEventListener('mouseover', makeBold);
    careerNav.addEventListener('mousedown', makeBold);
    careerNav.addEventListener('mouseout', unmakeBold);
    careerNav.addEventListener('mouseup', unmakeBold);
}

if(aboutNav !== null){
    aboutNav.addEventListener('mouseover', makeBold);
    aboutNav.addEventListener('mousedown', makeBold);
    aboutNav.addEventListener('mouseout', unmakeBold);
    aboutNav.addEventListener('mouseup', unmakeBold);
}

if(backgroundCards !== null){
    for(let backgroundCard of backgroundCards){
        backgroundCard.addEventListener('mouseenter', up);
        backgroundCard.addEventListener('mouseleave', returnPosition);
    }
}