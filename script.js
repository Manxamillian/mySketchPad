

const mainContainer = document.body;                        

const canvas = document.createElement('canvas');                //actual drawing area within the sketchBoard area - has a border
const inputArea = document.createElement('div');                //div area below the sketchBoard and canvas for input box and confirm btn
const clearCanvasBtn = document.createElement("button");            //confirm button to change canvas size
const smallCanvasBtn = document.createElement("button");
const mediumCanvasBtn = document.createElement("button");
const largeCanvasBtn = document.createElement("button");


mainContainer.append(canvas);                                   // APPEND
mainContainer.append(inputArea);
inputArea.append(smallCanvasBtn);
inputArea.append(mediumCanvasBtn);
inputArea.append(largeCanvasBtn);
inputArea.append(clearCanvasBtn);

                     
inputArea.classList.add('inputArea');                           // ADD CLASSES & IDs
smallCanvasBtn.classList.add('btn');
smallCanvasBtn.setAttribute('id', 'small');
mediumCanvasBtn.classList.add('btn');
mediumCanvasBtn.setAttribute('id', 'medium');
largeCanvasBtn.classList.add('btn');
largeCanvasBtn.setAttribute('id', 'large');
clearCanvasBtn.classList.add('btn');
clearCanvasBtn.setAttribute('id', 'canvas');

document.getElementById('small').textContent="SMALL";           // LABEL BUTTONS
document.getElementById('medium').textContent="MEDIUM";
document.getElementById('large').textContent="LARGE";
document.getElementById('canvas').textContent="CLEAR";

const buttons = document.querySelectorAll("button");            // CHANGE CANVAS SIZE TO SMALL, MEDIUM, OR LARGE
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "small") {
            canvasSize(400, 400);
        }
        if (button.id == "medium") {
            canvasSize(600, 600);
        }
        if (button.id == "large") {
            canvasSize(800, 800);
        }
        if (button.id == "canvas") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
});


function canvasSize(newWidth, newHeight) {                      // CHANGE CANVAS SIZE
    canvas.width = newWidth;                                     // reset the resolution for the canvas
    canvas.height = newHeight;

    canvas.style.width = newWidth;                               // reset canvas display size
    canvas.style.height = newHeight;
}

                                                                // INITIAL CANVAS RESOLUTION AND DISPLAY SIZE
canvas.width = 400;                                             // initial canvas resolution
canvas.height = 400;

canvas.style.width = 400;                                       // set initial canvas display size
canvas.style.height = 400;



//NOTES - still to do:
//1. cursor doesn't match up with draw-line with small and large canvas size
//2. could add a color swatch to choose which color user wants to use





let canvasBoundaries = canvas.getBoundingClientRect();

/////////////log/////////////////
console.log(canvasBoundaries);

const ctx = canvas.getContext('2d');                            //setting up canvas 'pen down' drawing              
let coordinates = { x: 0, y: 0 };

const width = canvas.width;                                 // TESTING
const height = canvas.height;

/////////////log/////////////////
console.log(width, height);


document.addEventListener('mousedown', start);                  //event listener for mouse down - start drawing
document.addEventListener('mouseup', stop);                     //event listener for mouse up - end drawing

function reposition(event){
    coordinates.x = event.clientX - canvas.offsetLeft;
    coordinates.y = event.clientY - canvas.offsetTop;

    /////////////log/////////////////
    console.log(coordinates);                             // TESTING
}

function start(event) {
    document.addEventListener('mousemove', draw);
    reposition(event);
}

function stop() {
    document.removeEventListener('mousemove', draw);
}

function draw(event) {
    ctx.beginPath();                                            //drawing start position
    ctx.lineJoin = 'round';                                     //makes the drawing smooth
    ctx.lineCap = 'round';                                      // ""      ""      ""
    ctx.lineWidth = 4;                                          //makes the width of the line being drawn, 6px vs the default of 1px
    ctx.strokeStyle = '#000080';
    ctx.moveTo(coordinates.x, coordinates.y);                   //change the starting position to the new position - starting 'pen down' position 
    reposition(event);
    ctx.lineTo(coordinates.x, coordinates.y);                   //draws a line to the new position
    ctx.stroke();                                               //shows the line on the screen
}



