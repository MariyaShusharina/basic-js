const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let d = false;
  d = false;
  let arr = [];
  arr = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        arr.push(members[i].trim());
      }
    }
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j].charAt(0);
      arr[j] = arr[j].toUpperCase();
    }
    arr.sort();
    d = arr.join('');
  }
  return d;
}

module.exports = {
  createDreamTeam
};
