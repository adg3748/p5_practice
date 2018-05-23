function setup() { // 最初に1回だけ実行される
  smooth(); // アンチエイリアスで滑らかに
  createCanvas(300,300,WEBGL); // 第3引数には使用したいレンダラーを指定
  sphere(100);
  function saveFrame(e){
    if(e.keyCode==13){
      saveFrames('sphere','jpg',1,1);
    }
  }
  document.addEventListener('keydown',saveFrame);
}
