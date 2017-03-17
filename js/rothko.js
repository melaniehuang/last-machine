var w = 500;
var h = 120;
var i = 0;
var horizontal = 0;
var origin;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(5,27,72);
  noStroke();
  rectMode(CORNERS);
  
  origin = createVector(random(10,windowWidth-10),random(10,windowHeight-10)); 
}

function draw(){
  i++;
 
  var wr = random(-1,1);
  var hr = random(-1,1);
  fill(75,168,222,random(1,5));
 
  if (i%100 == 0){
    origin = createVector(random(10,windowWidth-10),random(10,windowHeight-10));
    i = 0;
    horizontal++;
  }
 
  if (horizontal == 5){
    fill(218,247,255,10);
    rect(origin.x, origin.y,origin.x + 300,windowHeight);
    horizontal = 0;
  }

  rect(origin.x,origin.y,origin.x - w*wr,origin.y - h*hr);
  fill(101,167,234,random(1,5));
  rect(origin.x,origin.y,origin.x - w*wr,origin.y - h*hr);

  console.log(origin.x);
}