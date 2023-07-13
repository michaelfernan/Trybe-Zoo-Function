const data = require('../data/zoo_data');
// Codigo realaizado com auxilo da desemvolvedora Michelle Fernando , juntos com pesquisa a internet.

const employeesList = data.employees.map((objeto) => {
  const fullName = `${objeto.firstName} ${objeto.lastName}`;
  const species = objeto.responsibleFor.map((id) =>
    data.species.find((specie) => specie.id === id));
  const locations = species.map((specie) => specie.location);
  return {
    id: objeto.id,
    fullName,
    species: species.map((specie) => specie.name),
    locations,
  };
});

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return employeesList;
  }
  const findEmployee = employeesList.find(
    (person) =>
      person.fullName.includes(objeto.name) || person.id === objeto.id,
  );

  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  return findEmployee;
}

module.exports = getEmployeesCoverage;
