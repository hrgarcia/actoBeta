let frases;
let myFont;
let logo;
let offset = 100;

function preload() {
    frases = loadStrings('../dummy.txt');
    myFont = loadFont('/fonts/Friday Beach.ttf');
    logo = loadImage('../images/logo.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(28, 28, 28);
    fill(255);
    textSize(75);
    textFont(myFont);
    text('Acto del dia del maestro', 350, 10, 1500, 1500);
    image(logo, 0, 0);
    fill(255);
    textSize(50);
    textFont(myFont);
    setInterval(() => {
        text(random(frases), random(offset, width - offset), random(offset, height - offset), 150, 150);
    }, 3000);
}

function draw() {}

/* full screening will change the size of the canvas */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function (event) {
    event.preventDefault();
};
