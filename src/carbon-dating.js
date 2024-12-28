const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let d = false;
  d = false;
  let sampActivity = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  sampActivity = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' && !Number.isNaN(sampActivity) && sampActivity > 0 && sampActivity < 15) {
    d = Math.ceil(Math.log(MODERN_ACTIVITY / sampActivity) / k);
  }
  return d;
}

module.exports = {
  dateSample
};
