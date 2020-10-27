var movingBall, stillBall;

var fixedBall1, fixedBall2;

function setup() {
  createCanvas(800,400);
  movingBall = createSprite(400, 200, 50, 50);
  stillBall = createSprite(400, 200, 50, 50);

  fixedBall1 = createSprite(100, 200, 50, 50);
  fixedBall2 = createSprite(700, 200, 50, 50);

  movingBall.shapeColor = "blue";
  stillBall.shapeColor = "green";

  fixedBall1.shapeColor = "yellow";
  fixedBall2.shapeColor = "yellow";


}

function draw() {
  background(0);
  movingBall.x = World.mouseX;
  movingBall.y = World.mouseY;

  /*if(isTouching()){
    movingBall.shapeColor = "red";
    stillBall.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    stillBall.shapeColor = "green";
  }*/

  if(isTouching(movingBall,fixedBall2)){
    movingBall.shapeColor = "red";
    fixedBall2.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    fixedBall2.shapeColor = "yellow";
  }

  drawSprites();
}

