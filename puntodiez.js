// lista de alimentos
const foodList = [
    { nombre: "Chilacayote", tipo: "vegetal", nivelEnergia: 460 },
    { nombre: "Carne", tipo: "animal", nivelEnergia: 500 },
    { nombre: "Ichinta", tipo: "vegetal", nivelEnergia: 250 },
  ];

  //bucle para generar los alimentos que sean necesarios 
  const foodTypes = ["vegetal", "animal", "insecto"] 
for ( i = 0; i <= 300; i++){
  foodList.push({ nombre: "Ayote", tipo: foodTypes[Math.round(Math.random() * 2)], nivelEnergia: Math.floor(Math.random() * (600 - 100 + 1)) + 100 })
}
console.log('lista de alimentos: ', foodList)
  
  // funcion para filtrar alimentos vegetales con mas de 200 en energia
  const filterFood = () => {
    return foodList.filter(
      (food) => food.tipo === "vegetal" && food.nivelEnergia > 200
    )
  }
  
  // funcion callback para sumar niveles de energia de alimentos vegetales
  const summationEnergy = (vegetablesFood) => {
    const summation = vegetablesFood.reduce(
      (total, food) => total + food.nivelEnergia,
      0
    )
    console.log("la suma de los niveles de energia en alimentos vegales es:", summation)
  }
  
  // funcion primaria 5 segudos pueda obtener los alimenos vegetales 
  const getVegetablesFood = () => {
    setTimeout(() => {
      summationEnergy(filterFood());
    }, 5000)
  }
  
  getVegetablesFood();