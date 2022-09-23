

const mainContainer = document.body;                        

const canvas = document.createElement('canvas');                //actual drawing area within the sketchBoard area - has a border
const inputArea = document.createElement('div');                //div area below the sketchBoard and canvas for input box and confirm btn
const userInputBox = document.createElement("input");           //input box for changing canvas size and clearing previous drawing
const confirmBtn = document.createElement("button");            //confirm button to change canvas size

mainContainer.append(canvas);                                   // APPEND
mainContainer.append(inputArea);
inputArea.append(userInputBox);                                 
inputArea.append(confirmBtn);

userInputBox.classList.add('inputBox');                         // ADD CLASSES & IDs
confirmBtn.classList.add('confirmSizeBtn');
inputArea.classList.add('inputArea');
canvas.setAttribute('id', 'canvas');

userInputBox.setAttribute("type", "text");                      //set input box style
userInputBox.style.border = "3px solid rgb(0,0,0)";
userInputBox.style.backgroundColor = "rgb(255, 255, 239)";

confirmBtn.style.border = "3px solid rgb(0,0,0)";               //set confirm button style
confirmBtn.textContent = "Confirm";

canvas.width = 800;                                             // set the resolution for the canvas
canvas.height = 500;

canvas.style.width = 800;                                       // set canvas display size
canvas.style.height = 500;

let canvasBoundaries = canvas.getBoundingClientRect();
console.log(canvasBoundaries);

const ctx = canvas.getContext('2d');                            //setting up canvas 'pen down' drawing              
let coordinates = { x: 0, y: 0 };

const width = canvas.width;                               // TESTING
const height = canvas.height;
console.log(width, height);


document.addEventListener('mousedown', start);                  //event listener for mouse down - start drawing
document.addEventListener('mouseup', stop);                     //event listener for mouse up - end drawing

function reposition(event){
    coordinates.x = event.clientX - canvas.offsetLeft;
    coordinates.y = event.clientY - canvas.offsetTop;
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



