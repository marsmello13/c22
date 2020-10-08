const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, ground, world, ball;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var groundoptions = {
  isStatic: true


}
var balloptions= { restitution: 1.0 }

ground=Bodies.rectangle(200,390,50,50,groundoptions);
World.add(world,ground);

ball = Bodies.circle(200,100,20,balloptions);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}