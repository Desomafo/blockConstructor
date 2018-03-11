<<<<<<< HEAD
// broken line whithout arrow


function broken_line(x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.coordinates = [];
	for (var i = 2; i < arguments.length; i++) {
		this.coordinates[i-2] = arguments[i];
	}
}

broken_line.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	for(var i = 0; i < this.coordinates.length; i += 2) {
		ctx.lineTo(this.coordinates[i], this.coordinates[i+1]);
	}
	ctx.stroke();
};

broken_line.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
};


// broken line whith arrow


function broken_arrowLine(x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.coordinates = [];
	for (var i = 2; i < arguments.length; i++) {
		this.coordinates[i-2] = arguments[i];
	}
}

broken_arrowLine.prototype.draw = function(ctx) {
	var headlen = 10;   // length of head in pixels
  	var angle = Math.atan2(Math.abs(this.coordinates[this.coordinates.length - 3] - this.coordinates[this.coordinates.length - 1]), Math.abs(this.coordinates[this.coordinates.length - 4] - this.coordinates[this.coordinates.length - 2]));
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	for(var i = 0; i < this.coordinates.length; i += 2) {
		ctx.lineTo(this.coordinates[i], this.coordinates[i+1]);
	}
  	ctx.moveTo(this.coordinates[this.coordinates.length - 2], this.coordinates[this.coordinates.length - 1]);
  	ctx.lineTo(this.coordinates[this.coordinates.length - 2] - headlen*Math.cos(angle - Math.PI/6), this.coordinates[this.coordinates.length - 1] - headlen*Math.sin(angle - Math.PI/6));
  	ctx.moveTo(this.coordinates[this.coordinates.length - 2], this.coordinates[this.coordinates.length - 1]);
  	ctx.lineTo(this.coordinates[this.coordinates.length - 2] - headlen*Math.cos(angle + Math.PI/6), this.coordinates[this.coordinates.length - 1] - headlen*Math.sin(angle + Math.PI/6));
 	ctx.stroke();
};

broken_arrowLine.prototype.contains = function(mx, my) {
  	return  (this.x <= mx) && (this.x + this.width >= mx) &&
     	    (this.y <= my) && (this.y + this.height >= my);
};


// plain line


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
};

line.prototype.contains = function(mx, my) {
  	return  (this.x <= mx) && (this.x + this.width >= mx) &&
          	(this.y <= my) && (this.y + this.height >= my);
};


// text box


function textBox(x, y, width, text, text_height) {
	this.x = x || 0;
  	this.y = y || 0;
  	this.width = width || 1;
  	this.text = text;
  	this.text_height = text_height || 12;
}

textBox.prototype.draw = function(ctx) {
	ctx.font = String(this.text_height) + "px Georgia";
  	ctx.textAlign = "center";
	ctx.fillStyle = 'black';
  	ctx.fillText(this.text, this.x, this.y, this.width);
};


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
};

rect.prototype.contains = function(mx, my) {
  	return  (this.x <= mx) && (this.x + this.width >= mx) &&
  	        (this.y <= my) && (this.y + this.height >= my);
};


// Parallelogramm for input and output

function ioBlock(x, y, width, height, active, trick, text, text_height = 14) {
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

ioBlock.prototype.draw = function(ctx) {
  	ctx.font = String(this.text_height) + "px Georgia";
  	ctx.fillStyle = "black";
  	ctx.textAlign = "center";
  	ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2 + this.text_height/4, this.width);
  	ctx.beginPath();
  	ctx.moveTo(this.x, this.y + this.height);
  	ctx.lineTo(this.x + this.width/4, this.y);
  	ctx.lineTo(this.x + this.width, this.y);
  	ctx.lineTo(this.x + 3*this.width/4, this.y + this.height);
  	ctx.lineTo(this.x, this.y + this.height);
  	ctx.stroke();
};

ioBlock.prototype.contains = function(mx, my) {
  	return  (this.x <= mx) && (this.x + this.width >= mx) &&
  	        (this.y <= my) && (this.y + this.height >= my);
};



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
};

