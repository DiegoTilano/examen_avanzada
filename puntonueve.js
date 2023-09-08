//Declarar la funcion principal
function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawam){
    setTimeout(function(){
        let padawam ={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawam(padawam)
    },2000)
}


//Llamar a la funcion principal
crearPadawan("Grogu","yodora",100,30,function(padawam){
    if(padawam.edadEstudiante<15){
        console.log('Vas a la clase de manejo de la fuerza')
    }else{
        console.log('Vas a la clase de manejo del sable de luz')

    }
})