const { species, employees } = require('../data/zoo_data');

const getEmployeeObject = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((sp) => employee.responsibleFor.includes(sp.id))
    .map((names) => names.name),
  locations: species.filter((loc) => employee.responsibleFor.includes(loc.id))
    .map((locations) => locations.location),
}));

const getEmployees = (empl) => { // get employees by name or id.
  if (empl.name) {
    return employees.some((n) => n.firstName === empl.name || n.lastName === empl.name);
  } if (empl.id) {
    return employees.some((id) => id.id === empl.id);
  } throw new Error('Informações inválidas');
};

const getEmployeesCoverage = (empl) => {
  if (!empl) {
    return getEmployeeObject();
  } if (getEmployees(empl)) {
    const employee = employees
      .find((e) => e.firstName === empl.name || e.lastName === empl.name || e.id === empl.id);
    return getEmployeeObject().find((e) => e.id === employee.id);
  } throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
