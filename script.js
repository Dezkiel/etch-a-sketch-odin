const gridContainer = document.getElementById('grid-container');
const btn10 = document.getElementById('grid-10x10');
const btn30 = document.getElementById('grid-30x30');
const btn50 = document.getElementById('grid-50x50');
let gridHeight = 10;
let gridWidth = 10;
let gridSize = gridHeight * gridWidth;

function setGridContainerStyles(height, width)
{
    gridContainer.style.display = `grid`;    
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

btn10.addEventListener('click', () =>
{
    gridContainer.replaceChildren();
    gridHeight = 10;
    gridWidth = 10;
    gridSize = gridHeight * gridWidth;

    setGridContainerStyles(gridHeight, gridWidth);
    createGrid(gridSize);
});

btn30.addEventListener('click', () =>
{
    gridContainer.replaceChildren();
    gridHeight = 30;
    gridWidth = 30;
    gridSize = gridHeight * gridWidth;

    setGridContainerStyles(gridHeight, gridWidth);
    createGrid(gridSize);
});

btn50.addEventListener('click', () =>
{
    gridContainer.replaceChildren();
    gridHeight = 50;
    gridWidth = 50;
    gridSize = gridHeight * gridWidth;

    setGridContainerStyles(gridHeight, gridWidth);
    createGrid(gridSize);
});

