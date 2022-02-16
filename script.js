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

if (kobe.accuracy > Math.random()){
        kobe.madeShot = true;
        kobe.score++
    }
        else {kobe.madeShot = false
}
if (shaq.accuracy > Math.random()){
        shaq.madeShot = true;
        shaq.score++
}
    else {shaq.madeShot = false
}

console.log(kobe.madeShot)
console.log(shaq.madeShot)
console.log(kobe.score)
console.log(shaq.score)


//way to generate picture changes to denote a hit or miss

let myImage = document.querySelector('#playerHoop');

function playerShot() {
  let mySrc = myImage.getAttribute('src');                                          //function for player and function for computer tied to button
  if(mySrc === 'images/emptyHoop.jpg' && kobe.madeShot === true) {                      //logic for scoreboard to update
    myImage.setAttribute ('src','images/swish.jpg');                                       //set timeout to go back to emptyHoop
  } else if(mySrc === 'images/emptyHoop.jpg' && kobe.madeShot === false) {                  //wait for another click
    myImage.setAttribute ('src','images/doink.jpg')                                       //
  }
    else {
        myImage.setAttribute ('src','images/emptyHoop.jpg') 
    }
}

let myImage2 = document.querySelector('#computerHoop');

function computerShot() {
  let mySrc = myImage2.getAttribute('src');
  if(mySrc === 'images/emptyHoop.jpg' && shaq.madeShot === true) {
    myImage2.setAttribute ('src','images/swish.jpg');
  } else if(mySrc === 'images/emptyHoop.jpg' && shaq.madeShot === false) {
    myImage2.setAttribute ('src','images/doink.jpg')
  }
    else {
        myImage2.setAttribute ('src','images/emptyHoop.jpg') 
    }
}

// document.getElementById('shoot').addEventListener('click', function(){
//     playerShot();
//     computerShot();
// });

var btn = document.getElementById("shoot");
     
btn.addEventListener("click", playerShot);
btn.addEventListener("click", computerShot);


//scoreboard



//reset button



//start button

