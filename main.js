function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = CreateCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses')
}

classifier =ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
console.log('Posenet Is Initialised');
}

function draw() {
    image(video, 0, 0, 300, 300,);
    fill(255, 0, 0,);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex=0;
        nosey=0;
    }
}

function preload() {
    mustach = loadImage('https://in.images.search.yahoo.com/images/view;_ylt=AwrPphzpw7dlSHUy6kO9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2JjMjNmMmE3NTAyNjk5NTU2MzFkNDRmOWRhNTEwN2RlBGdwb3MDMjkEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dmustache%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D29&w=9447&h=2423&imgurl=www.clipartbest.com%2Fcliparts%2F7ca%2FodM%2F7caodM4zi.png&rurl=http%3A%2F%2Fwww.clipartbest.com%2Fmustache-graphic&size=126.3KB&p=mustache&oid=bc23f2a750269955631d44f9da5107de&fr2=piv-web&fr=mcafee&tt=Mustache+Graphic+-+ClipArt+Best&b=0&ni=21&no=29&ts=&tab=organic&sigr=J8rFqV9RV9Ff&sigb=7xgRQtKL0ZUh&sigi=w2B3DIq3h.O0&sigt=CHxXXbMht.fC&.crumb=1lm8FF/3n9E&fr=mcafee&fr2=piv-web&type=E210IN826G0');
}