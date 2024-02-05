let textAnimations = [];
let ft = [];
let cp;
let data;

let texts = [];

const msg = ["HELLO", "THANKS"];

function preload() {
    data = loadTable("sample.csv")
    ft[0] = loadFont("../../assets/font/NotoSans_Condensed-BoldItalic.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 1; i < data.getRowCount(); i++) {
        const animationOptions = {
            text: data.getString(i, 0),
            x: width * data.getNum(i, 1),
            y: height * data.getNum(i, 2),
            color: data.getString(i, 3),
            size: min(width, height) * data.getNum(i, 4),
            animationStartTime: data.getNum(i, 5),
            animationTime: data.getNum(i, 6),
            inAnimationTime: data.getNum(i, 7),
            outAnimationTime: data.getNum(i, 8),
            inAnimation: data.getString(i, 9),
            outAnimation: data.getString(i, 10),
            mode: data.getString(i, 11),
            // preloadしてる
            // font: random(ft),
        };
        textAnimations.push(new TextAnimation(animationOptions));
    }
}

function draw() {
    background(200);

    noStroke();
    fill(240)
    circle(width / 2, height / 2, min(width, height) * 0.9 + min(width, height) * 0.2 * sin(frameCount/50));

    fill(50);
    rect(0, 0, width, 20);
    rect(0, height-20, width, 20);


    for (let i in textAnimations) {
        textAnimations[i].move();
        textAnimations[i].display();
    }

    for (let i in textAnimations) {
        if (textAnimations[i].end) {
            textAnimations.splice(i, 1);
        }
    }
}