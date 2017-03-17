var w = 500;
var h = 120;
var i = 0;
var horizontal = 0;
var origin;
var paintgif;

function preload() {
  paintgif = loadImage("data/pour.gif");
}

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("rothkoCanvas");
  origin = createVector(random(10,windowWidth-10),random(10,windowHeight-10)); 
}

function draw(){
  noStroke();
  rothko();
}

function createPaint(num, c1, c2){
  stroke(c1);
  var x1, y1;
  var x2, y2;
  var x3, y3;
  var x4, y4;

  var interB;
  var from = c1;
  var to = c2;
  var xoff = 0;
  num = 2;

  for (var a = 0; a < num; a++){
    x1 = random(-200,windowWidth/2+200);
    y1 = random(-200, windowHeight+200);
   
    x2 = x1 + 60;
    y2 = y1 + random(-20,30);
   
    x3 = x1 + random(900,windowWidth); //length
    y3 = y1 + random(-200,300); //direction
   
    x4 = x3 - 60;
    y4 = y3 + random(-30,20);

    var rand = random(180,300);
   
    for(var i = 0; i <= rand; i++) {
       xoff = xoff + 1;
       var n = noise(xoff);   
       noFill();
       strokeWeight(1);
       var interB = lerpColor(from, to, n);  
       bezier(x1, y1+i, x2, y2+i, x3, y3+i, x4, y4+i);
       stroke(interB, 150);  
    }
   }
}

function rothko(){
  noStroke();
  rectMode(CORNERS);
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
}

function blurRect(){ 
  rectMode(CENTER); 
  noStroke();
  let x = random(windowWidth-100),
      y = random(windowHeight-200);
  
  var rectWidth = random(50,100);
  for (var r = 0; r < 15; r++){
     fill(101,167,234,30-r*2);
     rect(x,y,rectWidth+r*4,200)
  }  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
   
    let x = random(windowWidth-480),
        y = random(windowHeight-273);

    $("body").append("<img src='/data/pour.gif'\
                           class='gifPaint'\
                           style='top: " + y + "px; left: " + x + "px;' />");
  } else if (keyCode == ENTER) {
    createPaint(2, color(5, 27, 72, 50), color(11, 61, 164, 50));
  } else if (keyCode == 32) {
    blurRect();
    console.log("spacebar");
  }
}