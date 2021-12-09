var hi=500;
var bi=500;
var xi=500;
var mi=500;
var ci=500;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(8,64,34);
  noStroke(0);
  fill(249,249,232,7);
  for(i = 0; i < 100; i++)
  ellipse(200,hi,i);
  
   hi = hi - 1
  
  fill(249,249,233,4);
  noStroke(0);
  for(i = 0; i < 100; i++)
  ellipse(200,hi,i);
  
  hi = hi - 2.5

  fill(249,249,233,3);
  for(i = 0; i < 100; i++)
    ellipse(300,bi,i);
  
  bi = bi - 2.5;

  fill(249,249,233,3);
  for(i = 0; i < 100; i++)
    ellipse(300,bi,i,200);
  
  bi = bi - 2.5;

  noStroke(0);
  fill(249,249,233,8);
  for(i = 0; i < 100; i++){
    ellipse(100,xi,i,150);
  }
  noSmooth();
  xi=xi-3;


noStroke(0);
  fill(249,249,233,1);
  for(i = 0; i < 100; i++){
    ellipse(400,mi,i,100);
  }
  noSmooth();
  mi=mi-2.75;

  noStroke(0);
  fill(249,249,233,1.9);
  for(i = 0; i < 100; i++){
    ellipse(470,ci,i);
  }
  noSmooth();
  ci=ci-2;
  
  
}