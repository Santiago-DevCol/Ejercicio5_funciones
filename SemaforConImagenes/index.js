let coloresArray = ['ROJO', 'AMARILLO', 'VERDE','AMARILLO']
const selectorImagen = document.getElementById('colorImg')

function cambiarColorSemaforo(params) {
    const selctFinalColor = coloresArray.pop()
    console.log(selctFinalColor);
    if (!coloresArray.length) {
        coloresArray = ['ROJO', 'AMARILLO', 'VERDE','AMARILLO']
    }
    selectorImagen.src = `./img/${selctFinalColor}.png`
    return selctFinalColor
}

const intervalo = setInterval(cambiarColorSemaforo,3000)