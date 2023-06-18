let COLORES = ['ROJO', 'AMARILLO', 'VERDE','AMARILLO']
alert ("valida la consola") 
const semaforoLuz = function (){
  let color = COLORES.pop()
  console.log(`El semaforo esta en ${color}`)
  if (COLORES.length === 0){
    COLORES = ['ROJO', 'AMARILLO', 'VERDE', 'AMARILLO']
  }
  return color
}



const timeoutId = setTimeout(semaforoLuz, 500)
clearTimeout(timeoutId)
let identificador = setInterval(semaforoLuz, 3000)
console.log(identificador);