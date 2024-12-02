console.log('Hallo');
const gridContainer = document.querySelector(".grid-container")

let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
    let gridSquare = document.createElement("div")
    gridSquare.innerText = i
    gridSquare.classList.add("item")
    gridContainer.appendChild(gridSquare)
    console.log("beep");
    

}
