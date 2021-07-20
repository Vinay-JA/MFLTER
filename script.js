noseX=0;
noseY=0;

function preload() {
     mustache_nose = loadImage("https://i.postimg.cc/NMNpQ8gp/Mustache.jpg");
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
    noseX = results[0].pose.nose.x + -10;
    noseY = results[0].pose.nose.y + 0;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache_nose, noseX, noseY, 30, 30);
 
  
}

function take_snapshot(){    
  save('My_Image');
}
