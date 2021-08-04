var dock,dockImg1,dockImg2,dockImg3,dockImg4;
var spaceship,spaceshipImg;
var bgImg;
var box

function preload(){
bgImg = loadImage("spacebg.jpg");
spaceshipImg = loadImage("iss.png");
dockImg1 = loadImage("spacecraft1.png");
dockImg2 = loadImage("spacecraft2.png");
dockImg3 = loadImage("spacecraft3.png");
dockImg4 = loadImage("spacecraft4.png");



}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  spaceship = createSprite(400,200,10,10);
  spaceship.addImage(spaceshipImg);
  

  dock = createSprite(500,300,10,10);
  dock.addImage(dockImg1);
  dock.scale = 0.2;
  //dock.debug = true;
  dock.setCollider("rectangle",0,0,100,600);

  box = createSprite(350,230,5,5);


}

function draw() {
  background(bgImg);  

  if(keyCode === LEFT_ARROW){
    dock.addImage(dockImg3);
    dock.velocityX = -2;
    dock.velocityY = 0;

  }

  if(keyCode === RIGHT_ARROW){
    dock.addImage(dockImg4);
    dock.velocityX = 2;
    dock.velocityY = 0;

  }

  if(keyCode === UP_ARROW){
    dock.addImage(dockImg2);
    dock.velocityX= 0;
    dock.velocityY = -2;

  }

  if(keyCode === DOWN_ARROW){
    dock.addImage(dockImg2);
    dock.velocityX= 0;
    dock.velocityY = 2;

  }

  if(dock.isTouching(box)){
    dock.velocityX = 0;
    dock.velocityY = 0;
    dock.addImage(dockImg2);
    fill("blue");
    textSize(35);
    text("Docking Successfull !!!",300,350);


  }
  

  

  

  











  drawSprites();

  
}