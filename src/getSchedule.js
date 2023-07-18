const data = require('../data/zoo_data');
// codigo realizado com auxilio de michelle fernandes, documentacoes e pesquisas.
function createDaySchedule(day) {
  return {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes(day)).map((animal) => animal.name),
  };
}
const allDays = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  Tuesday: createDaySchedule('Tuesday'),
  Wednesday: createDaySchedule('Wednesday'),
  Thursday: createDaySchedule('Thursday'),
  Friday: createDaySchedule('Friday'),
  Saturday: createDaySchedule('Saturday'),
  Sunday: createDaySchedule('Sunday'),
};
const animalSchedule = (animal) => data.species.find((an) => an.name === animal).availability;

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget in allDays) {
    return { [scheduleTarget]: allDays[scheduleTarget] };
  }
  if (data.species.find((an) => an.name === scheduleTarget)) return animalSchedule(scheduleTarget);
  if (Object.keys(data.hours).includes(scheduleTarget)) return createDaySchedule(scheduleTarget);
  return allDays;
};

module.exports = getSchedule;
