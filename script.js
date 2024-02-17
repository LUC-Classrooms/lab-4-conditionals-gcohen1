function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(284, 0, 0);
    
  }
  else { 
    // otherwise do this:
    fill(0, 280, 0);
    g = width/2;
    w = 100;

    
  }
  ellipse(g, height/2, w, 110);
}
