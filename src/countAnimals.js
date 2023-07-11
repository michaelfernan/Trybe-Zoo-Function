const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  const result = {};

  if (!animal) {
    for (const animal of species) {
      result[animal.name] = animal.residents.length;
    }
  } else if (animal.species && !animal.sex) {
    const foundSpecies = species.find((a) => a.name === animal.species);
    result[foundSpecies.name] = foundSpecies.residents.length;
  } else if (animal.species && animal.sex) {
    const foundSpecies = species.find((a) => a.name === animal.species);
    const filteredResidents = foundSpecies.residents.filter((resident) => resident.sex === animal.sex);
    result[foundSpecies.name] = filteredResidents.length;
  }

  if (Object.keys(result).length === 1) {
    return Object.values(result)[0];
  }

  return result;
};

module.exports = countAnimals;
