class Gamestart{
    constructor(){

    }
    start(){

        ground= new createSprite(displayWidth, displayHeight);
        ground.addImage("backgroungimg",groundimg);
        ground.velocityY=5;
        ground.y=ground.height/2;
    }
}