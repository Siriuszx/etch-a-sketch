const grid = document.querySelector('.grid');

const gridSizeField = document.querySelector('#current-grid-size')
const gridSizeSlider = document.querySelector('#grid-dimensions-slider');
gridSizeSlider.addEventListener('input', updateSizeField);

let mouseToggle = false;

const clearBtn = document.querySelector('.select-value-clear');
const submitBtn = document.querySelector('.select-value-submit');
clearBtn.addEventListener('click', resetGrid)
submitBtn.addEventListener('click', resizeGrid);

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

function resetGrid(){
    gridSizeSlider.value = 64;
    gridSizeField.textContent = `${gridSizeSlider.value}x${gridSizeSlider.value}`;
    resizeGrid();
}

function updateSizeField(e) {
    gridSizeField.textContent = `${this.value}x${this.value}`;
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
    if (e.type === 'mouseover' && mouseToggle) this.style.backgroundColor = 'black';
    if (e.type === 'mouseup') mouseToggle = false;
}

resizeGrid(64, 64);
updateListeners();
