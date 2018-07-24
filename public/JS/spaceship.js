function SpaceShip(x, y, length, speed, health) {

  this.x = x;
  this.y = y;
  this.length = length;
  this.speed = speed;
  this.health = health;

  this.draw = function() {
    fill(0);
    stroke(255);
    triangle(this.x, this.y, this.x + this.length/2, this.y + this.length, this.x - this.length/2, this.y + this.length);
  }

}
