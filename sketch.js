var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(400,500,50,80);
  gameObject1.shapeColor = "blue";
  gameObject2=createSprite(300,100,30,50);
  gameObject2.shapeColor = "white";
  gameObject3=createSprite(250,420,50,20);
  gameObject3.shapeColor = "yellow";
  gameObject4=createSprite(150,370,40,80);
  gameObject4.shapeColor = "orange";
}



function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if ( isTouch(movingRect,gameObject1)) {
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "pink";
    gameObject1.shapeColor = "pink";
  }
  drawSprites();
}
  function isTouch(object1,object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
  }
  else {
   return false;
  }
  
  }