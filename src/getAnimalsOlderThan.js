const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((species) => species.name === animal);

  if (!species) {
    throw new Error('Espécie não encontrada');
  }

  return species.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
