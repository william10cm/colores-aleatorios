const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexDecimal() {
    let digitos = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio];
    }
    return color;
}

addEventListener('click', function() {
    let colorAleatorio = generarColorHexDecimal();
    document.body.style.backgroundColor = colorAleatorio;
    color.textContent = colorAleatorio;
});