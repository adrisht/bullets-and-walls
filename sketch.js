var wall,car,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
 bullet.velocityX=speed;
 thickness=random(22,83);
 bullet.depth=wall.depth+1;
}

function draw() {
  background("black");

if(hasCollide(bullet,wall)){
 
  var damege=0.5*waight*speed*speed/thickness*thickness*thickness;
  if(damege<100000000){
  wall.shapeColor=color(0,255,0);
       }
   if(damege<100000000){
   wall.shapeColor=color(255,0,0);
             }
}
if(bullet.x=1470){
   bullet.velocityX=0
    }
  consale.log(damege);
drawSprites();
function hasCollide();
bulletright=bullet.x+bullet.width;
wallleft=wall.x;
if(bulletright>wallleft){
  return True
}
return false;
}