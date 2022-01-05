class Ball {

  constructor(x, BallImage) {
   	this.x = x;
    this.score = 0;
    this.r = 15;
    this.respawn();
    // store the image in the ship object
    this.BallImage = BallImage;
  }
  
  update() {
  	if (this.isUp && this.y > 0) {
    	this.up();
    } else if (this.isDown && this.y < height - 20) {
    	this.down();
    }
    
    if (this.hasPlayerScoredAPoint()) {
    	this.score ++;
      this.respawn();
    }
  }
  
  display() {
    
    // display our beautiful ship to the world!
    imageMode(CENTER);
    image(this.BallImage, this.x, this.y, this.r*3, this.r*3);
  }
  
  
  up() {
  	this.y--;
  }
  
  down() {
  	this.y++;
  }
  
  hasPlayerScoredAPoint() {
  	if (this.y <= 0) {
    	return true;
    }
    return false;
  }
  
  respawn() {
    this.y = height - 20;
    this.isUp = false
    this.isDown = false;
  }
  

}