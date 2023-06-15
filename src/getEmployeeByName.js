const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const foundEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  if (foundEmployee) {
    return foundEmployee;
  } return 'Nome ou sobrenome inválido.';
};

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
