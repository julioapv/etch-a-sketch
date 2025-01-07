const gridContainer = document.querySelector(".grid-container")
const changeGridBtn = document.querySelector(".change-grid-button")
const resetGridBton = document.querySelector(".reset-grid-button")
const normalBtn = document.querySelector(".normal-mode-button")
const rainbowBtn = document.querySelector(".rainbow-mode-button")
const opacityBtn = document.querySelector(".opacity-mode-button")
const eraserBtn = document.querySelector(".eraser-mode-button")
const gridInput = document.querySelector(".grid-input")
const gridesizeText = document.querySelector(".grid-size-display")

let hoverStyles = `
    background: black;
`;


let currentMode = "normal";
let isDrawing = false;
let gridSize = 16;

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function createGrid(size) {
    gridContainer.innerHTML = "";
    
    const itemStyles = `
    flex: 0 0 calc(100% / ${size});
    height: calc(500px / ${size}); 
    max-height: calc(500px / ${size});
    `

    gridContainer.addEventListener("mousedown", () => {
        isDrawing = true;
    });

    gridContainer.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    gridContainer.addEventListener("mouseleave",() => {
        isDrawing = false;
    });

    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("item")
        gridSquare.style.cssText = itemStyles
        

        gridSquare.addEventListener("mouseover", (e) => {
            if (!isDrawing) return; 

            switch(currentMode) {
                case "rainbow":
                    gridSquare.style.cssText = `
                    ${itemStyles}
                    background: ${getRandomColor()};
                    `;
                    break;
                case "normal":
                    gridSquare.style.cssText = `
                    ${itemStyles}
                    background: black;
                    `;
                    break;
                case "eraser":
                    gridSquare.style.cssText = `
                    ${itemStyles}
                    background: white;
                    `;
                    break;
                case "opacity":
                gridSquare.style.cssText = `
                ${itemStyles}
                background: black;
                `;
                let currentOpacity = parseFloat(gridSquare.dataset.opacity) || 0;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    gridSquare.dataset.opacity = currentOpacity.toFixed(1);
                    gridSquare.style.cssText = `
                        ${itemStyles}
                        background: black;
                        opacity: ${currentOpacity.toFixed(1)};
                    `;
                }
                break;
            }

        gridSquare.addEventListener("mousedown",(e) => {
            e.preventDefault();
            isDrawing = true;
        })

        switch(currentMode) {
            case "rainbow":
                gridSquare.style.cssText = `
                ${itemStyles}
                background: ${getRandomColor()};
                `;
                break;
            case "normal":
                gridSquare.style.cssText = `
                ${itemStyles}
                background: black;
                `;
                break;
            case "eraser":
                gridSquare.style.cssText = `
                ${itemStyles}
                background: white;
                `;
                break;
            case "opacity":
                gridSquare.style.cssText = `
                ${itemStyles}
                background: black;
                `;
                let currentOpacity = parseFloat(gridSquare.dataset.opacity) || 0;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1; // increment
                    gridSquare.dataset.opacity = currentOpacity.toFixed(1); // store updated value
                    gridSquare.style.cssText = `
                        ${itemStyles}
                        background: black;
                        opacity: ${currentOpacity.toFixed(1)};
                    `;
                }
                break;
        }

        })
        gridContainer.appendChild(gridSquare)
    }
}

function clearActiveButtons() {
    normalBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');
    opacityBtn.classList.remove('active');
    eraserBtn.classList.remove('active');
}

normalBtn.addEventListener("click",() => {
    if(currentMode === "normal") {
        clearActiveButtons();
        normalBtn.classList.toggle("active")
    } else {
        currentMode = "normal";
        clearActiveButtons();
        normalBtn.classList.toggle("active")
    }
})

rainbowBtn.addEventListener("click",() => {
    if(currentMode === "rainbow") {
        currentMode = "normal";
        clearActiveButtons();
        normalBtn.classList.toggle("active")
    } else {
        currentMode = "rainbow";
        clearActiveButtons();
        rainbowBtn.classList.toggle("active")
    }
})

eraserBtn.addEventListener("click",() => {
    if(currentMode === "eraser") {
        currentMode = "normal";
        clearActiveButtons();
        normalBtn.classList.toggle("active")
    } else {
        currentMode = "eraser";
        clearActiveButtons();
        eraserBtn.classList.toggle("active")
    }
})

opacityBtn.addEventListener("click",() => {
    if(currentMode === "opacity") {
        currentMode = "normal";
        clearActiveButtons();
        normalBtn.classList.toggle("active")
    } else {
        currentMode = "opacity";
        clearActiveButtons();
        opacityBtn.classList.toggle("active")
    }
})

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

resetGridBton.addEventListener("click", (event) => {
    createGrid(gridSize)
    event.preventDefault();
})

gridesizeText.innerText = `Current grid size: ${gridSize}`
createGrid(gridSize)