var bg;
var tunnel;
var player;
var flag=0;
var player_img;
var corona1
var count;
var button;
var platFormimg;
var platForm
var bullet_img;
var bulletGroup;
var coronaGroup;
var corona;
function preload()
{
  bullet_img=loadImage("syringe.png");
  bg=loadImage("images/Background.jpg");
  platFormimg=loadImage("platform.jpeg")
  tree=loadImage("images/Tile_34.png");
  player_img=loadAnimation("images/run1.png","images/run2.png","images/run3.png");
  corona1=loadImage("corona/corona2.png");
}
function setup() {
 
  createCanvas(displayWidth,displayHeight-250);
  bulletGroup=new Group();
   ground=createSprite(displayWidth/2,displayHeight-255,displayWidth,20);
  player=createSprite(100,displayHeight-300);
  player.setCollider("rectangle",0,0,player.width+100,player.height+250);
  player.addAnimation("run",player_img);
  player.scale=0.5;
  button=createButton("lifeline");
  button.position(100,100);
  platForm=createSprite(displayWidth/2,400);
  platForm.addImage(platFormimg);
  platForm.visible=false;
  
}

function draw() {
  background(bg);
  spawnCorona();
  player.collide(ground);

 button.mousePressed(()=>{
  platForm.visible=true;
   platForm.scale=1;
   platForm.velocityX=-2;
 })
 if(flag===1){

 
 if(bulletGroup.isTouching(corona)){
  corona.destroy();
 }
}

 if (keyDown("RIGHT_ARROW")) {
   player.x+=10;
 }
 if (keyDown("LEFT_ARROW")) {
  player.x-=10;
}
 
 player.collide( platForm);
  drawSprites();
  
}
function mousePressed(){
  spawnBullets();
}


function spawnCorona(){
  if(frameCount%100===0){

  flag=1;
  corona=createSprite(displayWidth,displayHeight/2);
  corona.addImage(corona1);
  corona.velocityX=-4;
  corona.y=random(0,800);
  corona.scale=0.7;
  
  }
}
 function spawnBullets()
 {
   console.log("hellow")
   var bullet =createSprite(player.x,player.y,50,50);
   bullet.addImage(bullet_img);
   bullet.velocityX=4;
   bullet.scale=0.2;
   bulletGroup.add(bullet);
   
 }
 