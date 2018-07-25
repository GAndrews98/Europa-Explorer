//Class for the lasers
function Laser(spos, speed, width, height, angle) {

  //Constructor variables
  this.pos = createVector(spos.x, spos.y);
  this.width = width;
  this.height = height;
  this.speed = speed;
  this.isAlive = true;
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);

  //Updates the lasers to the screen at the right place
  this.update = function() {
    this.pos.add(this.vel);
  }

  //Draws the lasers to the screen
  this.draw = function() {
    fill('red');
    stroke(0);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    this.pos.y -= this.speed;
  }

}
