const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textRojo = document.getElementById("texto-rojo");
const textVerde = document.getElementById("texto-verde");
const textAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textRojo.innerText = rojo;
textVerde.innerText = verde;
textAzul.innerText = azul;

function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", (e) => {
    rojo = e.target.value;
    textRojo.innerHTML = rojo;
    actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
    verde = e.target.value;
    textVerde.innerHTML = verde;
    actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
    azul = e.target.value;
    textAzul.innerHTML = azul;
    actualizarColor(rojo, verde, azul);
});