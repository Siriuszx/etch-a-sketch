const grid = document.querySelector('.grid');

const gridSizeField = document.querySelector('#current-grid-size')
const gridSizeSlider = document.querySelector('#grid-dimensions-slider');
gridSizeSlider.addEventListener('input', updSizeFieldHandler);

let mouseToggle = false;
let isColorRandom = false;

const clearBtn = document.querySelector('.select-value-clear');
const submitBtn = document.querySelector('.select-value-submit');
const rndColorBtn = document.querySelector('.select-color');
clearBtn.addEventListener('click', resetGrid)
submitBtn.addEventListener('click', resizeGridHandler);
rndColorBtn.addEventListener('click', toggleClrHandler);

function updateCellListeners() {
    const colNodes = document.querySelectorAll('.grid-column');

    colNodes.forEach(el => {
        el.addEventListener('mouseover', colorCellHandler)
        el.addEventListener('mousedown', colorCellHandler)
        el.addEventListener('mouseup', colorCellHandler)
    })
}

function resetGrid() {
    gridSizeSlider.value = 64;
    gridSizeField.textContent = `${gridSizeSlider.value}x${gridSizeSlider.value}`;
    resizeGridHandler();
}

function resizeGridHandler(event) {
    grid.innerHTML = '';

    let gridSize = gridSizeSlider.value;

    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        grid.appendChild(newRow);

        for (let y = 0; y < gridSize; y++) {
            const newColumn = document.createElement('div');
            newColumn.classList.add('grid-column');
            newRow.appendChild(newColumn);
        }
    }
    updateCellListeners();
}

function colorCellHandler(event) {
    if (event.type === 'mousedown') mouseToggle = true;
    if (mouseToggle) {
        if (!isColorRandom) {
            this.style.backgroundColor = 'black';
        } else {
            this.style.backgroundColor =
                `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
    }
    if (event.type === 'mouseup') mouseToggle = false;
}

function updSizeFieldHandler(event) {
    gridSizeField.textContent = `${this.value}x${this.value}`;
}

function toggleClrHandler(event) {
    isColorRandom = !isColorRandom;

    if (isColorRandom) {
        rndColorBtn.style.backgroundColor = 'purple';
        rndColorBtn.style.color = 'white';
    }
    else {
        rndColorBtn.style.backgroundColor = '';
        rndColorBtn.style.color = '';
    }
}

resizeGridHandler(64, 64);
updateCellListeners();
