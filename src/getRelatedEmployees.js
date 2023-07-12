const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managedEmployees = employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);

  return managedEmployees;
};

module.exports = { isManager, getRelatedEmployees };
