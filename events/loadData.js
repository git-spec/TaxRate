/**
 * set data to dom object
 *
 * @param {Object} obj dom object
 * @param {Array} data array with objects
 */
export function loadData(obj, data) {
  obj.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    for (let key in data[i]) {
      let td = document.createElement("td");
      if (data[i][key] && key === 'Netto' || data[i][key] && key === 'Brutto') {
        td.innerText = Number.parseFloat(data[i][key]).toFixed(2);
      } else {
        td.innerText = data[i][key];
      }
      tr.append(td);
    }
    obj.append(tr);
  }
}
