function setup() { // 最初に1回だけ実行される
  createCanvas(300,300);
  background(100);
  for (var x=200; x>=10; x-=10){
    rect(30,20,x,x);
    console.log(x);
  }
}