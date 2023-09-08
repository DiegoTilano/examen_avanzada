//Funcion Tradicional
function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
console.log(obtenerNombre("ARQ2555: Sara Bel-Sun"))

//Funcion Flecha

let obtenerNombreFlecha = (codigo)=>codigo.split(":")[1]
console.log(obtenerNombreFlecha("ARQ: Andres"))

