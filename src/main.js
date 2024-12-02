const gridContainer = document.querySelector(".grid-container")

const hoverStyles = `
    background: pink;
`;

let gridSize = 10;

function createGrid(size) {
    gridContainer.innerText = "";
    
    const itemStyles = `
    flex: 0 0 calc(100% / ${size});
    height: calc(800px / ${size}); 
    max-height: calc(800px / ${size});
    `

    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement("div")
        gridSquare.innerText = i
        gridSquare.classList.add("item")
        gridSquare.style.cssText = itemStyles
        
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.cssText = `
                ${itemStyles}
                ${hoverStyles}
            `;
        })
        gridContainer.appendChild(gridSquare)
    }
}

createGrid(gridSize)