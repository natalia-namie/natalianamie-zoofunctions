const { species, hours } = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const time = Object.values(hours);
const info = {};

const zooWeek = (scheduleTarget) => {
  weekDays.forEach((weekDay, index) => {
    const openingHour = `Open from ${time[index].open}am until ${time[index].close}pm`;
    const speciesAv = species
      .filter((name) => name.availability.includes(weekDay)).map((animal) => animal.name);

    info[weekDay] = {
      officeHour: weekDay === 'Monday' ? 'CLOSED' : openingHour,
      exhibition: weekDay === 'Monday' ? 'The zoo will be closed!' : speciesAv,
    };
  });

  return info;
};

const getSchedule = (scheduleTarget) => {
  if (species.some((animal) => animal.name === scheduleTarget)) {
    return species.filter((animal) => animal.name === scheduleTarget)[0].availability;
  }

  if (hours[scheduleTarget]) {
    const days = {};
    days[scheduleTarget] = zooWeek()[scheduleTarget];
    return days;
  }

  return zooWeek();
};

console.log(getSchedule('lions'));
console.log(getSchedule('Tuesday'));
console.log(getSchedule('Monday'));
console.log(getSchedule());

module.exports = getSchedule;
