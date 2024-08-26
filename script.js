//input that ask how many grid the user wants to draw
//reset button
//color button

const container = document.querySelector(".container");
const buttonGridPreset = document.createElement("button");

function generateGrid (squareAmount) {
    let grid = squareAmount**2;

    for(let i=0; i < grid; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.border = "1px solid black";
        squareDiv.style.width = "20px";
        squareDiv.style.height = "20px";
        squareDiv.style.backgroundColor = "white"
            
         squareDiv.addEventListener("mouseenter", () => {
            squareDiv.style.backgroundColor = "black"
        });
       
    
        //22px * 16
        container.appendChild(squareDiv);
        container.style.width = `${22 * squareAmount}px`
    }
}


let informGrid;
do{
    informGrid = prompt("How many squares do you want that your grid has? Ex: 16 (16x16): " );
    if(informGrid < 16) {
        alert("The grid is too small");
    } else if(informGrid > 30) {
        alert("The grid is too big");
    }

}while(informGrid < 16 || informGrid > 30)

generateGrid(informGrid);

    




