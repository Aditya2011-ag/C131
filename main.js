object=[];
status="";

function preload(){
    img=loadImage("istockphoto-489272417-612x612.jpg");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}
function modelLoaded(){
    console.log("ModelLoaded");
    status=true;
    objectDetector.detect(video,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object=results;
    }
}
function draw(){
    image(video,0,0,380,380);
    r=random(255);
    b=random(255);
    g=random(255);

    if(status !=""){
        objectDetector.detect(video,gotResults);
        for(i=0 ; i < object.length ; i++){
            document.getElementById("status").innerHTML="Status = Objects Detected";
            document.getElementById("Number_of_objects").innerHTML="Number of objects detected are : "+object.length;
            percent=floor(object[i].confidence*100);
            fill(r,g,b);
            textSize(20);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke(r,g,b);
            rect(object[i].x , object[i].y , object[i].height , object[i].width);
        }
    }
}