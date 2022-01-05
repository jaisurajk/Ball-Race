class Debris {

  
  constructor() {
    this.r = 5;
    this.resetDebris();
  }
  
  resetDebris() {
  	
    this.y = random(height - 70);
    
    //let spawnLeftSide = random(1) < 0.5;
    let spawnLeftSide = random(1) < 1;
    
    if (spawnLeftSide) {
    	this.x = random(-width, 0);	
    	this.isGoingLeft = false;
    } else {
    	this.x = random(width, width * 2);
      this.isGoingLeft = true;
    }
    
    
  }
  
  update() {
  	if (this.isGoingLeft) {
    	this.x --;
    } else {
    	this.x ++;
    }
    
    if (this.isOffScreen()) {
    	this.resetDebris();
    }
  }
  
  
  isOffScreen() {
    if (this.isGoingLeft && this.x < -5) {
    	return true;
    } else if(!this.isGoingLeft && this.x > width + 5) {
    	return true;
    }
    return false;
  }
  
  display() {
  	//ellipse(this.x, this.y, this.r * 2, this.r * 2);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  hasHitBall(ball) {
  	//  if (dist(this.x, this.y, ship.x, ship.y) < this.r + ship.r) {
    //  	return true;
    //  }
     if (dist(this.x, this.y, ball.x, ball.y) < (this.r+ball.r)) {
     	return true;
     }
    return false
  }

}