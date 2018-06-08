function setup() { // 最初に1回だけ実行される
  createCanvas(300,300);
  background(100);

  rect(30, 20, 55, 55);

  scale(0.5); // 座標の縮尺を0.5倍にすると考えると筋が通る？
  rect(60, 40, 100, 100);

}