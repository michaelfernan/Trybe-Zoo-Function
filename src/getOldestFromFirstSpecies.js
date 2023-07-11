const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeData = data.employees.find((employee) => employee.id === id);
  const firstSpeciesId = employeeData.responsibleFor[0];
  const species = data.species.find((specie) => specie.id === firstSpeciesId);
  const oldestAnimal = species.residents.reduce((oldest, current) => {
    if (current.age > oldest.age) {
      return current;
    }
    return oldest;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
