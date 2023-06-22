const { species, employees } = require('../data/zoo_data');

const getEmployeeObject = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((sp) => employee.responsibleFor.includes(sp.id))
    .map((names) => names.name),
  locations: species.filter((loc) => employee.responsibleFor.includes(loc.id))
    .map((locations) => locations.location),
}));

const getEmployeesCoverage = (empl) => {
  if (!empl) {
    return getEmployeeObject();
  }
  if (employees.some((n) => n.firstName === empl.name || n.lastName === empl.name)) {
    return getEmployeeObject()
      .find((e) => e.fullName.includes(empl.name));
  }
  if (employees.some((id) => id.id === empl.id)) {
    return getEmployeeObject().find((e) => e.id === empl.id);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
