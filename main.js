harry_potter = "";
peter_pan = "";

function preload() {
   harry_potter = loadSound("HarryPotter.mp3");
   peter_pan = loadSound("PeterPan.mp3");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.position(700,250);
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
      image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}