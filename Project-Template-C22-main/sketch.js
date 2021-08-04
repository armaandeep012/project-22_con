const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5;
var sq,sq2,sq3,sq4,sq5;
var rope;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

  con = Matter.Constraint.create({
    bodyA:sq,
    pointA:{x:0,y:0},
    bodyB:ball,
    pointB:{x:0,y:0}
  })

  World.add(world,con);

  rectMode(CENTER);
  ellipseMode(RADIUS);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = new Ball(154,150,45);
  ball2 = new Ball(176.5,150,45);
  ball3 = new Ball(199,150,45);
  ball4 = new Ball(222,150,45);
  ball5 = new Ball(245,150,45);

  sq = new Rect(155,50,20,20);
  sq2 = new Rect(177,50,20,20);
  sq3 = new Rect(199.5,50,20,20);
  sq4 = new Rect(222,50,20,20);
  sq5 = new Rect(246,50,20,20);
  

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);
  //call display() to show ropes here
  
  //create ellipse shape for multiple bobs here
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  sq.display();
  sq2.display();
  sq3.display();
  sq4.display();
  sq5.display();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop();
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
