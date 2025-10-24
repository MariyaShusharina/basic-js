const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let returnObject = new Object();
  let t = 0;
  let s = 0;
  t = 2 ** disksNumber - 1;
  s = Math.floor(t / turnsSpeed * 3600);
  returnObject.turns = t;
  returnObject.seconds = s;
  return returnObject;
}

module.exports = {
  calculateHanoi
};
