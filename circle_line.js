/* 
  ellipse(cx,cy,w,h);
*/

function setup() { // 最初に1回だけ実行される
  createCanvas(640,480);
  background('skyblue');
  ellipse(width/2,height/2,100,200);
  line(0,0,width/2,height/2);
}

function draw() { // 繰り返し実行される
}
