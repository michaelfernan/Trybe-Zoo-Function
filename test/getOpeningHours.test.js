const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('should return the default hours when no arguments are passed', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const result = getOpeningHours();
    expect(result).toEqual(expected);
  });

  it('should return "The zoo is closed" for Monday and 09:00-AM', () => {
    const expected = 'The zoo is closed';
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe(expected);
  });

  it('should return "The zoo is open" for Tuesday and 09:00-AM', () => {
    const expected = 'The zoo is open';
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe(expected);
  });

  it('should return "The zoo is closed" for Wednesday and 09:00-PM', () => {
    const expected = 'The zoo is closed';
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe(expected);
  });

  it('should throw an error for an invalid day abbreviation (Thu)', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('should throw an error for an invalid time abbreviation (09:00-ZM)', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('should throw an error for an invalid hour format (C9:00-AM)', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });

  it('should throw an error for an invalid minutes format (Sunday and 09:c0-AM)', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });

  it('should throw an error for an hour greater than 12 (Monday and 13:00-AM)', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('should throw an error for minutes greater than 59 (Tuesday and 09:60-AM)', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
