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



//way to generate picture changes to denote a hit or miss



//scoreboard



//reset button



//start button

let bob = new Player
let comp = new Computer
console.log(bob.accuracy)
console.log(comp.accuracy)