const alldivs = document.querySelectorAll('div');

for (let div of alldivs) {
    div.style.height = `${parseInt(window.innerHeight)}px`;
    div.style.width = `${parseInt(window.innerWidth)}px`
}