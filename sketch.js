
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground, wall;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options= {
    restitution:0.1,
    frictionAir:0.01
  };
  ball=Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  var ground_options={
    isStatic:true
  };
  ground=Bodies.rectangle(10,390,400,20,ground_options);
  World.add(world,ball);
  wall=Bodies.rectangle(100,20,200,20,ground_options);
  World.add(world,ball);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,200,20);
}

