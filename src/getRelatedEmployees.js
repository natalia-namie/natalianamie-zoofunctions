const { employees } = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers.some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees
      .filter((employee) => employee.managers.some((manager) => manager === managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
