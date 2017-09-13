// Set some variables
var cornerSize = 200;
var password = "abdc";
var progress = "";
var inCorner = false;
var unlock; // Declare unlock function

function mouseInCorner(x, y, cx, cy) {
  var dx = cx - x;
  var dy = cy - y;
  var sum = dx*dx + dy*dy;
  var dist = Math.sqrt(sum);
  return dist < cornerSize;
}

window.addEventListener("mousemove", onmousemove, false);
function onmousemove(e) {
  // Get the mouse position
  var x = e.clientX;
  var y = e.clientY;
  
  // Get window width and height
  var w = window.innerWidth;
  var h = window.innerHeight;
  cornerSize = h/2;
  
  // Determine if mouse is in a corner
  var corner = "";
  if(mouseInCorner(x, y, 0, 0)) {
    corner = "a";
  } else if(mouseInCorner(x, y, w, 0)) {
    corner = "b";
  } else if(mouseInCorner(x, y, 0, h)) {
    corner = "c";
  } else if(mouseInCorner(x, y, w, h)) {
    corner = "d";
  } else {
    inCorner = false;
    return;
  }
  if(inCorner) {
    return;
  } else {
    inCorner = true;
  }
  
  // Add it to the progress
  progress += corner;
  if(progress.length > password.length) {
    progress = progress.slice(1, progress.length);
  }
  console.log(progress);
  
  // Check password
  if(progress === password) {
    unlock();
  }
}

unlock = function() {
  // Get object for #main_box
  var mainBox = document.getElementById("main_box");
  
  //#############################################################
  //// Change contents of #main_box                             #
  /**/ mainBox.innerHTML = "<a href=\"\" id="s1"><p>Secret</p></a>"; // #
  //#############################################################
}










