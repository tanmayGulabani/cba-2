const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("images/dustbingreen.png");
    paperImg = loadImage("images/paper.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    paper= createSprite(250,540,20);
    paper.addImage(paperImg);
    paper.scale=0.15;

    dustbin = new Dustbin();
    crumpledPaper = new Paper();
}

function draw(){
    background("black");
    Engine.update(engine);

    
    ground.display();
    crumpledPaper.display();
   dustbin.display();
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}