function SpaceShip() {

  //Constructor variables
  this.pos = createVector(width / 2, height / 2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;

  //This sets the boosing speed
  this.boosting = function(b) {
    this.isBoosting = b;
  }

  //Updates the ship with the correct boost and position
  this.update = function() {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  //Boosts the ship using vectors and the mult() function
  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  //Draws the ship to the screen
  this.draw = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(0);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  }

  //Checks if the ship is off of the screen and if so, moves the ship to the other side of the screen
  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  //Sets the rotation angle according the 'a'
  this.setRotation = function(a) {
    this.rotation = a;
  }

  //Turns the ship according to the heading value + the rotation value
  this.turn = function() {
    this.heading += this.rotation;
  }

}
