const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      count.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });

  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const entrantCount = countEntrants(entrants);
  const { prices } = data;

  const childPrice = prices.child * entrantCount.child;
  const adultPrice = prices.adult * entrantCount.adult;
  const seniorPrice = prices.senior * entrantCount.senior;

  const total = childPrice + adultPrice + seniorPrice;

  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
