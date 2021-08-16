import { EU } from "../modules/eu.js";

/**
 * checks if object is member of eu
 *
 * @param {string} prop property value of object
 * @returns {boolean}
 */
export function euChecked(prop) {
  return EU.includes(prop);
}
