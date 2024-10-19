const { check, runTest, skipTest } = require("../js-intro-problem-solving-and-testing-principles/test-api");


const distance = 400
const mpg = 44
const fuelCostPerLitre = 1.4
const otherCosts = [0]
const numberOfPeople = 3

function calculateCostPerPerson(distance, mpg, fuelCostPerLitre, otherCosts, numberOfPeople) {
    // Input validation
    if (distance <= 0 || mpg <= 0 || fuelCostPerLitre <= 0 || numberOfPeople <= 0) {
      throw new Error("All numeric inputs must be positive numbers.");
    }
  
    // Convert MPG to km/L (1 mile = 1.60934 km, 1 gallon = 4.54609 liters)
    const kmPerLitre = mpg * 1.60934 / 4.54609;
  
    // Calculate fuel cost for the journey
    const fuelUsed = distance / kmPerLitre;
    const fuelCost = fuelUsed * fuelCostPerLitre;
  
    // Calculate total cost
    const totalOtherCosts = otherCosts.reduce((acc, curr) => acc + curr, 0)
    const totalCost = fuelCost + totalOtherCosts;
  
    // Calculate cost per person
    const costPerPerson = totalCost / numberOfPeople;
  
    // Round to 2 decimal places and convert to pounds
    return Number((costPerPerson).toFixed(2));
}
console.log(calculateCostPerPerson(distance, mpg, fuelCostPerLitre, otherCosts, numberOfPeople), "<< calc");

const result = calculateCostPerPerson(distance, mpg, fuelCostPerLitre, otherCosts, numberOfPeople);
const reply = `the total journey cost per person is ${result}`

console.log(reply);

skipTest(
	"returns correct amount",
	function () {
		check(calculateCostPerPerson(10, 44, 1.4, [0,5,10,10], 1)).isEqualTo(25.9);
        check(calculateCostPerPerson(100, 44, 1.4, [0,5,10,10], 4)).isEqualTo(8.5);
        check(calculateCostPerPerson(1000, 55, 1.5, [0,5,10,10, 30], 2)).isEqualTo(66.02);
	}
);

skipTest(
	"returns correct error",
	function () {
		check(calculateCostPerPerson(-5, 44, 1.4, [0,5,10,10], 1)).isEqualTo("All numeric inputs must be positive numbers.");
        check(calculateCostPerPerson(-5, 44, 1.4, [0,5,10,10], 0)).isEqualTo("All numeric inputs must be positive numbers.");

	}
);
