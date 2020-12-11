
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,300,10);
	dustbin1 = new Dustbin(500,380,10,50);
	dustbin2 = new Dustbin(520,380,30,10);
	dustbin3 = new Dustbin(540,380,10,50);
	ground = Bodies.rectangle(width / 2, 400, width, 10);

	Engine.run(engine);

	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:85});
	}
}



