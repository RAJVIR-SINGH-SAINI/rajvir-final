var girl,girl_walk,girl_jump,girl_run;
var girl_idle;
var cave,tunnel,beeImg;
var dImg;
var edges;
var demon;
var gameState="first"
var fireImg;
function preload(){
 girl_idle = loadAnimation("girl image/1/idle.png");
 //girl_walk = loadAnimation("girl image/1/walk1.png,","girl image/1/walk2.png","girl image/1/walk3.png");
cave = loadImage("pics/cave.jpg");
tunnel = loadImage("pics/tunnel.jpg");
beeImg = loadAnimation("pics/bee1.png","pics/bee2.png","pics/bee3.png")
dImg=loadImage("pngegg.png")
fireImg=loadImage("fire.png")
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-50)
    mazeBack = createSprite(865,270,50,50);
    player = createSprite(10,185);
    player.addAnimation("idle",girl_idle);
    player.scale = 0.03;
   // player.addAnimation("walk",girl_walk);
   // mazeBack.addImage(bushImg);
    wallG = createGroup();
    topWall = createSprite(750,-5,2999,10)
    topWall.visible = false;
    bottomWall = createSprite(750,555,2999,10);
    bottomWall.visible = false;
    leftWall = createSprite(-2,275,10,1000);
    leftWall.visible = false;
    wallG.add(topWall);
    wallG.add(bottomWall);
    wallG.add(leftWall);
  
    mazeWall1 = createSprite(600,80,10,160);
    wallG.add(mazeWall1);
    mazeWall2 = createSprite(600,390,10,320);
    wallG.add(mazeWall2);
    mazeWall3 = createSprite(650,275,10,420);
    wallG.add(mazeWall3);
    mazeWall4 = createSprite(710,60,130,10);
    wallG.add(mazeWall4);
    mazeWall5 = createSprite(700,275,10,320);
    wallG.add(mazeWall5);
    mazeWall6 = createSprite(765,490,240,10);
    wallG.add(mazeWall6);
    mazeWall7 = createSprite(950,60,240,10);
    wallG.add(mazeWall7);
    mazeWall7 = createSprite(1065,115,10,100);
    wallG.add(mazeWall7);
    mazeWall8 = createSprite(1095,105,50,10);
    wallG.add(mazeWall8);
    mazeWall9 = createSprite(1120,120,10,280);
    wallG.add(mazeWall9);
    mazeWall10 = createSprite(1120,430,10,240);
    wallG.add(mazeWall10);
    mazeWall11 = createSprite(1065,360,10,270);
    wallG.add(mazeWall11);
    mazeWall12 = createSprite(1000,490,120,10);
    wallG.add(mazeWall12);
    mazeWall13 = createSprite(1010,525,10,60);
    wallG.add(mazeWall13);
    mazeWall14 = createSprite(1010,400,10,70);
    wallG.add(mazeWall14);
    mazeWall15 = createSprite(880,430,260,10);
    wallG.add(mazeWall15);
    mazeWall16 = createSprite(850,380,200,10);
    wallG.add(mazeWall16);
    mazeWall17 = createSprite(755,275,10,200);
    wallG.add(mazeWall17);
    mazeWall18 = createSprite(822,110,254,10);
    wallG.add(mazeWall18);
    mazeWall19 = createSprite(945,275,10,200);
    wallG.add(mazeWall19);
    mazeWall20 = createSprite(1010,200,10,190);
    wallG.add(mazeWall20);
    mazeWall21 = createSprite(1035,275,60,10);
    wallG.add(mazeWall21);
    mazeWall22 = createSprite(975,230,60,10);
    wallG.add(mazeWall22);
    mazeWall22 = createSprite(850,80,10,50);
    wallG.add(mazeWall22);
    mazeWall23 = createSprite(850,140,10,50);
    wallG.add(mazeWall23);
    mazeWall24 = createSprite(890,255,10,160);
    wallG.add(mazeWall24);
    mazeWall25 = createSprite(850,170,90,10);
    wallG.add(mazeWall25);
    mazeWall26 = createSprite(810,250,10,70);
    wallG.add(mazeWall26);
    mazeWall27 = createSprite(827,332,50,10);
    wallG.add(mazeWall27);
    mazeWall28 = createSprite(850,250,80,10);
    wallG.add(mazeWall28);
    mazeWall28 = createSprite(850,342,10,80);
    wallG.add(mazeWall28);
    mazeWall29 = createSprite(810,462,10,55);
    wallG.add(mazeWall29);
    mazeWall28 = createSprite(880,407,10,50);
    wallG.add(mazeWall28);
    mazeWall29 = createSprite(860,5,520,10);
    wallG.add(mazeWall29);
    mazeWall29 = createSprite(860,545,520,10);
    wallG.add(mazeWall29);
    
    tunnelWall1 = createSprite(250,155,710,10);
    tunnelWall2 = createSprite(250,225,710,10);
    tunnelWall3= createSprite(1300,255,350,10);
    tunnelWall4 = createSprite(1300,315,350,10);
    wallG.add(tunnelWall1);
    wallG.add(tunnelWall2);
    wallG.add(tunnelWall3);
    wallG.add(tunnelWall4);
    wallG.setColorEach("rgb(130,90,71)")
    demon=createSprite(displayWidth-200,50);
    demon.addImage(dImg)
    demon.visible=false;

   edg1=createSprite(displayWidth/2,30,displayWidth,10)
   edg2=createSprite(displayWidth/2,displayHeight-75,displayWidth,10)


}
function draw(){
background(cave);
textSize(25);
text(mouseX+"-"+mouseY,500,100);
edges=createEdgeSprites();
if(keyWentDown(RIGHT_ARROW)){ 
    player.velocityX = +2; 
} 
if(keyWentUp(RIGHT_ARROW)){ 
    player.velocityX = 0; 
}

if(keyWentDown(LEFT_ARROW)){ 
    player.velocityX = -2; 
} 
if(keyWentUp(LEFT_ARROW)){ 
    player.velocityX = 0; 
}

if(keyWentDown(UP_ARROW)){ 
    player.velocityY = -2; 
} 
if(keyWentUp(UP_ARROW)){ 
    player.velocityY = 0; 
}

if(keyWentDown(DOWN_ARROW)){ 
    player.velocityY = +2; 
} 
if(keyWentUp(DOWN_ARROW)){ 
    player.velocityY = 0; 
}

player.collide(tunnelWall1);
player.collide(tunnelWall2);
demon.bounceOff(edg1)
demon.bounceOff(edg2)
 
    spawnBees();


  if(player.x>displayWidth-75) 
  {
      gameState="second"
      wallG.destroyEach();
      player.x=50;
      cave=loadImage("bg3.jpg")
      player.scale=0.3;
      demon.visible=true;
    
     demon.velocityY=2;
     
      demon.scale=0.4
  } 
  if(gameState==="second")
  {
      if(frameCount%300===0){
          var fire=createSprite(demon.x-55,demon.y,20,10);

          fire.addImage(fireImg)
          fire.velocityX=random(-1,-3)
          fire.scale=0.5

      }
  }
  
    drawSprites();
    
}

function spawnBees(){
  if(frameCount % 300 === 0 ){
    var bee = createSprite(displayWidth,200);
    bee.addAnimation("fly",beeImg);
    bee.velocityX = random(-1,2);
    bee.velocityY = random(-1,2);
    bee.scale = 0.1;

  }  


}