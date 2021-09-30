var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    //Cargar aqui las imagenes
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    //carga los sprites de Tom y Jerry
   canvas = createCanvas(1000,800);

   tom = createSprite(870,600);
   tom.addAnimation("tomsleeping",tomImg1);
   tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addAnimation("justjerry",jerryImg1);
   jerry.scale = 0.2;
}

function draw() {

    background(bg);
    //escribe la condición para verificar si Tom y Jerry chocan
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation = ("tom3",tomImg3);
        tom.x = 300;
        tom.scale = 0.2
        tom.changeAnimation("tom3");

        jerry.addAnimation = ("jerry3",jerryImg3);
        jerry.scale = 0.2
        jerry.changeAnimation("jerry3");
    }
  

    drawSprites();
}
 
function keyPressed(){
    //escribe aqui el código para la animación del movimiento y cambio
if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}