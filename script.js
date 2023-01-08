const gridContainer = document.getElementById('grid-container');
let gridHeight = 8;
let gridWidth = 8;
let gridSize = gridHeight * gridWidth;

function setGridContainerStyles(height, width)
{    
    gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${height}, auto)`;
}

function createGrid(size)
{
    for (let i = 0; i < size; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add('cell');   
        gridContainer.appendChild(cell);
    }
}

setGridContainerStyles(gridHeight, gridWidth);
createGrid(gridSize);

