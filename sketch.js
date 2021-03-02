var h = hour();

var m = minute();

var s = second();

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h,0,12,0,360);


  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(sAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();


  drawSprites();
}