roundedRect.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
};


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
};

conditionBlock.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
};


// hexagon for for loop


function hexBlock(x, y, width, height, active, trick, text, text_height = 14) {
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

hexBlock.prototype.draw = function(ctx) {
  ctx.font = String(this.text_height) + "px Georgia";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(this.text, this.x + this.width/2, this.y + this.height/2 + this.text_height/4, this.width);
  ctx.beginPath();
  ctx.moveTo(this.x, this.y + this.height/2);
  ctx.lineTo(this.x + this.width/8, this.y);
  ctx.lineTo(this.x + 7*this.width/8, this.y)
  ctx.lineTo(this.x + this.width, this.y + this.height/2);
  ctx.lineTo(this.x + 7*this.width/8, this.y + this.height);
  ctx.lineTo(this.x + this.width/8, this.y + this.height);
  ctx.lineTo(this.x, this.y + this.height/2);
  ctx.stroke();
};

hexBlock.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
};


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
};

arrow.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.width >= mx) &&
          (this.y <= my) && (this.y + this.height >= my);
};


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
};   

Shape.prototype.contains = function(mx, my) {
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
};



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
  this.selection = null;


  // places for not located blocks
  this.places = [];
  for (var y_place = 3*(this.height / 4); y_place < this.height; y_place += this.height/8) {
  	for (var x_place = 0; x_place <= 3*(this.width / 4); x_place += this.width/4) {
  		this.places.push([x_place + this.width/32, y_place + this.height/32]);
  		}
  }


  // true places for blocks
  this.true_places = [];

  // This rectangle is just for describing the area where user is clicking to move objects to scheme
  this.places_area = new rect(0, 3*(this.height / 4), this.width, this.height);
  

  // Button for checking the answers (should to style it somehow and don't forget to draw it in CanvasState.draw())
  this.button = new rect(3*(this.width / 4), this.height / 8, 60, 20, 1, 0, "Проверка");


  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);

  // Swaping places of objects

  canvas.addEventListener('mousedown', function click(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var l = shapes.length;

    // pressing the button
    if (myState.button.contains(mx, my)){
      if (myState.taskCheck()) {
        myState.background_color = 'rgba(0,255,0,0.3)';
        clearInterval(myState.proccesing);
        myState.selection = null;
        myState.valid = false;
        myState.draw();
        canvas.removeEventListener('mousedown', click, true);
      } else {
        myState.background_color = 'rgba(255,0,0,0.8)';
      }
    }


    // pressing the shapes
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].active && shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        if (myState.places_area.contains(mySel.x, mySel.y)) {
          if (myState.places.length != myState.true_places.length){
          myState.true_places.push([mySel.x, mySel.y]);
          myState.places.push([mySel.x, mySel.y] = myState.true_places.shift());
          }
        } else {
          myState.true_places.unshift([mySel.x, mySel.y]);
          [mySel.x, mySel.y] = myState.true_places.pop();
          myState.places.pop();
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


  // **** Options! ****
  this.stroke_color = 'black';
  this.stroke_width = 1;
  this.selectionColor = '#CC0000';
  this.selectionWidth = 2 ;  
  this.interval = 30;
  this.background_color = 'white';
  this.proccesing = setInterval(function() { myState.draw(); }, myState.interval);

}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  if (shape.active) {
    if (shape.true_x) {
      this.true_places.push([shape.x, shape.y]);
    }
    [shape.x, shape.y] = this.places.pop();
  }
  this.valid = false;
}

CanvasState.prototype.clear = function() {
  this.ctx.fillStyle = this.background_color;
  this.ctx.rect(0, 0, this.width, this.height);
  this.ctx.fill();
}

