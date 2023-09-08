// Función de flecha para calcular la temperatura media
let calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima) => {
    return (temperaturaMaxima + temperaturaMinima) / 2;
};

// Ejemplo de uso
let temperaturaMaxima = 25; // Reemplaza con la temperatura máxima del día
let temperaturaMinima = 15; // Reemplaza con la temperatura mínima del día

let temperaturaMedia = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);

console.log(`La temperatura media de la luna de Endor es de ${temperaturaMedia} grados Celsius.`);
