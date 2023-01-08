const gridContainer = document.getElementById('grid-container');
const btn10 = document.getElementById('grid-10x10');
const btn30 = document.getElementById('grid-30x30');
const btn50 = document.getElementById('grid-50x50');
let gridHeight = 10;
let gridWidth = 10;
let gridSize = gridHeight * gridWidth;
let cellColor = 'red';

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
        cell.classList.add(`cell`);
        cell.setAttribute('id', `cell${i}`);
        gridContainer.appendChild(cell);
    }
}

function changeCellColor(color, gridSize) 
{
    for(i = 0; i < gridSize; i++)
    {
        const cell = document.getElementById(`cell${i}`);
        cell.addEventListener('mouseover', () =>{
            cell.style.backgroundColor = `${color}`;
        });
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
    changeCellColor(cellColor, gridSize);
});

btn30.addEventListener('click', () =>
{
    gridContainer.replaceChildren();
    gridHeight = 30;
    gridWidth = 30;
    gridSize = gridHeight * gridWidth;

    setGridContainerStyles(gridHeight, gridWidth);
    createGrid(gridSize);
    changeCellColor(cellColor, gridSize);
});

btn50.addEventListener('click', () =>
{
    gridContainer.replaceChildren();
    gridHeight = 50;
    gridWidth = 50;
    gridSize = gridHeight * gridWidth;

    setGridContainerStyles(gridHeight, gridWidth);
    createGrid(gridSize);
    changeCellColor(cellColor, gridSize);
});