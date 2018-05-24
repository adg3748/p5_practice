function setup() { // 最初に1回だけ実行される
  smooth(); // アンチエイリアスで滑らかに
  createCanvas(400,400); // 第3引数には使用したいレンダラーを指定
  function saveFrame(e){
    if(e.keyCode==13){
      saveFrames('sphere','png',1,1);
    }
  }
  var step=1;
  var y=random(20,70);
  var minx=20;
  document.addEventListener('keydown',saveFrame);
  for(var x=minx; x<=width; x+=step){
    line(x,y,x,50);
    var y=random(20,70);
  }
}