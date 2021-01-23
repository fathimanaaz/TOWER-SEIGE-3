const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;
var chain1;
var score = 0;

function preload(){
  polygonImg=loadImage("polygon.png");
  getBackgroundImage();
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(480,275);
  b2=new Box(510,275);
  b3=new Box(540,275);
  b4=new Box(570,275);
  b5=new Box(600,275);
  b6=new Box(450,275);
  b7=new Box(630,275);
  b8=new Box(480,235);
  b9=new Box(510,235);
  b10=new Box(540,235);
  b11=new Box(570,235);
  b12=new Box(600,235);
  b13=new Box(510,195);
  b14=new Box(530,195);
  b15=new Box(560,195);
  b16=new Box(530,155);
  b17=new Box(800,100);
  b18=new Box(800,140);
  b19=new Box(830,140);
  b20=new Box(770,140);
  b21=new Box(800,180);
  b22=new Box(830,180);
  b23=new Box(860,180);
  b24=new Box(770,180);
  b25=new Box(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:1.5,
    restitution:0.01,
    friction:1,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  if(backgroundIMG){
     background(backgroundIMG);
  }

  textSize(15);
  fill("white")
  text("Score:"+score,width-300,50)

  textSize(15)
  text("PRESS (SPACE) TO GET ANOTHER CHANCE",width-350,30)

  Engine.update(engine);
  fill("skyblue");
  b1.display();
  b1.score();
  b2.display();
  b2.score();
  b3.display();
  b3.score();
  b4.display();
  b4.score();
  b5.display();
  b5.score();
  b6.display();
  b6.score();
  b7.display();
  b7.score();
  fill("pink");
  b8.display();
  b8.score();
  b9.display();
  b9.score();
  b10.display();
  b10.score();
  b11.display();
  b11.score();
  b12.display();
  b12.score();
  fill("yellow");
  b13.display();
  b13.score();
  b14.display();
  b14.score();
  b15.display();
  b15.score();
  fill("lightgreen");
  b16.display();
  b16.score();
  fill("lightpink");
  b17.display();
  b17.score();
  fill("lightgreen");
  b18.display();
  b18.score();
  b19.display();
  b19.score();
  b20.display();
  b20.score();
  fill("skyblue");
  b21.display();
  b21.score();
  b22.display();
  b22.score();
  b23.display();
  b23.score();
  b24.display();
  b24.score();
  b25.display();
  b25.score();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(this.polygon, {x:200 , y: 200})
      chain1.attach(this.polygon);
  }
}


async function getBackgroundImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=07 && hour<=19){
      bg = "day.jpg"
  }else{
      bg = "night.jpg"
  }
  backgroundIMG = loadImage(bg)
}