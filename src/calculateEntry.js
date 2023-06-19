const data = require('../data/zoo_data');

const countEntrants = (entrantsCount) => ({ // calcular a quantidade de visitantes por faixa etária.
  child: entrantsCount.filter((childAge) => childAge.age < 18).length,
  adult: entrantsCount.filter((adultAge) => adultAge.age >= 18 && adultAge.age < 50).length,
  senior: entrantsCount.filter((seniorAge) => seniorAge.age >= 50).length,
});

const calculateEntry = (entrantsCalc) => {
  if (entrantsCalc === undefined || entrantsCalc.length === 0 || !entrantsCalc) {
    return 0;
  }

  const entrantCount = countEntrants(entrantsCalc);

  const child = data.prices.child * entrantCount.child;
  const adult = data.prices.adult * entrantCount.adult;
  const senior = data.prices.senior * entrantCount.senior;

  const totalEntry = ((child + adult + senior) * 100) / 100;

  return totalEntry;
};

module.exports = { calculateEntry, countEntrants };
