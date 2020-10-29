var car;
var wall;
var speed;
var weight;




function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  
  car.shapeColor="orange";

 

  
}

function draw() {
  background("yellow");
  car.velocityX=speed;

 if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight* speed* speed/22500;
if(deformation>180)
{ car.shapeColor=(250,0,0);
}
if(deformation<180 && deformation>100)
{
car.shapeColor=(230,230,0); 
}
if(deformation<100)
{
car.shapeColor=(0,255,0); 
}
}

 drawSprites();
}