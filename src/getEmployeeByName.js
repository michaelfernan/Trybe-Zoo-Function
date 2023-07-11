const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find(
    (emp) =>
      emp.firstName === employeeName || emp.lastName === employeeName,
  );

  if (!employee) {
    return {};
  }

  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: employee.managers,
    responsibleFor: employee.responsibleFor,
  };
};

module.exports = getEmployeeByName;
