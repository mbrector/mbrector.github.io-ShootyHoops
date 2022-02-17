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
//compare player and computer accuracy vs a Math.random to see if they score
let kobe = new Player
let shaq = new Computer
document.querySelector('#homeScore').innerHTML = `0${kobe.score}`
document.querySelector('#visitorScore').innerHTML = `0${shaq.score}`

//way to generate picture changes to denote a hit or miss

let myImage = document.querySelector('#playerHoop');
let myImage2 = document.querySelector('#computerHoop');

function playerShot() {
    let mySrc1 = myImage.getAttribute('src');
    if(kobe.score<10 && shaq.score<10){
        if (kobe.accuracy > Math.random()){
            kobe.madeShot = true;
        }
        else {kobe.madeShot = false}                                                                                            
        if(mySrc1 === 'images/emptyHoop.jpg' && kobe.madeShot === true) {                      
            myImage.setAttribute ('src','images/swish.jpg');
            kobe.score++                                                                            
        } else if(mySrc1 === 'images/emptyHoop.jpg' && kobe.madeShot === false) {                  
            myImage.setAttribute ('src','images/doink.jpg')                                      
        }
        if(kobe.score<10){document.querySelector('#homeScore').innerHTML = `0${kobe.score}`}
        else{document.querySelector('#homeScore').innerHTML = `${kobe.score}`}

        let mySrc2 = myImage2.getAttribute('src');
        
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


var btn = document.getElementById("shoot");

btn.addEventListener("click", playerShot);
btn.addEventListener("click", function(){
    setTimeout(win, 1000);
})

function win(){
    if(kobe.score >= 10 && shaq.score < 10) {
        btn.disabled = true
        alert('You win!\nHit "Reset" to play again.')
    }
    else if(shaq.score >= 10 && kobe.score < 10){
        btn.disabled = true
        alert('You lose!\nHit "Reset" to play again.')
    }
    else if (shaq.score == 10 && kobe.score == 10) {
        btn.disabled = true
        alert('Tie game! Please try again!\nHit "Reset" to play again.')
    }
}

//scoreboard



//reset button
var resetGame = document.querySelector('#reset')
function reset(){
    kobe.score = 0;
    shaq.score = 0;
    myImage.setAttribute ('src','images/emptyHoop.jpg');
    myImage2.setAttribute ('src','images/emptyHoop.jpg');
    document.querySelector('#homeScore').innerHTML = `0${kobe.score}`;
    document.querySelector('#visitorScore').innerHTML = `0${shaq.score}`;
    kobe = new Player;
    shaq = new Computer;
    btn.disabled = false
}
resetGame.addEventListener("click", reset)


//instruction button
function instructions(){
    alert("                                 Welcome to Shooty Hoops!");
    alert("                         It is you against the computer in a 1v1!\n                                          First to 10 wins!")
    alert("                         Press the Shoot button to get started.\n                         You will both shoot at the same time.")
    alert("             Your accuracy is randomly generated between 65-75%\n        The computer accuracy is randomly generated between 60-80%")
}
var bttn = document.getElementById("instruct");

bttn.addEventListener("click", instructions)