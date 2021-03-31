
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,boxA;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box=new Box(180,200,20,20)
    boxA=new Box(100,50,10,10)

    ground=new Ground(200,height,800,20)

}

function draw(){
    background(0);
    Engine.update(engine);

    box.display()
    boxA.display()
    ground.display()
}

