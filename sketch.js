var bg;

var iss, issImg, sc, scImg1, scImg2, scImg3, scImg4 ;

var hasDocked = false;

function preload(){
bg = loadImage("images/spacebg.jpg");
issImg = loadImage("images/iss.png");
scImg1 = loadImage("images/spacecraft1.png")
scImg2 = loadImage("images/spacecraft2.png")
scImg3 = loadImage("images/spacecraft3.png")
scImg4 = loadImage("images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  sc = createSprite(285,280);
  sc.addImage(scImg1)
  sc.scale = 0.15
  iss = createSprite(330,160);
  iss.addImage(issImg)
  iss.scale = 0.7
}

function draw() {
  background(bg);  


  if(!hasDocked){
    sc.y <= (iss.y+70) && sc.x <= (iss.x-10)

    if(keyCode === LEFT_ARROW){
      sc.addImage(scImg3)
      sc.position.x = sc.position.x + -2
    }

    if(keyCode === RIGHT_ARROW){
      sc.addImage(scImg4)
      sc.position.x = sc.position.x + 2
    }

    if(keyCode === UP_ARROW){
      sc.addImage(scImg2)
      sc.position.y = sc.position.y + -2 
    }

    if(keyCode === DOWN_ARROW){
      sc.addImage(scImg1)
      sc.position.y = sc.position.y + 2 
    }


    if(sc.isTouching(iss)){
      textSize(20)
      text("Docking Succesful!",260,300)
    }
  }
  drawSprites();
}