//Consts
const START_HEALTH = 100;

//Global variables
var ship;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 4);
  console.log(width/2);
  ship = new SpaceShip(width/2, height - 50, 30, 5, START_HEALTH);
}

function draw() {
  background(0);
  ship.draw();
}
