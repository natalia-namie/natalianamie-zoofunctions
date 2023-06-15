const { species } = require('../data/zoo_data');

/* Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade
como parâmetro, e então retornar se todos os animais dessa espécie possuem essa
idade ou são mais velhos. */

const getAnimalsOlderThan = (animal, age) => species
  .find((specie) => specie.name === animal).residents
  .every((resident) => resident.age >= age);

console.log(getAnimalsOlderThan('otters', 5));

module.exports = getAnimalsOlderThan;
