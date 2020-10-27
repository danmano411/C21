function bounceOff(object1, object2){
    var distanceBetweenRight = object1.x - object2.x;
    var distanceBetweenLeft = object2.x - object1.x;
    var maxDistanceX = (object1.width + object2.width)/2
  
    var distanceBetweenTop = object1.y - object2.y;
    var distanceBetweenBottom = object2.y - object1.y;
    var maxDistanceY = (object1.height + object2.height)/2
  
    if(distanceBetweenRight < maxDistanceX && distanceBetweenLeft < maxDistanceX){
      object1.velocityX *= -1;
      object2.velocityX *= -1;
      object1.shapeColor = "red";
      object2.shapeColor = "red";
    }else{
      object1.shapeColor = "blue";
      object2.shapeColor = "green";
    }
  
    if(distanceBetweenTop < maxDistanceY && distanceBetweenBottom < maxDistanceY){
      object1.velocityY *= -1;
      object2.velocityY *= -1;
      object1.shapeColor = "red";
      object2.shapeColor = "red";
    }else{
      object1.shapeColor = "blue";
      object2.shapeColor = "green";
    }
}

function isTouching(object1,object2){

    var distanceBetweenRight = object1.x - object2.x;
    var distanceBetweenLeft = object2.x - object1.x;
    var maxDistanceX = (object1.width + object2.width)/2
  
    var distanceBetweenTop = object1.y - object2.y;
    var distanceBetweenBottom = object2.y - object1.y;
    var maxDistanceY = (object1.height + object2.height)/2
  
    if(distanceBetweenRight < maxDistanceX && distanceBetweenLeft < maxDistanceX && distanceBetweenTop < maxDistanceY && distanceBetweenBottom < maxDistanceY){
      
      return true;
      
    }else{
  
      return false;
      
    }
  }