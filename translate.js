function setup() { // 最初に1回だけ実行される
  smooth(); // アンチエイリアスで滑らかに
  createCanvas(300,300,WEBGL); // 第3引数には使用したいレンダラーを指定
  function saveFrame(e){
    if(e.keyCode==13){
      saveFrames('sphere','png',1,1);
    }
  }
  document.addEventListener('keydown',saveFrame);
}

function draw(){
  sphere(100,24,24); // sphere([radius],[detailX],[detailY])
  translate(30,30,20); // 右へ30、下へ30、全面へ相対的に20移動させる
  sphere(100,24,24); // そして再描画
}