let birdsong;
let cnv;
let x, y;

function preload(){
  birdsong = loadSound('birdsong.mp3');
}

function setup() {
  cnv = createCanvas(500, 500);
  cnv.mousePressed(toggle);
}

function draw() {
  background(240, 10);

  let noiseLevel = 500;
  let noiseScale = 0.005;

  let nt = noiseScale * frameCount;

 x = noiseLevel * noise(nt);
 y = noiseLevel * noise(nt + 10000);
  
  fill(15);
  noStroke();
  circle(x, y, 10);
  
  panning = map(x, 0, 500, -1, 1);
  birdsong.pan(panning);

  
  vol = map(y, 0, 500, 1, 0);
  birdsong.setVolume(vol);
  console.log(panning, vol);
}

function toggle(){
  if (!birdsong.isPlaying()) {
    birdsong.play();
 } else {
   birdsong.pause();
 }
}