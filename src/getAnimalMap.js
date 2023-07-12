const data = require('../data/zoo_data');
// codigo realizados com consutas na internet , e auxilio da desenvolvedora Michelle Fernandes e Dannille Jeanine
function getAnimalMap(options) {
  const { includeNames, sorted, sex } = options || {};
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }; function filterBySex(residents) {
    return !sex ? residents : residents.filter(({ sex: residentSex }) => residentSex === sex);
  }
  function sortNames(names) {
    return sorted ? names.sort() : names;
  }
  data.species.forEach(({ name: animalName, location, residents }) => {
    const filteredResidents = filterBySex(residents);
    const names = includeNames ? sortNames(filteredResidents.map(({ name }) => name)) : undefined;

    animalMap[location].push(includeNames ? { [animalName]: names } : animalName);
  });

  return animalMap;
}

module.exports = getAnimalMap;
