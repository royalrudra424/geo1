const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var rubber;
var coal;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,470,80,50);
    rubber = new Rubber(700,370,20,10);
    coal = new Coal(650, 270, 80, 80);
   stones1=new Stones(250,470);
   stones2=new Stones(270,470);
   stones3=new Stones(390,470);
   stones4=new Stones(400,470);
   stones5=new Stones(410,470);
   stones6=new Stones(280,470);
   stones7=new Stones(360,470);
   stones8=new Stones(430,470);
   stones9=new Stones(220,470);
   stones10=new Stones(430,470);
  }

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    coal.display();
    stones1.display();
    stones2.display();
    stones3.display();
    stones4.display();
    stones5.display();
    stones6.display();
    stones7.display();
    stones8.display();
    stones9.display();
    stones10.display();
}