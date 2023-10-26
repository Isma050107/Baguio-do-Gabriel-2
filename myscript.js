const g = 9.81;

function calcular() {
    const F1 = Number(document.querySelector("#velocidadeinicial").value); //
    const F2 = Number(document.querySelector("#angulo").value); //
    const D1 = Number(document.querySelector("#tempo").value); //
    const D2 = Number(document.querySelector("#posicaoinicialhorizontal").value); // 

    const y = y0 + v * Math.sin(θ * (Math.PI / 180)) * t + (g * t ** 2 / 2); //
    const x = x0 + v * Math.cos(θ * (Math.PI / 180)) * t;  //

    document.querySelector("#resultadovertical").textContent = "Resultado Vertical: " + y.toFixed(2);
    document.querySelector("#resultadohorizontal").textContent = "Resultado Horizontal: " + x.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
})