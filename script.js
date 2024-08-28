//input that ask how many grid the user wants to draw
//reset button
//color button

const container = document.createElement("div");
const content = document.querySelector(".content");
const buttonInput = document.querySelector(".btn-input");
const buttonReset = document.querySelector(".btn-reset");
const input = document.querySelector("input")

container.className = ".container";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";



function generateGrid(squareAmount) {
    let grid = squareAmount**2;
    
    for(let i=0; i < grid; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.border = "1px solid black";
        squareDiv.style.width = "16px";
        squareDiv.style.height = "16px";
        squareDiv.style.backgroundColor = "white"
        
        squareDiv.addEventListener("mouseenter", () => {
            squareDiv.style.backgroundColor = "black"
        }); 

        container.appendChild(squareDiv);
    }
    container.style.width = `${16 * squareAmount}px`
}



buttonInput.addEventListener('click', () => {
    container.innerHTML = ""; 
    var informGrid = input.value;
    input.value = "";
    if(informGrid < 16 || informGrid > 50) {
        alert("The grid value is outside of range")
    } else {
        generateGrid(informGrid);
        content.appendChild(container);
    }
})









    




