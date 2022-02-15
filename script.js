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
    }
}
//computer class extending player class
class Computer extends Shooter{
    constructor(accuracy){
        super(accuracy)
        this.accuracy = (Math.floor(Math.random()*20)+60)/100 //computer generates an accuracy between 60-80%
    }
}
//compare player and computer accuracy vs a Math.random to see if they score
let kobe = new Player
let shaq = new Computer

if (kobe.accuracy > Math.random()){


}

console.log(kobe.accuracy)
console.log(shaq.accuracy)


//way to generate picture changes to denote a hit or miss
let myImage = document.querySelector('#playerHoop');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/emptyHoop.jpg') {
    myImage.setAttribute ('src','images/swish.jpg');
  } else if(mySrc === 'images/swish.jpg') {
    myImage.setAttribute ('src','images/doink.jpg')
  }
    else {
        myImage.setAttribute ('src','images/emptyHoop.jpg') 
    }
}

let myImage2 = document.querySelector('#computerHoop');

myImage2.onclick = function() {
  let mySrc = myImage2.getAttribute('src');
  if(mySrc === 'images/emptyHoop.jpg') {
    myImage2.setAttribute ('src','images/swish.jpg');
  } else if(mySrc === 'images/swish.jpg') {
    myImage2.setAttribute ('src','images/doink.jpg')
  }
    else {
        myImage2.setAttribute ('src','images/emptyHoop.jpg') 
    }
}


//scoreboard



//reset button



//start button

