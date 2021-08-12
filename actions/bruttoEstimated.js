/**
 * estimates brutto of netto
 *
 * @param {number} tax tax rate
 * @param {number} netto netto price
 * @returns {number} brutto price
 */
export function bruttoEstimated(tax, netto) {
  let brutto = netto + netto * (tax / 100);
  return brutto.toFixed(2);
}
