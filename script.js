const grid = document.querySelector('.grid');
let canDraw = false;


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

function returnEl(e){
    console.log(e);
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
    if(e.type === 'mousedown') canDraw = true;
    if(e.type === 'mouseover' && canDraw) this.style.backgroundColor = 'black';
    if(e.type === 'mouseup') canDraw = false;
}

initGrid(64, 64);
updateListeners();
