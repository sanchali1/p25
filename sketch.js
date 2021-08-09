var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var r=70;///for radius
function preload()
{
	pi=loadImage("paper.png") 
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	var bo={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(300,100,r/2,bo)  //created paper ball
	World.add(world,ball)
	groundObject=new ground(width/2,670,width,20);
	//create dustbin
	leftside=new ground(1300,600,10,50)
	rightside=new ground(1450,600,10,20)
	bottomside=new ground(1290,650,150,20)

	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  leftside.display()
  rightside.display()
  bottomside.display()
  image(pi,ball.position.x,ball.position.y,r,r)

}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:130,y:-145})
}
