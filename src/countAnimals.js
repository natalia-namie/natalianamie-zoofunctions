const { species } = require('../data/zoo_data');

const countAnimals = (animal = {}) => {
  const { species: selectesSpecies, sex } = animal;

  if (!selectesSpecies) {
    const countAll = {};
    species.forEach((speciesData) => {
      countAll[speciesData.name] = speciesData.residents.length;
    });
    return countAll;
  }
  const speciesData = species.find((qSpecies) => qSpecies.name === selectesSpecies);
  if (!speciesData) {
    return 0;
  }
  if (sex) {
    const count = speciesData.residents.filter((resident) => resident.sex === sex).length;
    return count;
  }
  return speciesData.residents.length;
};

console.log(countAnimals());
console.log(countAnimals({ species: 'penguins' }));
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
