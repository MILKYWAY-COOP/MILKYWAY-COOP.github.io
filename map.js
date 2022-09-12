const svg = document.querySelectorAll('path');

function printAllSVG() {
  for (i of svg) {
    console.log(i.attributes.title);
  }
}

function pathFill(path) {
    path.style.fill = 'red';
}

function pathRemoveFill(path) {
    path.style.fill = 'rgb(246, 117, 117)';
}

//listen for a mouse enter in the svg
svg.forEach((path) => {
    path.addEventListener('mouseenter', () => {
        pathFill(path);
        path.classList.add('description');
    });
    path.addEventListener('mouseleave', () => {
        pathRemoveFill(path);
        path.classList.remove('description');
        
    });
});

