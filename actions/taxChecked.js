/**
 * checks tax rate of object
 *
 * @param {number} num number of case
 * @returns {number} tax rate
 */
export function taxChecked(num) {
  switch (num) {
    case 1:
      return 19;
    case 2:
      return 7.7;
    case 3:
      return 0;
    default:
      break;
  }
}
