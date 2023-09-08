// Coordenadas del planeta Naboo en UA (Unidades Astronómicas)
let coordenadasNaboo = {
    x: 10, // Reemplaza con las coordenadas reales de Naboo
    y: 5,  // Reemplaza con las coordenadas reales de Naboo
};

// Función para calcular la distancia entre dos planetas en UA
function calcularDistancia(planeta1, planeta2) {
    let distanciaX = Math.abs(planeta1.x - planeta2.x);
    let distanciaY = Math.abs(planeta1.y - planeta2.y);
    let distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
    return distancia;
}

// Coordenadas del planeta que deseas calcular
let coordenadasPlaneta = {
    x: 8,  // Reemplaza con las coordenadas reales del otro planeta
    y: 3,  // Reemplaza con las coordenadas reales del otro planeta
};

// Calcula la distancia entre Naboo y el otro planeta
let distancia = calcularDistancia(coordenadasNaboo, coordenadasPlaneta);

console.log(`La distancia entre Naboo y el otro planeta es de ${distancia} UA.`);
