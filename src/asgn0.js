// DrawRectangle.js
function main() {
// Retrieve <canvas> element <- (1)

    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d'); 

    // Draw a blue rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // set to black
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    // NOT DYNAMIC
    //var v1 = new Vector3([2.25, 2.25, 0]); 
    //drawVector(ctx, v1, "red"); 

    document.getElementById('button').addEventListener('click', function(){ 

        handleDrawEvent(ctx); 

        }

    );
} 

// drawVector(v, color) 
function drawVector(canvas, vector, color){ 

    // scale = 20 
    var x = vector.elements[0] * 20; 
    var y = vector.elements[1] * 20; 

    // color 
    canvas.strokeStyle = color; 

    // pen down 
    canvas.beginPath(); 

    // move pen to center 
    canvas.moveTo(200, 200); 

    // line length 
    canvas.lineTo(200 + x, 200 - y); 

    // draw 
    canvas.stroke(); 

}

// handleDrawEvent() 
function handleDrawEvent(canvas){ 

    // clear canvas 
    canvas.clearRect(0, 0, 400, 400); 
    canvas.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    canvas.fillRect(0, 0, 400, 400);  

    // grab input from HTML 
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;

    var v1 = new Vector3([x1, y1, 0]); 

    drawVector(canvas, v1, "red"); 
}