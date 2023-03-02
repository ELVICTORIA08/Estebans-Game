/* Declare variables below to save the different sections (divs) of your story*/
let eating = document.querySelector(".eating");
let eatingOne = document.querySelector(".eatingOne");
let optionOne = document.querySelector(".option-one-screen");
console.log(optionOne);
let kitchen = document.querySelector(".kitchen");
let dumbTitle = document.querySelector(".title");
let optionTwo = document.querySelector(".option-two-screen");
console.log(optionTwo);
let optionThree = document.querySelector(".option-one-screentwo");
let optionThink = document.querySelector(".think");
let optionFour = document.querySelector(".option-one-screenthree");
let optionFive = document.querySelector(".option-ball");
let buttonFive = document.querySelector(".option-ballyes");
let buttonSix = document.querySelector(".option-ballno");
let buttonThink = document.querySelector(".option-think");
let body = document.querySelector("body");
let storyEnd = document.querySelector("optionone-end");

let buttonFour = document.querySelector(".option-four");
let buttonOne = document.querySelector(".option-one");
let storyOpening = document.querySelector(".story-opening");
let optionEnd = document.querySelector(".optionone-end");
console.log(buttonOne);
let buttonTwo = document.querySelector(".option-two");
buttonTwo.onClick = function() {
    body.style.background = "blue";

};
let buttonThree = document.querySelector(".option-Three");



console.log(buttonTwo)


;



buttonOne.onclick = function() {
    optionOne.style.display = "none";



};






buttonOne.onclick = function() {
    optionOne.style.display = "block";
    storyOpening.style.display = "none";
    optionTwo.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    optionThree.style.display = "none";
    buttonThree.style.display = "none";
    buttonThree.style.display = "inline";
    optionFour.style.display = "none";
    dumbTitle.style.display = "none";
    body.style.background = "black";
    kitchen.style.color = "white";
};


buttonTwo.onclick = function() {
    optionTwo.style.display = "block";
    storyOpening.style.display = "none";
    optionOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonOne.style.display = "none";
    optionThree.style.display = "none";
    optionFour.style.display = "none";
    eating.style.display = "inline";
    dumbTitle.style.display = "none";
    body.style.background = "black";
    eating.style.color = "white";

};
buttonThree.onclick = function() {
    optionThree.style.display = "inline";
    optionOne.style.display = "none";
    buttonThree.style.display = "none";
    buttonFour.style.display = "inline";
    dumbTitle.style.display = "none";
    body.style.background = "white";
};
buttonFour.onclick = function() {
    optionFour.style.display = "inline";
    optionThree.style.display = "none";
    dumbTitle.style.display = "none";
    body.style.background = "white";

};
buttonThink.onclick = function() {
    optionThink.style.display = "inline";
    optionFour.style.display = "none";
    buttonFive.style.display = "inline";
    buttonSix.style.display = "inline";
    dumbTitle.style.display = "none";
};
buttonFive.onclick = function() {
    optionThink.style.display = "none";
    optionEnd.style.display = "inline";
    buttonFive.style.display = "none";
    buttonSix.style.display = "none";
    dumbTitle.style.display = "none";

};
buttonSix.onclick = function() {
    optionTwo.style.display = "inline";
    optionThink.style.display = "none";
    buttonFive.style.display = "none";
    buttonSix.style.display = "none";
    eatingOne.style.display = "inline";
    dumbTitle.style.display = "none";

};