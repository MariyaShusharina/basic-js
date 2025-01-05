const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let d = 0;
  d = 0;
  let arr1 = [];
  for (let i = 0; i < s1.length; i++) {
    arr1[i] = s1[i];
  }
  let arr2 = [];
  for (let j = 0; j < s2.length; j++) {
    arr2[j] = s2[j];
  }
  console.log(arr1);
  console.log(arr2);
  /*if (arr1.length > arr2.length) {
    let k = ;
  }*/
  for (let ii = 0; ii < arr1.length; ii++) {
    for (let iii = 0; iii < arr2.length; iii++) {
      if (arr1[ii] === arr2[iii]) {
        d += 1;
        arr2.splice(iii, 1, '?');
        arr1.splice(ii, 1, '!');
      }
    }
  }
  console.log(arr1);
  console.log(arr2);
  return d;
}

module.exports = {
  getCommonCharacterCount
};
