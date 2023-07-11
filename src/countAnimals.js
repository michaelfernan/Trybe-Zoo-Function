const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species, sex } = animal || {};

  if (!species) {
    const animalCount = {};
    data.species.forEach((animalF) => {
      animalCount[animalF.name] = animalF.residents.length;
    });
    return animalCount;
  }

  const animalSpecies = data.species.find((animalData) => animalData.name === species);

  if (!animalSpecies) {
    return 0;
  }

  if (!sex) {
    return animalSpecies.residents.length;
  }

  const animalCount = animalSpecies.residents.filter((resident) => resident.sex === sex).length;
  return animalCount;
};

module.exports = countAnimals;
