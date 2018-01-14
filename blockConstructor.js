function line(x, y, width, height, text, text_height, text_position) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  this.text = text || '';
  this.text_height = text_height || 14;
  this.text_position = text_position || 1;
}

line.prototype.draw = function(ctx) {
  ctx.font = this.text_height + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  if(this.width){
    if(this.text_position){
      ctx.fillText(this.text, this.x + this.width/2, this.y - this.text_height/2);
    } else {
      ctx.fillText(this.text, this.x + this.width/2, this.y + this.text_height/2);
    }
  }

  if(this.height){
    if(this.text_position){
      ctx.fillText(this.text, this.x - this.text_height/2, this.y + this.height/2);
    } else {
      ctx.fillText(this.text, this.x + this.text_height/2, this.y + this.height/2);
    }
  }
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.width, this.y + this.height);
  ctx.stroke();
}

line.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
}


// rectangle


function rect(x, y, width, height, active, trick, text, text_height = 14) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 1;
  this.height = height || 1;
  this.active = active || 0;
  if (!trick) {
    this.true_x = x;
    this.true_y = y;
  }
  this.text = text;
  this.text_height = text_height || 1;
}

rect.prototype.draw = function(ctx) {
  ctx.font = String(this.text_height) + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2 + this.text_height/4, this.width);
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.width, this.y);
  ctx.lineTo(this.x + this.width, this.y + this.height);
  ctx.lineTo(this.x, this.y + this.height);
  ctx.lineTo(this.x, this.y);
  ctx.stroke();
}

rect.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
}


// rounded rectangle for Begin and End


function roundedRect(x, y, width, height, radius, active, trick, text, text_height = 14) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 1;
  this.height = height || 1;
  this.radius = radius || 1;
  this.active = active || 0;
  if (!trick) {
    this.true_x = x;
    this.true_y = y;
  }
  this.text = text;
  this.text_height = text_height || 1;
}

roundedRect.prototype.draw = function(ctx) {
  ctx.font = String(this.text_height) + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2 + this.text_height/4, this.width);
  ctx.strokeStyle = this.stroke_color;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.radius);
  ctx.lineTo(this.x, this.y + this.height - this.radius);
  ctx.arcTo(this.x, this.y + this.height, this.x + this.radius, this.y + this.height, this.radius);
  ctx.lineTo(this.x + this.width - this.radius, this.y + this.height);
  ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width, this.y + this.height - this.radius, this.radius);
  ctx.lineTo(this.x + this.width, this.y + this.radius);
  ctx.arcTo(this.x + this.width, this.y, this.x + this.width - this.radius, this.y, this.radius);
  ctx.lineTo(this.x + this.radius, this.y);
  ctx.arcTo(this.x, this.y, this.x, this.y + this.radius, this.radius);
  ctx.stroke();
}

roundedRect.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
}


// rhombus


function conditionBlock(x, y, width, height, active, trick, text, text_height = 14) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 1;
  this.height = height || 1;
  this.active = active || 0;
  if (!trick) {
    this.true_x = x;
    this.true_y = y;
  }
  this.text = text;
  this.text_height = text_height || 1;
}

conditionBlock.prototype.draw = function(ctx) {
  ctx.font = String(this.text_height) + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2 + this.text_height/4, this.width);
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.height/2);
  ctx.lineTo(this.x + this.width/2, this.y);
  ctx.lineTo(this.x + this.width, this.y + this.height/2);
  ctx.lineTo(this.x + this.width/2, this.y + this.height);
  ctx.lineTo(this.x, this.y + this.height/2);
  ctx.stroke();
}

conditionBlock.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
}


// arrows


function arrow(x, y, width, height, text = '', text_height = 14, text_position = 1) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width;
  this.height = height;
  this.text = text;
  this.text_height = text_height || 1;
  this.text_position = text_position;
}

arrow.prototype.draw = function(ctx) {
  ctx.font = String(this.text_height) + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  if(this.width){ 
    if(this.text_position){
      ctx.fillText(this.text, this.x + this.width/2, this.y - this.text_height/2);
    }else{
      ctx.fillText(this.text, this.x + this.width/2, this.y + this.text_height/2);
    }
  }

  if(this.height){
    if(this.text_position){
      ctx.fillText(this.text, this.x - this.text_height/2, this.y + this.height/2);
    }else{
      ctx.fillText(this.text, this.x + this.text_height/2, this.y + this.height/2);
    }
  }
  var headlen = 10;   // length of head in pixels
  var angle = Math.atan2(this.height, this.width);
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.width, this.y + this.height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(this.x + this.width, this.y + this.height);
  ctx.lineTo(this.x + this.width - headlen*Math.cos(angle - Math.PI/6), this.y + this.height - headlen*Math.sin(angle - Math.PI/6));
  ctx.moveTo(this.x + this.width, this.y + this.height);
  ctx.lineTo(this.x + this.width - headlen*Math.cos(angle + Math.PI/6), this.y + this.height - headlen*Math.sin(angle + Math.PI/6));
  ctx.stroke();
}

