var xstart = Math.random(10);
var xnoise = xstart;
var ynoise = Math.random(10);
var x = 0;
var y = 0;

function setup() { // 最初に1回だけ実行される
  createCanvas(300,300); // ここでwidth,height変数に値が代入される
  background(255);
  for(var y = 0; y <= height; y+=1){
    ynoise += 0.01; // 消すとy軸方向に均質に
    xnoise = xstart; // 消すとx軸方向のノイズが相対的に大きくなる
    for(var x = 0; x <= width; x+=1){
      xnoise += 0.01; // 消すとx軸方向に均質に
      var alpa = noise(xnoise, ynoise)*255; // noiseをrandomにすると目が粗くなる
      stroke(0,alpa); // 描画（これがなければ真っ黒に)
      line(x,y,x+1,y+1); // 点を描画
    }
  }
}
