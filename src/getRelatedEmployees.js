const { employees } = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers.some((manager) => manager === id));

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees
      .filter((employee) => employee.managers.some((manager) => manager === managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
