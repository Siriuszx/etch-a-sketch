const gridCols = document.querySelectorAll('.grid-column');

gridCols.forEach(el => {
    el.addEventListener('click', pingSelf);
})

function pingSelf(e) {
    console.log(this);
}