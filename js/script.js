var w = window.innerWidth;
var h = window.innerHeight;

let frases;
let myFont;
let logo;
let offset = 100;

function preload() {
    frases = loadStrings('../dummy.txt  ');
    myFont = loadFont('/fonts/Friday Beach.ttf');
    logo = loadImage('../images/logo.png');
}

function setup() {
    noStroke();
    canvas = createCanvas(w, h);
    background(28, 28, 28);
    fill(255);
    textSize(50);
    textFont(myFont);
    setInterval(() => {
        text(random(frases), random(offset, width - offset), random(offset, height - offset), 150, 150);
    }, 2000);
}

function draw() {
    image(logo, 0, 0);
}

window.onresize = function () {
    // assigns new values for width and height variables

    w = window.innerWidth;
    h = window.innerHeight;
    canvas.size(w, h);
    background(28, 28, 28);
};
