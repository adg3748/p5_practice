function setup() { // 最初に1回だけ実行される
  smooth(); // アンチエイリアスで滑らかに
  createCanvas(300,300); // 第3引数には使用したいレンダラーを指定
  var step=10;
  var lastx=-999;
  var lasty=-999;
  var minx=20;
  var miny=10;
  var y=50;
  for(var x=minx; x<=width-minx; x+=step){
    y = miny + random(height - miny*miny)
    if(lastx>-999){
      line(x,y,lastx,lasty);
    }
    lastx=x; // 一つ前のx
    lasty=y; // 一つ前のy
    // 移動した点から一つ前の点に向かって繰り返し線を描画しているイメージ
  }
  function saveFrame(e){
    if(e.keyCode==13){
      saveFrames('sphere','png',1,1);
    }
  }
  document.addEventListener('keydown',saveFrame);
}