const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let contadorPixels = 0;
const incrementoPixels = 10;
let intervalId;

btnRight.addEventListener('mousedown', function (e) {
    if (e.buttons === 1) {
        intervalId = setInterval(function () {
            moverElementos(incrementoPixels);
        }, 50);
    }
});

btnLeft.addEventListener('mousedown', function (e) {
    if (e.buttons === 1) {
        intervalId = setInterval(function () {
            moverElementos(-incrementoPixels);
        }, 50);
    }
});

btnRight.addEventListener('mouseup', pararMoverElementos);
btnLeft.addEventListener('mouseup', pararMoverElementos);
btnRight.addEventListener('mouseout', pararMoverElementos);
btnLeft.addEventListener('mouseout', pararMoverElementos);

function moverElementos(incremento) {
    contadorPixels += incremento;
    elements.style.transform = `translateX(${contadorPixels}px)`;
}

function pararMoverElementos() {
    clearInterval(intervalId);
}
