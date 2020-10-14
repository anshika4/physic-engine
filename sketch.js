const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var engine,world;
var ball;
function setup() {
  var canvas=createCanvas(400,400);

  var options={isStatic: true};
  var ball_options={restitution: 1.0};
  engine=Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
  


}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}