// Temporary function to observe the boundaries of places 
CanvasState.prototype.drawPlacesBorders = function () {
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
    this.background_color = "white";
    
    // ** Add stuff you want drawn in the background all the time here **
    

  	//this.drawPlacesBorders();

    // draw all shapes
    var l = shapes.length;
    for (var i = 0; i < l; i++) {
      ctx.strokeStyle = this.stroke_color;
      ctx.lineWidth = this.stroke_width;
      shapes[i].draw(ctx);
    }

    this.button.draw(ctx);
    
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


CanvasState.prototype.taskCheck = function() {
  for (var j = 0; j < this.shapes.length; j++) {
    if (this.shapes[j].true_x) {
      if (!(this.shapes[j].true_x == this.shapes[j].x && this.shapes[j].true_y == this.shapes[j].y)) {
        return false;
      } 
    }
  }
  return true;
=======
// plain line


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
  this.selection = null;


  // places for not located blocks
  this.places = [];
  for (var y_place = 3*(this.height / 4); y_place < this.height; y_place += this.height/8) {
  	for (var x_place = 0; x_place <= 3*(this.width / 4); x_place += this.width/4) {
  		this.places.push([x_place + this.width/32, y_place + this.height/32]);
  		}
  }


  // true places for blocks
  this.true_places = [];

  // This rectangle is just for describing the area where user is clicking to move objects to scheme
  this.places_area = new rect(0, 3*(this.height / 4), this.width, this.height);
  

  // Button for checking the answers (should to style it somehow and don't forget to draw it in CanvasState.draw())
  this.button = new rect(3*(this.width / 4), this.height / 8, 40, 20, 1, 0, "Check");


  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);

  // Swaping places of objects

  canvas.addEventListener('mousedown', function click(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var shapes = myState.shapes;
    var l = shapes.length;

    // pressing the button
    if (myState.button.contains(mx, my)){
      if (myState.taskCheck()) {
        myState.background_color = 'rgba(0,255,0,0.3)';
        clearInterval(myState.proccesing);
        myState.selection = null;
        myState.valid = false;
        myState.draw();
        canvas.removeEventListener('mousedown', click, true);
      } else {
        myState.background_color = 'rgba(255,0,0,0.8)';
      }
    }


    // pressing the shapes
    for (var i = l-1; i >= 0; i--) {
      if (shapes[i].active && shapes[i].contains(mx, my)) {
        var mySel = shapes[i];
        if (myState.places_area.contains(mySel.x, mySel.y)) {
          if (myState.places.length != 3){
          myState.true_places.push([mySel.x, mySel.y]);
          myState.places.push([mySel.x, mySel.y] = myState.true_places.shift());
          }
        } else {
          myState.true_places.unshift([mySel.x, mySel.y]);
          [mySel.x, mySel.y] = myState.true_places.pop();
          myState.places.pop();
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


  // **** Options! ****
  this.stroke_color = 'black';
  this.stroke_width = 1;
  this.selectionColor = '#CC0000';
  this.selectionWidth = 2 ;  
  this.interval = 30;
  this.background_color = 'white';
  this.proccesing = setInterval(function() { myState.draw(); }, myState.interval);

}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  if (shape.active) {
    if (shape.true_x) {
      this.true_places.push([shape.x, shape.y]);
    }
    [shape.x, shape.y] = this.places.pop();
  }
  this.valid = false;
}

CanvasState.prototype.clear = function() {
  this.ctx.fillStyle = this.background_color;
  this.ctx.rect(0, 0, this.width, this.height);
  this.ctx.fill();
}

// Temporary function to observe the boundaries of places 
CanvasState.prototype.drawPlacesBorders = function () {
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
    this.background_color = "white";
    
    // ** Add stuff you want drawn in the background all the time here **
    

  	//this.drawPlacesBorders();

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

    this.button.draw(ctx);
    
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


CanvasState.prototype.taskCheck = function() {
  for (var j = 0; j < this.shapes.length; j++) {
    if (this.shapes[j].true_x) {
      if (!(this.shapes[j].true_x == this.shapes[j].x && this.shapes[j].true_y == this.shapes[j].y)) {
        return false;
      } 
    }
  }
  return true;
>>>>>>> bfde0fb6b2c887b7972d5ceefa252d21581cb353
}