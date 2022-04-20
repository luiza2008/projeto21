const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var bola;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(0,670,5600,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var option = {
  
  restitution: 0.9

  }

  bola = Bodies.circle(200,200,20, option);
  World.add(world,bola);

}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(bola.position.x, bola.position.y, 20)

}

function keyPressed(){

if (keyCode === UP_ARROW){
  Matter.Body.applyForce(bola,bola.position, {x: 0, y: 0.05})

}


}

