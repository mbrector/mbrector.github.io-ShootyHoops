//class for basketball shooters, you and computer
class Shooter{
    constructor(accuracy){
        this.accuracy = accuracy
    }
}
//player class extending shooter class
class Player extends Shooter{
    constructor(accuracy){
        super(accuracy)
        this.accuracy = (Math.floor(Math.random()*10)+65)/100 //player generates an accuracy between 65-75%
        this.score = 0
        this.madeShot = true
    }
}
//computer class extending shooter class
class Computer extends Shooter{
    constructor(accuracy){
        super(accuracy)
        this.accuracy = (Math.floor(Math.random()*20)+60)/100 //computer generates an accuracy between 60-80%
        this.score = 0
        this.madeShot = true
    }
}
let kobe = new Player
let shaq = new Computer
document.querySelector('#homeScore').innerHTML = `0${kobe.score}`
document.querySelector('#visitorScore').innerHTML = `0${shaq.score}`

//way to generate picture changes to denote a hit or miss
//compare player and computer accuracy vs a Math.random to see if they score
//scoreboard
let myImage = document.querySelector('#playerHoop');
let myImage2 = document.querySelector('#computerHoop');

function playerShot() {
    let mySrc1 = myImage.getAttribute('src');
    let mySrc2 = myImage2.getAttribute('src');
    if(kobe.score<10 && shaq.score<10){
        if(kobe.accuracy > Math.random()){
            kobe.madeShot = true;
        }
        else {kobe.madeShot = false}                                                                                            
        if(mySrc1 === 'images/emptyHoop.jpg' && kobe.madeShot === true) {                      
            myImage.setAttribute ('src','images/swish.jpg');
            kobe.score++                                                                            
        }
        else if(mySrc1 === 'images/emptyHoop.jpg' && kobe.madeShot === false) {                  
            myImage.setAttribute ('src','images/doink.jpg')                                      
        }
        if(kobe.score<10){
            document.querySelector('#homeScore').innerHTML = `0${kobe.score}`
        }
        else{document.querySelector('#homeScore').innerHTML = `${kobe.score}`
        }
        if (shaq.accuracy > Math.random()){
            shaq.madeShot = true;
        }
        else {shaq.madeShot = false}
        if(mySrc2 === 'images/emptyHoop.jpg' && shaq.madeShot === true) {
            myImage2.setAttribute ('src','images/swish.jpg');
            shaq.score++
        } 
        else if(mySrc2 === 'images/emptyHoop.jpg' && shaq.madeShot === false) {
            myImage2.setAttribute ('src','images/doink.jpg')
        }
    }
    if(shaq.score<10){
        document.querySelector('#visitorScore').innerHTML = `0${shaq.score}`
    }
    else{
        document.querySelector('#visitorScore').innerHTML = `${shaq.score}` 
    }
    setTimeout(function() {
        myImage.setAttribute ('src','images/emptyHoop.jpg') 
        myImage2.setAttribute ('src','images/emptyHoop.jpg') 
    }, 750);
}
        
//shoot button
var btn = document.getElementById("shoot");

btn.addEventListener("click", playerShot);
btn.addEventListener("click", function(){
    setTimeout(win, 1000);
})

//win function (takes care of loss and tie also)
let usName = ""
let compName = ""

function win(){
    if(kobe.score >= 10 && shaq.score < 10) {
        btn.disabled = true
        alert(`${usName} wins!\nHit "Reset" to play again.`)
    }
    else if(shaq.score >= 10 && kobe.score < 10){
        btn.disabled = true
        alert(`${compName} wins!\nHit "Reset" to play again.`)
    }
    else if (shaq.score == 10 && kobe.score == 10) {
        btn.disabled = true
        alert('Tie game! Please try again!\nHit "Reset" to play again.')
    }
}

//reset button
function reset(){
    kobe.score = 0;
    shaq.score = 0;
    myImage.setAttribute ('src','images/emptyHoop.jpg');
    myImage2.setAttribute ('src','images/emptyHoop.jpg');
    document.querySelector('#homeScore').innerHTML = `0${kobe.score}`;
    document.querySelector('#visitorScore').innerHTML = `0${shaq.score}`;
    kobe = new Player;
    shaq = new Computer;
}

var resetGame = document.querySelector('#reset')
resetGame.addEventListener("click", reset)


//instruction button(spacing due to centering text within alert box)
function instructions(){
    alert("                                 Welcome to Shooty Hoops!");
    alert("                         It is you against the computer in a 1v1!\n                                          First to 10 wins!");
    alert("                         Press the Shoot button to get started.\n                         You will both shoot at the same time.");
    alert("             Your accuracy is randomly generated between 65-75%\n        The computer accuracy is randomly generated between 60-80%");
}

var bttn = document.getElementById("instruct");
bttn.addEventListener("click", instructions)

//user name input
function userName() {
    do {
    usName = prompt("Player, please enter your name", "Player");
    }
    while (usName.length < 2);
    document.getElementById("home").innerHTML = usName.toUpperCase();
  }
userName();

function computerName() {
    do {
    compName = prompt("Enter a name for the computer or Player 2, remember the stat difference!", "computer");
    }
    while (compName.length < 2);
    document.getElementById("visitor").innerHTML = compName.toUpperCase();
  }
computerName();

function changeTheUserNames(){
    userName()
    computerName()
}

var userButton = document.getElementById("changeUsersButton");
userButton.addEventListener("click", changeTheUserNames)