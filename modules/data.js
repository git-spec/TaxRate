const DATA = [
  {
    Lager: "DE",
    Kunde: "DE",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "CH",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "FR",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "DE",
    Kunde: "US",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "CH",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "DE",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "FR",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
  {
    Lager: "CH",
    Kunde: "US",
    Netto: 135,
    Steuersatz: null,
    Brutto: null,
    Markierung: null,
  },
];

function setData(arr) {
  for (let i = 0; i < DATA.length; i++) {
    if (DATA[i].Lager === arr[i].Lager && DATA[i].Kunde === arr[i].Kunde) {
      DATA[i].Steuersatz === arr[i].Steuersatz;
      DATA[i].Brutto === arr[i].Brutto;
      DATA[i].Markierung === arr[i].Markierung;
    }
  }
}

export { DATA, setData };
