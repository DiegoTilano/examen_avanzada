// Función para contar sables de luz defectuosos con energía negativa
function contarSablesDefectuosos(energias) {
    // Inicializamos un contador en 0 para llevar la cuenta
    let contador = 0;

    // Recorremos el arreglo de energías usando un bucle for
    for (let i = 0; i < energias.length; i++) {
        // Comprobamos si la energía actual es negativa (menor que 0)
        if (energias[i] < 0) {
            // Si es negativa, incrementamos el contador en 1
            contador++;
        }
    }

    // Devolvemos el valor final del contador, que representa la cantidad de sables defectuosos con energía negativa
    return contador;
}

// Ejemplo de uso
let energias = [2, 4, -8, 5, -6];
let sablesDefectuosos = contarSablesDefectuosos(energias);

// Mostramos el resultado en la consola
console.log(`La cantidad de sables de luz defectuosos con energía negativa es ${sablesDefectuosos}.`);
