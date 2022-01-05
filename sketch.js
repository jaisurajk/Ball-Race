let leftBall;
let rightBall; 
let allDebris = [];
let player1;
let player2;

const NUM_DEBRIS = 50;


let leftScore; 
let rightScore;
let player1score;
let player2score;

let BallImage; // this is gonna have our gorgeous ship

let timer;
function setup() {
  createCanvas(400, 400);
  
  // get the spaceship image from your project-folder
  //spaceshipImage = loadImage('spaceship.png');
  BallImage = loadImage('Ball.png');
  
  // pass the image into the ship object
  leftBall = new Ball(width * 0.33, BallImage);
  rightBall = new Ball(width * 0.66, BallImage);
  
  for (let i = 0; i < NUM_DEBRIS; i++) {
  	allDebris.push(new Debris());
  }

  
  // creating the score objects
  leftScore = new Score(width * 0.33 - 40);
  rightScore = new Score(width * 0.66 + 40);
  player1 = new Score(width*0.167-20);
  player2 = new Score(width*0.167+20);

  timer = new Timer();

  
}

function draw() {
  //background(0);
  background(247);
  
  leftBall.update();
  rightBall.update();
  
  leftBall.display();
  rightBall.display();
  
  updateDebrisAndCheckCollisions();
  
  
  // pass in the players current score
  leftScore.display(leftBall.score);
  rightScore.display(rightBall.score);
  //player1Score.display(player1.score);
  
  timer.display();
  
  if (timer.y >= height) {
  	noLoop();
  }
}


// sexy function
function updateDebrisAndCheckCollisions() {
  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
  	allDebris[i].display();
    
    if (allDebris[i].hasHitBall(leftBall)) {
    	leftBall.respawn();
    } else if (allDebris[i].hasHitBall(rightBall)) {
    	rightBall.respawn();
    }
  }
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
  	rightBall.isUp = true;
    rightBall.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightBall.isDown = true;
    rightBall.isUp = false;
  }
  
  
  if (keyCode == 87) {
  	// keycode is 'w'
    leftBall.isUp = true;
    leftBall.isDown = false;
  } else if (keyCode == 83) {
  	// keycode is 's'
    leftBall.isDown = true;
    leftBall.isUp = false;
  }
}


function keyReleased() {
	if (keyCode == UP_ARROW) {
  	rightBall.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightBall.isDown = false;
  }
  
  if (keyCode == 87) {
    leftBall.isUp = false;
  } else if (keyCode == 83) {
    leftBall.isDown = false;
  }
}


