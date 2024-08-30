const content = document.querySelector(".content");
const container = document.querySelector(".container");
const preset = document.querySelector(".presets");
const input = document.querySelector("input")
const buttonInput = document.querySelector(".btn-input");
const buttonReset = document.querySelector(".btn-reset");
const buttonRandomColor = document.querySelector(".btn-color")

let isRandomColor = false;

//creates square style of grid
const squareDiv = document.createElement("div");
squareDiv.className = "square-div";
squareDiv.style.width = "16px";
squareDiv.style.height = "16px";
squareDiv.style.border = "1px solid black";


//draws the grid in the screen
function generateGrid(squareAmount) {
    container.innerHTML = "";
    let grid = squareAmount**2;

    for(let i=0; i < grid; i++) {
        container.appendChild(squareDiv.cloneNode(true));
    }

    container.style.width = `${16 * squareAmount}px` //adjusts the container width according to the number of squares and their size which is 16px;

    const selectSquares = container.querySelectorAll("div");
    selectSquares.forEach(item => {
        item.addEventListener("mouseenter", () => {    
            isRandomColor ? item.style.backgroundColor = generateRandomColor() : item.style.backgroundColor = "black";
        });
    });
};

function generateRandomColor() {
    const preColors = "0123456789abcdef";
    let color = "#";

    for(let i=0; i < 6; i++) {
        let id = Math.floor(Math.random() * preColors.length);
        color += `${preColors.charAt(id)}`;
    }
   
    return color;
}

//BUTTONS FUNCTIONS

//when the "go button" is pressed it calls the function that draws the grid
function goButton() {
    let squares = input.value;
    input.value = "";
    input.focus();
    
    //can't draw a grid beetween this sizes
    if(squares < 16 || squares > 50) {
        alert("The amount os squares is outside of the range");
    } else {
        generateGrid(squares); 
    } 
};

//resets the drawing on grid
function resetButton() {
    const gridDiv = document.querySelectorAll(".square-div");
    gridDiv.forEach(item => {
        item.style.backgroundColor = ""
    });
};

//select all the preset buttons and add an event handler when clicking
preset.addEventListener("click", (event)=> {
    let element = event.target;
   
    switch(element.className) {
        case  "btn-input":
            goButton();
        break;

        case "btn-reset":
            resetButton();
        break;

        case "btn-color":
            isRandomColor = !isRandomColor;
        break;
    }
})












