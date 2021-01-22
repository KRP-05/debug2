const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;
var count=0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  
  Engine.update(engine);
  //Render.run(render);
  ground.display();
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }
  if(particle!=null) {
    particle. display(); 
    if(particle.body.position.y > 760) {
    
    if(particle.body.position.x > 0 && particle.body.position.x < 80 ||particle.body.position.x > 720 && particle.body.position.x < 800 ) {
      score = score + 100;     
    } 
    if(particle.body.position.x > 80 && particle.body.position.x < 160||particle.body.position.x > 640 && particle.body.position.x < 720  ) {
      score = score + 200;     
    } 
    if(particle.body.position.x > 160 && particle.body.position.x < 240||particle.body.position.x > 560 && particle.body.position.x < 640  ) {
      score = score + 300;     
    } 
    if(particle.body.position.x > 240 && particle.body.position.x < 320||particle.body.position.x > 480 && particle.body.position.x < 560  ) {
      score = score + 400;     
    } 
    if(particle.body.position.x > 320 && particle.body.position.x < 480) {
      score = score + 500;             
    } 
    particle = null;
    }
    
    if( count >= 5){gameState = "end"; } 

  }
  if(gameState === "end"){
    textSize(50);
    fill("white");
    text("GAME OVER",250,250);
  } 
  textSize(25) 
  text("Score : "+score,20,30);
  text("Chance Left : "+ (5-count),600,30)
  text("100",20,530);
  text("200",100,530);
  text("300",180,530);
  text("400",260,530);
  text("500",340,530);
  text("500",420,530);
  text("400",500,530);
  text("300",580,530);
  text("200",660,530);
  text("100",740,530);
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(random(0,800),10,10,10);
  }  
}