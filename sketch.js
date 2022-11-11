var bg
var blueBalloonImg
var redBalloonImg
var greenBalloonImg
var blueBalloon, redBalloon, greenBalloon
var dart1, dartImg, dart2


function preload(){
  bg=loadImage("background.jpg")
  blueBalloonImg= loadImage("BlueBalloon.png")
  redBalloonImg= loadImage("RedBalloon.png")
  greenBalloonImg= loadImage("GreenBalloon.png")
  dartImg= loadImage("Dart.png")

}
function setup() {
  createCanvas(700,900);
 
  
  dart1=createSprite(550,750);
  dart1.addImage(dartImg);
  dart1.scale=0.15;

  
  dart2= createSprite(550,100);
  dart2.addImage(dartImg);
  dart2.scale=0.15;
 
}

function draw() 
{
  background(bg);
  fill("white");
  textSize(16);
  text("player1", dart1.x, dart1.y-50);
  text ("player2", dart2.x, dart2.y-50);
  spawnBalloons();
  
  if(keyDown(UP_ARROW)){
    
    dart1.y=dart1.y-5
  }
  if (keyDown(DOWN_ARROW)){
    
    dart1.y=dart1.y+5
  }

  if(keyDown("w")){
    
    dart2.y=dart2.y-5
  }
  if (keyDown("s")){
    
    dart2.y=dart2.y+5
  }
  
  if(keyDown(RIGHT_ARROW)){
    dart1.velocityX=-35
  }

  if(keyDown("d")){
    dart2.velocityX=-35
  }

  if(dart1.x<0){
    dart1.x=550;
    dart1.y= random(50,850);
    dart1.velocityX=0

  }

  if(dart2.x<0){
    dart2.x=550;
    dart2.y= random(50,850);
    dart2.velocityX=0
  }

  drawSprites();
}

function spawnBalloons(){
  
  if(frameCount%50==0){
    var newBalloon= createSprite(100,random(100,600))
    newBalloon.velocityX=4
    newBalloon.scale=0.7
    var rand=Math.round(random(1,3))
    switch(rand){
      case 1: newBalloon.addImage(blueBalloonImg)
      break;  
      case 2: newBalloon.addImage(redBalloonImg)
      break;
      case 3: newBalloon.addImage(greenBalloonImg)
      break;
      default: break;
    }
  }
}


