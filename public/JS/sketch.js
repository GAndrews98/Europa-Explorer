//Consts
const START_HEALTH = 100;

//Global variables
var ship;

//Arrays that hold game objects
var lasers = [];

//Runs once everytime the page refreshes
function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 4);
  console.log(width/2);
  ship = new SpaceShip();
}

//Loops thought these functions 60 times per second
function draw() {
  background(0);
  updateLasers();
  ship.draw();
  ship.update();
  ship.turn();
  ship.edges();
}

//Once a key is released then it will stop moving the ship
function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

//This will check if a key is being pressed and deal with the input
function keyPressed() {
  if (keyCode == 32) {
    lasers.push(new Laser(ship.pos, 5, 6, 12, ship.heading));
  }
  else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  }
  else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  }
  else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}

//This will call all of the needed laser functions
function updateLasers() {
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].draw();
    lasers[i].update();
    if (lasers.length > 0 && (lasers[i].y < 0 || lasers[i].isAlive == false)) {
      lasers.splice(i, 1);
    }
  }
}
