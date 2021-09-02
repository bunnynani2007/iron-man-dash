var hero, egroup, enemy, e1, e2, e3;
var heroimg, e1img, e2img, e3img, groundimg, backgroundimg;

function preload(){
    heroimg=loadImage("/Images/hero.png");
    e1img=loadImage("/Images/e1.png");
    backgroundimg=loadImage("background.jpg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    hero=new createSprite(displayWidth/2,displayHeight/2-30,15,15);
    hero.addImage("fly", heroimg);
    hero.scale=0.5;
    egroup=new Group();
}

function draw(){
    background(bgimg1);
    if(gameStatus===0){
        formobject.display();
    }else{
        game.Gamestate.display();
    }  
}