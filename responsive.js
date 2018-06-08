window_load();
var w = window.innerWidth;
var h = window.innerHeight;

function setup(){ // 最初に1回だけ実行される
}

function draw(){
  createCanvas(w,h);
  background(100); // background()はCanvas要素を端から端までベタ塗りする
  rect(w/20,h/20,w/10,h/10);
}
//ウィンドウサイズ変更時に更新
window.onresize = window_load;

//サイズの表示
function window_load() {
	w = window.innerWidth;
  h = window.innerHeight;
  console.log('funciton');
}