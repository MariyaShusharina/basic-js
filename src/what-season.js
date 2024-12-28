const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let m = '';
  if (typeof date === 'undefined') {
    return('Unable to determine the time of year!');
  }
  if (!(date instanceof Date && !isNaN(Date.parse(date)))) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    console.log('Invalid date!');
    throw new Error('Invalid date!');
  }
  m = date.getMonth();
  if (m > -1 && m < 2 || m === 11) {
    return 'winter';
  }
  if (m > 1 && m < 5) {
    return 'spring';
  }
  if (m > 4 && m < 8) {
    return 'summer';
  }
  if (m > 7 && m < 11) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
