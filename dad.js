function setup() { // 最初に1回だけ実行される
  var canvas = createCanvas(300,300); // ここでwidth,height変数に値が代入される
  canvas.parent("dad");
  background(255);
  stroke(200,0,0); // 円や線の色を決める,第4引数にアルファ値を取れる
  fill(200,0,0); // ellipseの中の色を決める,第4引数にアルファ値を取れる
  ellipse(width/2,height/2,100,100);
}