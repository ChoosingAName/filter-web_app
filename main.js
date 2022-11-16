noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/L8KG32d5/m.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY,40,30);
}
function take_snapshot(){
    save('amogus.png');
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
noseX=results[0].pose.nose.x-16;
noseY=results[0].pose.nose.y+20;
console.log("noseX=" + noseX);
console.log("noseY=" + noseY);
    }
}