// GAME NAME BRICK BREAKER

var brickImg,brick11Img,brick21Img,bgImg,bg1,bouncer,ball,ballImg,inv,inv2,inv3,inv4,brick,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22,brick23,brick24,brick25,brick226,brick27,brick28,brick29,brick30;
var Serve = 0;
var Play = 1;
var End = 2;
var gameState = Serve;


function preload(){
ballImg = loadImage("ball.png");
bgImg = loadImage("bg.jpg");
brickImg = loadImage("brick.png");
brick11Img = loadImage("brick11.png");
brick21Img = loadImage("brick21.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
bg1 = createSprite(width/2,height/2)
bg1.addImage(bgImg)
bg1.scale = 3.5


     bouncer = createSprite(width/2,height/1.05,width/20,height/30);

     ball = createSprite(width/2,height/1.09,width/60,height/30);
     ball.addImage(ballImg)
     ball.scale = 0.04
       inv = createSprite(width/2,height/100,10000,10)
       inv.visible = false
       inv2 = createSprite(width/1200,height/2,10,10000)
       inv2.visible = false
       inv3 = createSprite(width/1,height/2,10,10000)
       inv3.visible = false
       inv4 = createSprite(width/2,height/1,10000,10)
       inv4.visible = false

       brick = createSprite(width/5,height/5,width/30,height/30)
       brick.addImage(brickImg)
       brick.scale = 0.1
       brick.shapeColor = "pink"
       brick2 = createSprite(width/5,height/3,width/30,height/30)
       brick2.addImage(brickImg)
       brick2.scale = 0.1
       brick2.shapeColor = "pink"
       brick3 = createSprite(width/5,height/2.2,width/30,height/30)
       brick3.addImage(brickImg)
       brick3.scale = 0.1
       brick3.shapeColor = "pink"
       brick4 = createSprite(width/5,height/1.7,width/30,height/30)
       brick4.addImage(brickImg)
       brick4.scale = 0.1
       brick4.shapeColor = "pink"
       brick5 = createSprite(width/5,height/1.4,width/30,height/30)
       brick5.addImage(brickImg)
       brick5.scale = 0.1
       brick5.shapeColor = "pink"
       brick6 = createSprite(width/3,height/5,width/30,height/30)
       brick6.addImage(brickImg)
       brick6.scale = 0.1
       brick6.shapeColor = "pink"
       brick7 = createSprite(width/3,height/3,width/30,height/30)
       brick7.addImage(brickImg)
       brick7.scale = 0.1
       brick7.shapeColor = "pink"
       brick8 = createSprite(width/3,height/2.2,width/30,height/30)
       brick8.addImage(brickImg)
       brick8.scale = 0.1
       brick8.shapeColor = "pink"
       brick9 = createSprite(width/3,height/1.7,width/30,height/30)
       brick9.addImage(brickImg)
       brick9.scale = 0.1
       brick9.shapeColor = "pink"
       brick10 = createSprite(width/3,height/1.4,width/30,height/30)
       brick10.addImage(brickImg)
       brick10.scale = 0.1
       brick10.shapeColor = "pink"

       brick11 = createSprite(width/2.2,height/5,width/30,height/30)
       brick11.addImage(brick11Img)
       brick11.scale = 0.1
       brick11.shapeColor = "blue"
       brick12 = createSprite(width/2.2,height/3,width/30,height/30)
       brick12.addImage(brick11Img)
       brick12.scale = 0.1
       brick12.shapeColor = "blue"
       brick13 = createSprite(width/2.2,height/2.2,width/30,height/30)
       brick13.addImage(brick11Img)
       brick13.scale = 0.1
       brick13.shapeColor = "blue"
       brick14 = createSprite(width/2.2,height/1.7,width/30,height/30)
       brick14.addImage(brick11Img)
       brick14.scale = 0.1
       brick14.shapeColor = "blue"
       brick15 = createSprite(width/2.2,height/1.4,width/30,height/30)
       brick15.addImage(brick11Img)
       brick15.scale = 0.1
       brick15.shapeColor = "blue"
       brick16 = createSprite(width/1.7,height/5,width/30,height/30)
       brick16.addImage(brick11Img)
       brick16.scale =0.1
       brick16.shapeColor = "blue"
       brick17 = createSprite(width/1.7,height/3,width/30,height/30)
       brick17.addImage(brick11Img)
       brick17.scale = 0.1
       brick17.shapeColor = "blue"
       brick18 = createSprite(width/1.7,height/2.2,width/30,height/30)
       brick18.addImage(brick11Img)
       brick18.scale = 0.1
       brick18.shapeColor = "blue"
       brick19 = createSprite(width/1.7,height/1.7,width/30,height/30)
       brick19.addImage(brick11Img)
       brick19.scale = 0.1
       brick19.shapeColor = "blue"
       brick20 = createSprite(width/1.7,height/1.4,width/30,height/30)
       brick20.addImage(brick11Img)
       brick20.scale = 0.1
       brick20.shapeColor = "blue"

       brick21 = createSprite(width/1.4,height/5,width/30,height/30)
       brick21.addImage(brick21Img)
       brick21.scale = 0.1
       brick21.shapeColor = "green"
       brick22 = createSprite(width/1.4,height/3,width/30,height/30)
       brick22.addImage(brick21Img)
       brick22.scale = 0.1
       brick22.shapeColor = "green"
       brick23 = createSprite(width/1.4,height/2.2,width/30,height/30)
       brick23.addImage(brick21Img)
       brick23.scale = 0.1
       brick23.shapeColor = "green"
       brick24 = createSprite(width/1.4,height/1.7,width/30,height/30)
       brick24.addImage(brick21Img)
       brick24.scale = 0.1
       brick24.shapeColor = "green"
       brick25 = createSprite(width/1.4,height/1.4,width/30,height/30)
       brick25.addImage(brick21Img)
       brick25.scale = 0.1
       brick25.shapeColor = "green"
       brick26 = createSprite(width/1.2,height/5,width/30,height/30)
       brick26.addImage(brick21Img)
       brick26.scale = 0.1
       brick26.shapeColor = "green"
       brick27 = createSprite(width/1.2,height/3,width/30,height/30)
       brick27.addImage(brick21Img)
       brick27.scale = 0.1
       brick27.shapeColor = "green"
       brick28 = createSprite(width/1.2,height/2.2,width/30,height/30)
       brick28.addImage(brick21Img)
       brick28.scale = 0.1
       brick28.shapeColor = "green"
       brick29 = createSprite(width/1.2,height/1.7,width/30,height/30)
       brick29.addImage(brick21Img)
       brick29.scale = 0.1
       brick29.shapeColor = "green"
       brick30 = createSprite(width/1.2,height/1.4,width/30,height/30)
       brick30.addImage(brick21Img)
       brick30.scale = 0.1
       brick30.shapeColor = "green"
    }

function draw(){
background("yellow");

//bouncer.collide(inv2)
ball.bounceOff(inv)
ball.bounceOff(inv2)
ball.bounceOff(inv3)
ball.bounceOff(bouncer)
drawSprites();
   


if(gameState===Serve){
    
/*bouncer.x = mouseX;
ball.x = bouncer.x;*/

if (keyDown("right")){
    bouncer.x = bouncer.x + 20;
    ball.x = ball.x + 20
}

if(keyDown("left")){
     bouncer.x = bouncer.x - 20
     ball.x = ball.x - 20
}
textSize (25);
stroke ("black")
strokeWeight(30)
fill (211,255,199);
textFont("comic sans ms")
text ("press UP ARROW to start the game",width/2.5,height/2);
 if(keyDown("up") || touches.length){
gameState = Play;
ball.velocityX = 5;
    ball.velocityY = -15;
               }
}

if(gameState===Play){
   // bouncer.x = mouseX;
   
  if((brick.x===100000000 && brick2.x===100000000 && brick3.x===100000000 && brick4.x===100000000 && brick5.x===100000000 && brick6.x===100000000 && brick7.x===100000000 && brick8.x===100000000 && brick9.x===100000000 && brick10.x===100000000 && (brick11.x===100000000 && brick12.x===100000000 && brick13.x===100000000 && brick14.x===100000000 && brick15.x===100000000 && brick16.x===100000000 && brick17.x===100000000 && brick18.x===100000000 && brick19.x===100000000 && brick20.x===100000000 && (brick21.x===100000000 && brick22.x===100000000 && brick23.x===100000000 && brick24.x===100000000 && brick25.x===100000000 && brick26.x===100000000 && brick27.x===100000000 && brick28.x===100000000 && brick29.x===100000000 && brick30.x===100000000)))){
      textSize(30)
      fill("blue")
      stroke("black")
      strokeWeight(1000)
      textFont("comic sans ms")
      text("YOU WON🥂🎆🎇🤘🏆🏅 (refresh you page to play again)",width/2,height/2)
ball.velocityX = 0;
ball.velocityY = 0;

  }
   
   


    if (keyDown("right")){
        bouncer.x = bouncer.x + 20;
    }

    if(keyDown("left")){
         bouncer.x = bouncer.x - 20
    }

    if(ball.isTouching(inv4)){
        gameState = End;
    }

    if(ball.isTouching(brick)){
        ball.bounceOff(brick);
        brick.x = 100000000
    }

    if(ball.isTouching(brick2)){
        ball.bounceOff(brick2);
        brick2.x = 100000000
    }

    if(ball.isTouching(brick3)){
        ball.bounceOff(brick3);
        brick3.x = 100000000
    }

    if(ball.isTouching(brick4)){
        ball.bounceOff(brick4);
        brick4.x = 100000000
    }
    if(ball.isTouching(brick5)){
        ball.bounceOff(brick5);
        brick5.x = 100000000
    }


    if(ball.isTouching(brick6)){
        ball.bounceOff(brick6);
        brick6.x = 100000000
    }

    if(ball.isTouching(brick7)){
        ball.bounceOff(brick7);
        brick7.x = 100000000
    }

    if(ball.isTouching(brick8)){
        ball.bounceOff(brick8);
        brick8.x = 100000000
    }

    if(ball.isTouching(brick9)){
        ball.bounceOff(brick9);
        brick9.x = 100000000
    }
    if(ball.isTouching(brick10)){
        ball.bounceOff(brick10);
        brick10.x = 100000000
    }





    if(ball.isTouching(brick11)){
        ball.bounceOff(brick11);
        brick11.x = 100000000
    }

    if(ball.isTouching(brick12)){
        ball.bounceOff(brick12);
        brick12.x = 100000000
    }

    if(ball.isTouching(brick13)){
        ball.bounceOff(brick13);
        brick13.x = 100000000
    }

    if(ball.isTouching(brick14)){
        ball.bounceOff(brick14);
        brick14.x = 100000000
    }
    if(ball.isTouching(brick15)){
        ball.bounceOff(brick15);
        brick15.x = 100000000
    }


    if(ball.isTouching(brick16)){
        ball.bounceOff(brick16);
        brick16.x = 100000000
    }

    if(ball.isTouching(brick17)){
        ball.bounceOff(brick17);
        brick17.x = 100000000
    }

    if(ball.isTouching(brick18)){
        ball.bounceOff(brick18);
        brick18.x = 100000000
    }

    if(ball.isTouching(brick19)){
        ball.bounceOff(brick19);
        brick19.x = 100000000
    }
    if(ball.isTouching(brick20)){
        ball.bounceOff(brick20);
        brick20.x = 100000000
    }






    if(ball.isTouching(brick21)){
        ball.bounceOff(brick21);
        brick21.x = 100000000
    }

    if(ball.isTouching(brick22)){
        ball.bounceOff(brick22);
        brick22.x = 100000000
    }

    if(ball.isTouching(brick23)){
        ball.bounceOff(brick23);
        brick23.x = 100000000
    }

    if(ball.isTouching(brick24)){
        ball.bounceOff(brick24);
        brick24.x = 100000000
    }
    if(ball.isTouching(brick25)){
        ball.bounceOff(brick25);
        brick25.x = 100000000
    }


    if(ball.isTouching(brick26)){
        ball.bounceOff(brick26);
        brick26.x = 100000000
    }

    if(ball.isTouching(brick27)){
        ball.bounceOff(brick27);
        brick27.x = 100000000
    }

    if(ball.isTouching(brick28)){
        ball.bounceOff(brick28);
        brick28.x = 100000000
    }

    if(ball.isTouching(brick29)){
        ball.bounceOff(brick29);
        brick29.x = 100000000
    }
    if(ball.isTouching(brick30)){
        ball.bounceOff(brick30);
        brick30.x = 100000000
    }

}

if(gameState===End){
    textSize(25)
    fill ("white")
    stroke("green");
    textFont("comic sans ms")
strokeWeight(25)
text ("YOU LOOSE👎🤣😜 (refresh you page to play again)",width/2.5,height/2);
if(keyDown("r")){
    gameState = Play;
    ball.x = width/2;
    ball.y = height/1.09
    bouncer.x = width/2;
    bouncer.y = height/1.05
    bouncer.x = mouseX;
   
}
}

}
