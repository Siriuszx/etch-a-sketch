const grid = document.querySelector('.grid');

function initGrid(width, height) {
    for (let i = 0; i < height; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        grid.appendChild(newRow);

        for (let y = 0; y < width; y++) {
            const newColumn = document.createElement('div');
            newColumn.classList.add('grid-column');
            newRow.appendChild(newColumn);
        }
    }
}

function updateListeners() {
    const colNodes = document.querySelectorAll('.grid-column');

    colNodes.forEach(el => {
        el.addEventListener('mouseover', colorCell)
    })
}

function colorCell(e) {
    this.style.backgroundColor = 'black';
}

initGrid(64, 64);
updateListeners();
