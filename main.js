object=[];
status="";

function preload(){
    img=loadImage("istockphoto-489272417-612x612.jpg");
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
        object=results;
    }
}
function draw(){
    image(img,0,0,640,420);

    if(status !=""){
        for(i=0 ; i < object.length ; i++){
            document.getElementById("status").innerHTML="Status = Objects Detected";
            percent=floor(object[i].confidence*100);
            fill("#c8651e");
            textSize(20);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#c8651e");
            rect(object[i].x , object[i].y , object[i].height , object[i].width);
        }
    }
}