var iss;
var spacecraft;
var hasDocked=false;


function preload(){
  bg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  s1=loadImage("spacecraft1.png");
  s2=loadImage("spacecraft2.png");
  s3=loadImage("spacecraft3.png");
  s4=loadImage("spacecraft4.png");
}

function setup() {
createCanvas(800,400);
 iss=createSprite(330,130);
 iss.addImage(issImg);
 iss.scale=0.5;

 spacecraft=createSprite(285,240);
 spacecraft.addImage(s1);
 spacecraft.scale=0.15;


}

function draw() {
  background(bg); 
  
if(!hasDocked){
spacecraft.x=spacecraft.x+random(-1,1);
if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;
}
else if(keyDown("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+2;
  spacecraft.addImage(s4);
}
else if(keyDown("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-2;
  spacecraft.addImage(s3);
}
else if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(s2);
}
else{
spacecraft.addImage(s1);
}
}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked=true;
  textSize(25)
  fill("white")
  text("Docking Succesful",200,300);
}
  drawSprites();
}