x = 0;

function setup() { // 最初に1回だけ実行される
  createCanvas(640,480);
}

function draw() { // 繰り返し実行される
  background(0);
  rect(x,40,50,50);
  x++;
}
