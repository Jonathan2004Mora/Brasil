
function movimiento1(event) {
    event.target.style.transition = "transform 0.2s ease-in-out";
    event.target.style.transform = "rotate(5deg) translateY(-5px)";
}

function movimiento2(event) {
    event.target.style.transition = "transform 0.3s ease-in-out";
    event.target.style.transform = "rotate(-5deg) translateX(10px)";
}

function movimiento3(event) {
    event.target.style.transition = "transform 0.3s ease-in-out";
    event.target.style.transform = "scale(1.2) rotate(15deg)";
}

function movimiento4(event) {
    event.target.style.transition = "transform 0.3s ease-in-out";
    event.target.style.transform = "translateY(-10px) translateX(10px)";
}


function elegirMovimientoAleatorio(event) {
    const movimientos = [movimiento1, movimiento2, movimiento3, movimiento4];
    const movimientoAleatorio = movimientos[Math.floor(Math.random() * movimientos.length)];
    movimientoAleatorio(event);
}

function revertir(event) {
    event.target.style.transform = "rotate(0deg) translateY(0px) translateX(0px) scale(1)";
}

// Selección de todos los títulos
const titulos = document.querySelectorAll('.titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('mouseover', elegirMovimientoAleatorio);  
    titulo.addEventListener('mouseout', revertir); 
});