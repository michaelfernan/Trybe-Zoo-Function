const data = require('../data/zoo_data');

const allDays = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Tuesday')).map((animal) => animal.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Wednesday')).map((animal) => animal.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Thursday')).map((animal) => animal.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Friday')).map((animal) => animal.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Saturday')).map((animal) => animal.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((animal) =>
      animal.availability.includes('Sunday')).map((animal) => animal.name),
  },
};

const animalSchedule = (animal) => data.species.find((an) => an.name === animal).availability;

const daySchedule = (day) => {
  const obj = {
    [day]: {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species.filter((animal) =>
        animal.availability.includes(day)).map((animal) => animal.name),
    },
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (data.species.find((an) => an.name === scheduleTarget)) return animalSchedule(scheduleTarget);
  if (Object.keys(data.hours).includes(scheduleTarget)) return daySchedule(scheduleTarget);
  return allDays;
}

module.exports = getSchedule;
