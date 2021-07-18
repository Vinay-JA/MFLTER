noseX=0;
noseY=0;

function preload() {
    var mustache_nose = loadImage("https://i.postimg.cc/kX1QZrPL/Emeald.jpg")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200,170);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x + 0;
    noseY = results[0].pose.nose.y + 0;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX, noseY, 20);
  
}

function take_snapshot(){    
  save('My_Image');
}
