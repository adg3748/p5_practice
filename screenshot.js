function setup() { // 最初に1回だけ実行される
  createCanvas(300,300); // ここでwidth,height変数に値が代入される
  background(255);
  stroke(200,0,0); // 円や線の色を決める,第4引数にアルファ値を取れる
  fill(200,0,0); // ellipseの中の色を決める,第4引数にアルファ値を取れる
  ellipse(width/2,height/2,100,100);
  function saveFrame(e){
    if(e.keyCode==13){
      saveFrames('generative_art','jpg',1,1); // saveFrames(filename,extension,duration,framerate,[callback])
      // 第4引数を↑→枚数↓、↓→枚数↓、上記だと1枚だけスクショ
    }
  }
  document.addEventListener('keydown',saveFrame);
}
