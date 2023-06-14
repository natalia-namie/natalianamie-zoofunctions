const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui

  if (ids.length === 0) {
    return [];
  } if (ids.some((id) => !data.species.some((species) => species.id === id))) {
    return 'ID inválido';
  }
  const foundSpecies = data.species.filter((species) => ids.includes(species.id));
  return foundSpecies;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
