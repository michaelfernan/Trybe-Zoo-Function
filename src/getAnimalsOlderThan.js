const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const foundSpecies = data.species.find((sp) => sp.name === animal);

  if (!foundSpecies) {
    throw new Error('Espécie não encontrada');
  }

  return foundSpecies.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
