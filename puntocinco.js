// Función para calcular el salario mensual
function calcularSalarioMensual(salarioBase, comisionPorLicencia, licenciasVendidas) {
    // Calcular el total devengado antes de impuestos
    let totalDevengado = salarioBase + (comisionPorLicencia * licenciasVendidas);
  
    // Calcular el impuesto sobre el total devengado (5%)
    let impuestos = 0.05 * totalDevengado;
  
    // Calcular el salario mensual después de impuestos
    let salarioMensual = totalDevengado - impuestos;
  
    return salarioMensual;
  }
  
  // Definir los valores para el vendedor dado
  let salarioBaseVendedor = 3500000;
  let comisionPorLicenciaVendedor = 1500000;
  let licenciasVendidasVendedor = 3; // Cambia este valor según las licencias vendidas por el vendedor
  
  // Calcular el salario mensual del vendedor
  let salarioVendedor = calcularSalarioMensual(salarioBaseVendedor, comisionPorLicenciaVendedor, licenciasVendidasVendedor);
  
  // Imprimir el resultado
  console.log("El salario mensual del watto: " + salarioVendedor);
  