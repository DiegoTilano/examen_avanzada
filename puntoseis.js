const repeateAges = (ages = []) => {
    return ages.reduce((counter, age)=>{
        counter[age] = (counter[age]|| 0) + 1;
        return counter;
    },{})
} 

const clasificacionEdades = (age = []) => {
    const generateCodes = ages.map(() => Math.floor(Math.random()* 100))

    const findOldAge = ages.reduce((previusAge, currentAge)=> currentAge > previusAge ? currentAge : previusAge, ages[0]);

    repeateAges(ages)

    console.log('Edades: ',ages)
    console.log('Codigo Generados: ',generateCodes)
    console.log('Edad Mayor: ',findOldAge)
    console.log('Edades Repetidas: ',repeateAges(ages))
}

const ages = []

for(i = 1; i<= 20; i++) {
    const generateAges = Math.round(Math.random()* (60 - 18 + 1)) + 18
    ages.push(generateAges)
}

clasificacionEdades(ages)