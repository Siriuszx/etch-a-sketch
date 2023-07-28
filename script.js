const grid = document.querySelector('.grid');

let width = 64;
let height = 64;

console.log(grid);

for (let i = 0; i < height; i++) {
    let newRow = document.createElement('div');
    newRow.classList.add('grid-row');
    grid.appendChild(newRow);
    
    for (let y = 0; y < width; y++) {
        let newColumn = document.createElement('div');
        newColumn.classList.add('grid-column');
        newRow.appendChild(newColumn);    
    }
}