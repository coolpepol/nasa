var bath,brush,drink,eat,gym,gym2,iss,move,sleep
var astronaut,back,e
function preload(){
bath = loadAnimation("bath1.png","bath2.png")
brush = loadImage("brush.png")
drink = loadAnimation("drink1.png","drink2.png")
eat = loadAnimation("eat1.png","eat2.png")
gym = loadAnimation("gym1.png","gym2.png")
gym2 = loadAnimation("gym11.png","gym12.png")
iss = loadImage("iss.png")
move = loadAnimation("move.png") 
sleep = loadImage("sleep.png")
}

function setup() {
  createCanvas(800,400);
  e = createEdgeSprites()
  back = createSprite(400, 200, 50, 50);
  back.addImage("back",iss)
  back.scale = 0.2
  astronaut = createSprite(400,200)
  astronaut.addAnimation("sleep",sleep)
  astronaut.scale = 0.1
  astronaut.bounce(e)
  astronaut.setCollider("rectangle", 0, 0, 50, 80, );
}

function draw() {
  background(255,255,255);
 
  drawSprites();
  fill (20,50,255)
  text("Instructions:",20,20)
  text("Up Arrow = brushing",20,40)
  text("Down Arrow = gyming",20,60)
  text("Left Arrow = eating",20,80)
  text("Right Arrow = bathng",20,100)
  text("M Key = moveing",20,120)
  astronaut.bounceOff(e)
  if(keyDown("UP")){
    astronaut.addAnimation("brush",brush)
    astronaut.changeAnimation("brush")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("DOWN")){
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gym")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("left")){
    astronaut.addAnimation("bath",bath)
    astronaut.changeAnimation("bath")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("right")){
    astronaut.addAnimation("boi",eat)
    astronaut.changeAnimation("boi")
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("M")){
    astronaut.addAnimation("m",move)
    astronaut.changeAnimation("m")
    astronaut.velocityX = random(-3,3)
    astronaut.velocityY = random(-3,3)
  }
}