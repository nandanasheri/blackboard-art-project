var main_bg = function (p) {
  let x;
  let y;
  let r;
  let g;
  let b;
  let pg;

  // background referenced from kevinworkman.com

  p.setup = function () {
    // set pixel density so that it's more fuzzy and pixelated
    p.pixelDensity(1);
    const cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.id('sketch');

    const displayRatio = p.windowWidth / p.windowHeight;
    pg = p.createGraphics(100 * displayRatio, 100);
    // start at the center of the page
    x = pg.width / 2;
    y = pg.height / 2;
    // random colors to start with
    r = p.random(0, 255);
    g = p.random(0, 255);
    b = p.random(0, 255);

    // this stays pixelated instead of having it be 
    pg.noSmooth();
    p.noSmooth();
  }

  p.draw = function() {
    // where to draw the next pixel

    let nextX = x + p.random(-5, 5);
    let nextY = y + p.random(-5, 5);

    // ensure that the nextX and nextY are constrained between  0 and width or height
    nextX = p.constrain(nextX, 0, pg.width);
    nextY = p.constrain(nextY, 0, pg.height);

    // similarly for rgb
    r += p.random(-10, 10);
    g += p.random(-10, 10);
    b += p.random(-10, 10);
    r = p.constrain(r, 0, 255);
    g = p.constrain(g, 0, 255);
    b = p.constrain(b, 0, 255);

    pg.stroke(r, g, b);
    pg.line(nextX, nextY, x, y);

    // this actually displays the graphic itself
    p.image(pg, 0, 0, p.width, p.height);

    x = nextX;
    y = nextY;
  }

   p.mousePressed = function() {
    x = pg.width * (p.mouseX / p.width);
    y = pg.height * (p.mouseY / p.height);
    r = p.random(0, 255);
    g = p.random(0, 255);
    b = p.random(0, 255);
  }
}

var displayMandala = function (p) {
 
  let x1, x2, x3, x4, y2, y3;
  let petals = 30;
  let ang;
  
  var setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noCursor();
  }
  
  var draw = function () {
    p.mandala();
  }
  
  var mandala = function() {
    p.angleMode(DEGREES);
    p.colorMode(HSB);

    ang = 360/petals;
    let randx = p.windowWidth/8;

    for (let j = 10; j > 0; j--) {
      let ly = j/10;
      x1 = p.int(p.random(randx*ly, (randx + 20)*ly));
      x4 = p.int(p.random((randx + 40)*ly, (randx + 55)*ly));
      x2 = p.int(p.random((randx + 5)*ly, (randx + 25)*ly));
      y2 = p.int(p.random(0, (windowHeight/10)*ly));
      x3 = p.int(p.random((randx + 20)*ly, (randx + 40)*ly));
      y3 = p.int(p.random(0, (windowWidth/10)*ly));

      let hue = p.random(256);
      let sat = p.random(70, 100);
      let bright = p.random(70, 100);

      p.stroke(hue, sat, bright);
      p.strokeWeight(3);
      p.fill(hue, sat, bright);

      //creating petals
      for (let i = 0; i < petals; i++) {
        p.beginShape();
          p.curveVertex(x1, 0);
          p.curveVertex(x1, 0);
          p.curveVertex(x2, y2);
          p.curveVertex(x3, y3);
          p.curveVertex(x4, 0);
          p.curveVertex(x4, 0);
        p.endShape();

         p.beginShape();
          p.curveVertex(x1, 0);
          p.curveVertex(x1, 0);
          p.curveVertex(x2, -y2);
          p.curveVertex(x3, -y3);
          p.curveVertex(x4, 0);
          p.curveVertex(x4, 0);
        p.endShape();
        p.rotate(ang);
      }
    }
  }
}

let mandala = function(p) {

  let x1, x2, x3, x4, y2, y3;
  let petals = 30;
  
  p.setup = function () {
    p.createCanvas(400, 400, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB);

    let randx = 400/8;

    for (let j = 10; j > 0; j--) {
      let ly = j/10;
      x1 = p.int(p.random(randx*ly, (randx + 20)*ly));
      x4 = p.int(p.random((randx + 40)*ly, (randx + 55)*ly));
      x2 = p.int(p.random((randx + 5)*ly, (randx + 25)*ly));
      y2 = p.int(p.random(0, (400/10)*ly));
      x3 = p.int(p.random((randx + 20)*ly, (randx + 40)*ly));
      y3 = p.int(p.random(0, (400/10)*ly));

      let hue = p.random(256);
      let sat = p.random(70, 100);
      let bright = p.random(70, 100);

      p.stroke(hue, sat, bright);
      p.strokeWeight(3);
      p.fill(hue, sat, bright);

      //creating petals
      for (let i = 0; i < petals; i++) {
        p.beginShape();
          p.curveVertex(x1, 0);
          p.curveVertex(x1, 0);
          p.curveVertex(x2, y2);
          p.curveVertex(x3, y3);
          p.curveVertex(x4, 0);
          p.curveVertex(x4, 0);
        p.endShape();

         p.beginShape();
          p.curveVertex(x1, 0);
          p.curveVertex(x1, 0);
          p.curveVertex(x2, -y2);
          p.curveVertex(x3, -y3);
          p.curveVertex(x4, 0);
          p.curveVertex(x4, 0);
        p.endShape();
      }
    }
  }
};

new p5(mandala);


var myp5 = new p5(main_bg, 'main_bg');
var newp5 = new p5(displayMandala, 'mandala');