const grid = document.querySelector('.grid');

const gridSizeField = document.querySelector('#current-grid-size')
const gridSizeSlider = document.querySelector('#grid-dimensions-slider');

gridSizeSlider.addEventListener('mouseover', updateSizeValue)
gridSizeSlider.addEventListener('mousedown', updateSizeValue)
gridSizeSlider.addEventListener('mouseup', updateSizeValue)


let mouseToggle = false;

const submitSize = document.querySelector('.select-value-submit');
submitSize.addEventListener('click', resizeGrid);

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

function updateSizeValue(e) {
    if (e.type === 'mousedown') mouseToggle = true;
    if (e.type === 'mouseover' && mouseToggle) gridSizeField.textContent = this.value;
    if (e.type === 'mouseup') mouseToggle = false;
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
