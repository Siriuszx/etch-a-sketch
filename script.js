const grid = document.querySelector('.grid');

const gridSizeField = document.querySelector('#current-grid-size')
const gridSizeSlider = document.querySelector('#grid-dimensions-slider');
gridSizeSlider.addEventListener('input', updateSizeField);

let mouseToggle = false;
let isColorRandom = false;

const clearBtn = document.querySelector('.select-value-clear');
const submitBtn = document.querySelector('.select-value-submit');
const rndColorBtn = document.querySelector('.select-color');
clearBtn.addEventListener('click', resetGrid)
submitBtn.addEventListener('click', resizeGrid);
rndColorBtn.addEventListener('click', toggleColoring);

function resizeGrid() {
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
    updateListeners();
}

function resetGrid() {
    gridSizeSlider.value = 64;
    gridSizeField.textContent = `${gridSizeSlider.value}x${gridSizeSlider.value}`;
    resizeGrid();
}

function updateSizeField(e) {
    gridSizeField.textContent = `${this.value}x${this.value}`;
}

function toggleColoring(e) {
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

function updateListeners() {
    const colNodes = document.querySelectorAll('.grid-column');

    colNodes.forEach(el => {
        el.addEventListener('mouseover', colorCell)
        el.addEventListener('mousedown', colorCell)
        el.addEventListener('mouseup', colorCell)
    })
}

function colorCell(e) {
    if (e.type === 'mousedown') mouseToggle = true;
    if (mouseToggle) {
        if (!isColorRandom) {
            this.style.backgroundColor = 'black';
        } else {
            this.style.backgroundColor =
                `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
    }
    if (e.type === 'mouseup') mouseToggle = false;
}

resizeGrid(64, 64);
updateListeners();
