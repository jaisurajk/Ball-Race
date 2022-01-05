class Score {

	constructor(x) {
  	this.x = x;
    this.y = height - 20;
  }
  
  
  display(score) {
    fill(140);
    textAlign(CENTER);
    textSize(60);
  	text(score, this.x, this.y);
    textAlign(RIGHT);
    textSize(15);
    text("p1", this.x-40, this.y);
    textAlign(LEFT);
    textSize(15);
    text("p2", this.x+40, this.y);
  }
  

}