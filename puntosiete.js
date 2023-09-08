// Función para encontrar el número más cercano a cero
function numeroMasCercanoAZero(numeros) {
    let numeroMasCercano = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        const numeroActual = numeros[i];
        // Comparamos el valor absoluto del número actual con el del número más cercano hasta ahora
        if (Math.abs(numeroActual) < Math.abs(numeroMasCercano)) {
            numeroMasCercano = numeroActual;
        }
    }

    return Math.abs(numeroMasCercano); // Devolvemos el valor absoluto del número más cercano a cero
}

// Ejemplo de uso
const numerosDeNaves = [-5, 10, -3, 7, -2, 15, -8, 4, -1, 6, 12, -9, 20, -11, 0, 13, -6, 18, -4, 9, 2, -7, 17, -10, 5, 11, -12, 3, 19, -13, 1, 16, -14, 8, 14, -15];
const numeroCercano = numeroMasCercanoAZero(numerosDeNaves);

console.log("El número más cercano a cero es: " + numeroCercano);
