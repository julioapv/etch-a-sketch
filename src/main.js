const gridContainer = document.querySelector(".grid-container")
const changeGridBtn = document.querySelector(".change-grid-button")
const gridInput = document.querySelector(".grid-input")
const gridesizeText = document.querySelector(".grid-size-display")

const hoverStyles = `
    background: pink;
`;

let gridSize = 16;

function createGrid(size) {
    gridContainer.innerText = "";
    
    const itemStyles = `
    flex: 0 0 calc(100% / ${size});
    height: calc(500px / ${size}); 
    max-height: calc(500px / ${size});
    `

    let isDrawing = false;

    gridContainer.addEventListener("mousedown", () => {
        isDrawing = true;
    })

    gridContainer.addEventListener("mouseup", () => {
        isDrawing = false;
    })

    for (let i = 0; i < size * size; i++) {

        let gridSquare = document.createElement("div")
        gridSquare.classList.add("item")
        gridSquare.style.cssText = itemStyles
        

        gridSquare.addEventListener("mouseover", (event) => {
            if (isDrawing) {
                gridSquare.style.cssText = `
                ${itemStyles}
                ${hoverStyles}
            `;}
        })
        gridContainer.appendChild(gridSquare)
    }
}

changeGridBtn.addEventListener("click", (event) => {
    let inputValue = gridInput.value;
    gridInput.value = ""

    if((inputValue >= 1) && (inputValue <= 100)) {
        createGrid(inputValue)
        gridesizeText.innerText = `Current grid size: ${inputValue}`
    } else {
        window.alert("Please introduce a valid argument, a number between 1 and 100")
        createGrid(gridSize)
        gridesizeText.innerText = `Current grid size: ${gridSize}`
    }
    event.preventDefault();
})

gridesizeText.innerText = `Current grid size: ${gridSize}`
createGrid(gridSize)
