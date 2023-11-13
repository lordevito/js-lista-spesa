`use strict`;

const lista = document.querySelector(`.lista`);
const spesa = [`pane`, `pasta`, `gamberi`, `pomodoro`, `pepe`, `basilico`];
let i = 0;

while (i < spesa.length){
    const prodotti = document.createElement(`li`);
    prodotti.classList.add(`prodotti`);
    prodotti.innerHTML = spesa[i];
    lista.append(prodotti);
    console.log(spesa[i]);
    i++;
}