arrow.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
}


// useless temp shape


function Shape(x, y, w, h, fill) {
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || '#AAAAAA';
}

Shape.prototype.draw = function(ctx) {
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
}   

Shape.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}



// states of canvas


function CanvasState(canvas) {
  
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  this.shapes = [];  // the collection of things to be drawn
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.selection = null;
  this.dragoffx = 0; // See mousedown and mousemove events for explanation
  this.dragoffy = 0;


  // places for not located blocks
  this.places = [];
  for (var y_place = 3*(this.height / 4); y_place < this.height; y_place += this.height/8) {
  	for (var x_place = 0; x_place <= 3*(this.width /4); x_place += this.width/4) {
  		this.places.push([x_place + this.width/32, y_place + this.height/32]);
  		}
  }


  // true places for blocks
  this.true_places = [];

  
  
  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  // Up, down, and move are for dragging
  canvas.addEventListener('mousedown', function(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var l = shapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].active && shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        if (myState.places.includes([mySel.x, mySel.y])) {
          myState.true_places.splice(-1, 0, [mySel.x, mySel.y]);
          [mySel.x, mySel.y] = myState.true_places.pop();
          console.log(myState.true_places);
          console.log(myState.places);
        } else {
          myState.true_places.splice(-1, 0, [mySel.x, mySel.y]);
          [mySel.x, mySel.y] = myState.true_places.pop()
          console.log(myState.true_places);
          console.log(myState.places);
        }
        

        myState.selection = mySel;
        myState.valid = false;
        return;
      }
    }
    // havent returned means we have failed to select anything.
    // If there was an object selected, we deselect it
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false; // Need to clear the old selection border
    }
  }, true);

  
  canvas.addEventListener('mousemove', function(e) {
    if (myState.dragging){
      var mouse = myState.getMouse(e);
      // We don't want to drag the object by its top-left corner, we want to drag it
      // from where we clicked. Thats why we saved the offset and use it here
      myState.selection.x = mouse.x - myState.dragoffx;
      myState.selection.y = mouse.y - myState.dragoffy;   
      myState.valid = false; // Something's dragging so we must redraw
    }
  }, true);


  canvas.addEventListener('mouseup', function(e) {
    myState.dragging = false;
  }, true);


  // double click for making new shapes
  canvas.addEventListener('dblclick', function(e) {
    var mouse = myState.getMouse(e);
    myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,.6)'));
  }, true);
  

  // **** Options! ****
  this.stroke_color = 'black';
  this.stroke_width = 1;
  this.selectionColor = '#CC0000';
  this.selectionWidth = 3 ;  
  this.interval = 30;
  setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  if (shape.active && shape.true_x) {
    this.true_places.push([shape.x, shape.y]); 
    [shape.x, shape.y] = this.places.pop();
  }
  this.valid = false;
}

CanvasState.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

// Temporary function to observe the boundaries of places 
CanvasState.prototype.drawPlacesBorders = function (){
	this.ctx.strokeStyle = "black";
	this.ctx.lineWidth = 1;
  	for (var i = this.places.length - 1; i >= 0; i--) {
  			this.ctx.rect(this.places[i][0] - this.width/32, this.places[i][1] - this.height/32, this.width/4, this.height/4)
  		}	
  	this.ctx.stroke();
 }

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
  // if our state is invalid, redraw and validate!
  if (!this.valid) {
    var ctx = this.ctx;
    var shapes = this.shapes;
    this.clear();
    
    // ** Add stuff you want drawn in the background all the time here **
    

  	this.drawPlacesBorders();

    // draw all shapes
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      var shape = shapes[i];
      // We can skip the drawing of elements that have moved off the screen:
      if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
      ctx.strokeStyle = this.stroke_color;
      ctx.lineWidth = this.stroke_width;
      shapes[i].draw(ctx);
    }
    
    // draw selection
    // right now this is just a stroke along the edge of the selected Shape
    if (this.selection != null) {
      ctx.strokeStyle = this.selectionColor;
      ctx.lineWidth = this.selectionWidth;
      var mySel = this.selection;
      mySel.draw(ctx);
    }
    
    // ** Add stuff you want drawn on top all the time here **
    
    this.valid = true;
  }
}


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
}