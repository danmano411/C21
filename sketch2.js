var movingBall, stillBall;

function setup() {
  createCanvas(800,400);
  movingBall = createSprite(200, 400, 50, 50);
  stillBall = createSprite(200, 200, 50, 50);

  movingBall.velocityY = -4;
  stillBall.velocityY = 4;

  movingBall.shapeColor = "blue";
  stillBall.shapeColor = "green";
}

function draw() {
  background(0);
  
  //bounceOff(movingBall, stillBall);
  
  if(isTouching(movingBall,stillBall)){
    movingBall.shapeColor = "red";
    stillBall.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    stillBall.shapeColor = "green";
  }

  drawSprites();
}
