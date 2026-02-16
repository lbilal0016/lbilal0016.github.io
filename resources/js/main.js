/*  Nav section links */
let aboutNav = document.getElementById("nav-about");
let backgroundNav = document.getElementById("nav-background");
let careerNav = document.getElementById("nav-career");

/*  Circle button elements */
let aboutCircle = document.getElementById("about-button");
let backgroundCircle = document.getElementById("background-button");
let careerCircle = document.getElementById("career-button");

function up(){
    event.target.style.marginTop = '-5%';
}

function down(){
    event.target.style.marginTop = '-1%';
    switch(event.target){
        case aboutCircle:
        event.target.style.backgroundColor = '#70b4bd';
        break;
        case backgroundCircle:
        event.target.style.backgroundColor = '#7ccdc5';  
        break;
        case careerCircle:
        event.target.style.backgroundColor = '#a2e0d3';  
        break;
        default:
        break;
    }
}

function returnPosition(){
    event.target.style.marginTop = '';
    event.target.style.backgroundColor = '';
}

function makeBold(){
    event.target.style.fontWeight = 'bold';
}

function unmakeBold(){
    event.target.style.fontWeight = '';
}


/*  jingle for circle buttons */
aboutCircle.addEventListener('mouseover', up);
aboutCircle.addEventListener('mouseout', returnPosition);
aboutCircle.addEventListener('mousedown', down);
aboutCircle.addEventListener('mouseup', returnPosition);

backgroundCircle.addEventListener('mouseover', up);
backgroundCircle.addEventListener('mouseout', returnPosition);
backgroundCircle.addEventListener('mousedown', down);
backgroundCircle.addEventListener('mouseup', returnPosition);

careerCircle.addEventListener('mouseover', up);
careerCircle.addEventListener('mouseout', returnPosition);
careerCircle.addEventListener('mousedown', down);
backgroundCircle.addEventListener('mouseup', returnPosition);

/*  jingle for navigation section links */
aboutNav.addEventListener('mouseover', makeBold);
aboutNav.addEventListener('mousedown', makeBold);
aboutNav.addEventListener('mouseout', unmakeBold);
aboutNav.addEventListener('mouseup', unmakeBold);

backgroundNav.addEventListener('mouseover', makeBold);
backgroundNav.addEventListener('mousedown', makeBold);
backgroundNav.addEventListener('mouseout', unmakeBold);
backgroundNav.addEventListener('mouseup', unmakeBold);

careerNav.addEventListener('mouseover', makeBold);
careerNav.addEventListener('mousedown', makeBold);
careerNav.addEventListener('mouseout', unmakeBold);
careerNav.addEventListener('mouseup', unmakeBold);