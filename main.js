status="";

function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}
function modelLoaded(){
    console.log("ModelLoaded");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img,0,0,640,420);
    fill("#c8651e");
    textSize(20);
    text("Dog",240,50);
    noFill();
    stroke("#c8651e");
    rect(120,70,250,350);

    fill("#c8651e");
    textSize(20);
    text("Cat",400,80);
    noFill();
    stroke("#c8651e");
    rect(300,90,300,300);
}