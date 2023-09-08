let planetaUno={
    nombre:"tierra",
    latitud:80.5,
    longitud:109.10,
    nivelOxigeno:0.21,
    volumenAgua:0.1
}

let planetaDos={
    nombre:"Namek",
    latitud:180.5,
    longitud:19.10,
    nivelOxigeno:0.8,
    volumenAgua:0.5
}

//Preparando las entradas
let planetas=Array(planetaUno,planetaDos)

function analizarPlanetas(planetaUno){
    //Recorrer arreglo
     let mapa = planetas.map(function(planeta){
        return planeta.volumenAgua
    })

    let suma=0
    mapa.forEach(function(volumenAgua){
        suma=suma+volumenAgua
    })

    return suma // o mapa
}

console.log(analizarPlanetas(planetas))
