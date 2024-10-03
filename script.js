document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart',dragStart);
    item.addEventListener('dragend',dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover',dragOver);
document.querySelector('.neutralArea').addEventListener('dragleave',dragLeave);
document.querySelector('.neutralArea').addEventListener('drop',drop);

function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
}