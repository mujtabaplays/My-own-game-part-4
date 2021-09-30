
function preload() {
  bg=loadImage("Mygameimages/manssionimage1.jpg")
  sasimg=loadImage("Mygameimages/SAS.png")
  df=loadImage("Mygameimages/deltaforceguy.png")
  bulletimg=loadImage("Mygameimages/bulletimg.png")
  bulletimg2=loadImage("Mygameimages/bulletimg2.png")
  bulletimg3=loadImage("Mygameimages/bulletimg3.png")
  bulletimg4=loadImage("Mygameimages/bulletimg4.png")
  bulletimg5=loadImage("Mygameimages/bullet5img.png")
  bulletSound=loadSound("Gunshot.mp3")
}

function setup() {
  createCanvas(1450,700);

  sas=createSprite(200, 380, 50, 50);
  sas.addImage(sasimg)
  sas.scale = 0.4
  
  deltaforce=createSprite(1200, 400, 50, 50)
  deltaforce.addImage(df)
  deltaforce.scale = 0.3

  
}

function draw() {
  background(bg);  

  if(keyDown("LEFT_ARROW")){
    sas.x=sas.x-3
  }

  if(keyDown("RIGHT_ARROW")){
    sas.x=sas.x+3
  }

  if(keyDown("UP_ARROW")){
    sas.y=sas.y - 3
  }

  if(keyDown("DOWN_ARROW")){
    sas.y=sas.y+3
  }

  fill("white")
  textSize(25)
  text("Press Space to make the SAS guy shoot",140,40)

  if(keyDown("SPACE")){
   createBulletsas();
  }
  
  fill("white")
  textSize(25)
  text("Press 'Q' to make the delta guy shoot",750,40)
  
  if(keyDown("Q")){
    createBulletdelta();
    bulletSound.play()
  }

  fill("white")
  textSize(25)
  text("Press 'R' to make the delta guy shoot a different bullet",680,120)

  if(keyDown("R")){
    createBulletdeltaTwo();
    bulletSound.play()
  }
  
 
  fill("white")
  textSize(25)
  text("Press 'X' to make the sas shoot a different bullet",80,100)

  if(keyDown("X")){
    createBulletsasTwo();
    bulletSound.play()
  }
  

  if(keyDown("A")){
     deltaforce.x=deltaforce.x  - 3
  }
   
  if(keyDown("D")){
    deltaforce.x=deltaforce.x + 3
  }

  if(keyDown("W")){
    deltaforce.y=deltaforce.y - 3
  }

  if(keyDown("S")){
    deltaforce.y=deltaforce.y + 3
  }

  

  
 


  drawSprites();
}


function createBulletsas() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletimg);
  bullet.x = 360;
  bullet.y= sas.y;
  bullet.velocityX = +3;
  bullet.lifetime = 500;
  bullet.scale = 0.1; 
}

function createBulletdelta() {  
  var bullet2= createSprite(100, 100, 60, 10);
  bullet2.addImage(bulletimg2);
  bullet2.x = 1200;
  bullet2.y= deltaforce.y;
  bullet2.velocityX = -3;
  bullet2.lifetime = 500;
  bullet2.scale = 0.3; 
}

function createBulletdeltaTwo() {
  var bullet4= createSprite(100, 100, 60, 10);
  bullet4.addImage(bulletimg4);
  bullet4.x = 1200;
  bullet4.y= sas.y;
  bullet4.velocityX = -3;
  bullet4.lifetime = 500;
  bullet4.scale = 0.1; 
}

function createBulletsasTwo() {
  var bullet5= createSprite(100, 100, 60, 10);
  bullet5.addImage(bulletimg5);
  bullet5.x = 360;
  bullet5.y= sas.y;
  bullet5.velocityX = +3;
  bullet5.lifetime = 500;
  bullet5.scale = 0.1; 
}






