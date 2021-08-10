export function loadData(obj, data) {
  obj.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    for (let key in data[i]) {
      let td = document.createElement("td");
      td.innerText = data[i][key];
      tr.append(td);
    }
    obj.append(tr);
  }
}
