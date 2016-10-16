/* The setup function runs once to create the canvas */

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch');
}

/* The draw function runs over and over again */

function draw() {
  
  background(255); // set background to white
  
  // Draw the spaghetti
  stroke(253, 217, 18); // set the stroke colour to yellow (red = 253, green = 217, blue = 18)
  strokeWeight(3); // set the stroke width to 3 pixels
  line(305,200,305,40); // draw a line for the spaghetti (x1, y1, x2, y2)
  line(295,200,295,40); // draw more spaghetti
  
  line(275,400,295,200); // and more spaghetti!
  line(300,400,300,200);
  line(325,400,305,200);

  line(275,580,275,400);
  line(300,580,300,400);
  line(325,580,325,400);
  
  // Draw the marshmallow
  fill(254, 184, 248); // set the fill colour to pink (red = 254, green = 184, blue = 248)
  noStroke(); // turn off stroke
  ellipse(300,40,20,20); // draw the marshmallow (x, y, width, height)
}
