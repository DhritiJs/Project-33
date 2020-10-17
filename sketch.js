var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var turn=0;
var turn2=5
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
  textSize(20)
 text("Score : "+score,20,30);
 text("Turn : "+turn2,680,30);
  Engine.update(engine);

  fill("white")
  textSize(20)
  text("500",25,550);
  
  fill("white")
  textSize(20)
  text("500",100,550);

  fill("white")
  textSize(20)
  text("500",185,550);

  fill("white")
  textSize(20)
  text("500",260,550);

  fill("white")
  textSize(20)
  text("100",340,550);

  fill("white")
  textSize(20)
  text("100",425,550);

  fill("white")
  textSize(20)
  text("100",505,550);

  fill("white")
  textSize(20)
  text("200",585,550);

  fill("white")
  textSize(20)
  text("200",665,550);

  fill("white")
  textSize(20)
  text("200",745,550);



  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
   particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(particle!=null){
  particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
   score=score+500;
    particle=null
    if(turn>=5) gameState="end";
      }
  }
    }   



    if(particle!=null){
      particle.display();
        if(particle.body.position.y>760){
          if(particle.body.position.x<550){
       score=score+100;
        particle=null
        if(turn>=5) gameState="end";
          }
      }
    }



    if(particle!=null){
      particle.display();
        if(particle.body.position.y>760){
          if(particle.body.position.x<800){
       score=score+200;
        particle=null
        if(turn>=5 && turn2<=0) gameState="end";
          }
      }
    }


if(gameState==="end"){
  textSize(72);
  fill("red");
  text("GAME OVER",200,250);
}

}

function mousePressed(){
  if(gameState!="end"){
    turn++;
    turn2--;
    particle=new Particle(mouseX,10,10,10);
  }
}