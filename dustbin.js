class Dustbin{
    constructor(x,y,width,height){
    var options= {
        restitution:0,
        friction:5,
        density:0,
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.body1= Bodies.rectangle(902,505,10,120);
    this.body2= Bodies.rectangle(962,565,130,10);
    this.body3= Bodies.rectangle(1024,505,10,120);

    
    this.width = width;
    this.height = height;


    World.add(world,this.body);
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}