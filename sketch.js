var moving,fixed;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(100, 200, 50, 50);
  fixed.shapeColor="green"
  moving=createSprite(600, 200, 80, 50);
  moving.shapeColor="green"

  fixed.velocityX=2;
  moving.velocityX=-2;
  
}

//fixed.width = 50;
//fixed.width/2=25

//moving.width=80
//moving.width/2=40




function draw() {
  background("yellow");  
  //moving.x=World.mouseX;
  //moving.y=World.mouseY;
  console.log(moving.x-fixed.x)
  if(bounceoff(moving, fixed)){
    
    fixed.velocityX=fixed.velocityX*(-1);
    moving.velocityX=moving.velocityX*(-1);
   
  }

/* ********* BOUNCE off *********
 if(moving.x-fixed.x < fixed.width/2 + moving.width/2 && fixed.x-moving.x < fixed.width/2 + moving.width/2 )
  {
     fixed.velocityX=fixed.velocityX*(-1);
      moving.velocityX=moving.velocityX*(-1);
     }
     */





  drawSprites();
}
