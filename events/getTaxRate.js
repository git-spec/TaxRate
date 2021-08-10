import { setData } from "../modules/data.js";
import { euChecked } from "../actions/euChecked.js";
import { taxChecked } from "../actions/taxChecked.js";
import { bruttoEstimated } from "../actions/bruttoEstimated.js";

export function getTaxRate(data) {
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    for (let key in data[i]) {
      if (
        euChecked(data[i].Lager) &&
        euChecked(data[i].Kunde) &&
        data[i].Lager === data[i].Kunde
      ) {
        obj = {
          Lager: data[i].Lager,
          Kunde: data[i].Kunde,
          Steuersatz: taxChecked(1),
          Brutto: bruttoEstimated(taxChecked(1), data[i].Netto),
          Markierung: "X",
        };
        setData(obj);
      } else if (euChecked(data[i].Lager) && euChecked(data[i].Kunde)) {
        obj = {
          Lager: data[i].Lager,
          Kunde: data[i].Kunde,
          Steuersatz: taxChecked(3),
          Brutto: bruttoEstimated(taxChecked(3), data[i].Netto),
          Markierung: "X",
        };
        setData(obj);
      } else if (
        (euChecked(data[i].Lager) && !euChecked(data[i].Kunde)) ||
        (!euChecked(data[i].Lager) && euChecked(data[i].Kunde)) ||
        (!euChecked(data[i].Lager) &&
          !euChecked(data[i].Kunde) &&
          euChecked(data[i].Lager) !== euChecked(data[i].Kunde))
      ) {
        obj = {
          Lager: data[i].Lager,
          Kunde: data[i].Kunde,
          Steuersatz: taxChecked(1),
          Brutto: bruttoEstimated(taxChecked(1), data[i].Netto),
        };
        setData(obj);
      } else if (
        euChecked(data[i].Lager) === "CH" &&
        euChecked(data[i].Kunde) === "CH"
      ) {
        obj = {
          Lager: data[i].Lager,
          Kunde: data[i].Kunde,
          Steuersatz: taxChecked(2),
          Brutto: bruttoEstimated(taxChecked(2), data[i].Netto),
        };
        setData(obj);
      }
    }
  }
  return data;
}
