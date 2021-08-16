const DATA = [
  {
    Lager: "DE",
    Kunde: "DE",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "CH",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "FR",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "US",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "CH",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "DE",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "FR",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "US",
    Netto: 135.00,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
];

function setData(obj) {
  for (let i = 0; i < DATA.length; i++) {
    if (DATA[i].Lager === obj.Lager && DATA[i].Kunde === obj.Kunde) {
      DATA[i].Steuersatz = obj.Steuersatz;
      DATA[i].Brutto = obj.Brutto;
      if (obj.Markierung) {
        DATA[i].Markierung = obj.Markierung;
      }
    }
  }
}

export { DATA, setData };
