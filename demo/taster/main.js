/* The setup function runs once to create the canvas */

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch');
}

/* The draw function runs over and over again */

function draw() {
  
  background(255); // set background to white
  stroke(253,217,18); // red, green, blue
  line(305,200,305,40);
stroke(0);
  ellipse(305,40,20,20);
}
