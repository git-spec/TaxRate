// import {data} from "./data";
// import {EU} from 'modules';


/* ********************************************************************* MODULES ******************************************************************** */

const DATA = [
    {
        "Lager": "DE",
        "Kunde": "DE",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "DE",
        "Kunde": "CH",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "DE",
        "Kunde": "FR",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "DE",
        "Kunde": "US",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "CH",
        "Kunde": "CH",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "CH",
        "Kunde": "DE",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "CH",
        "Kunde": "FR",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    },
    {
        "Lager": "CH",
        "Kunde": "US",
        "Netto": 135,
        "Steuersatz": null,
        "Brutto": null,
        "Markierung": null
    }
];

const EU = [
    'DE',
    'FR'
];

/* ********************************************************************* ACTIONS ******************************************************************** */

/**
 * checks if object is member of eu
 * 
 * @param {string} prop property value of object
 * @returns {boolean}
 */
function euChecked(prop) {
    return EU.includes(prop);
}

/**
 * checks tax rate of object
 * 
 * @param {number} key number of case
 * @returns {number} tax rate
 */
function taxChecked(key) {
    switch (key) {
        case 1:
            return 19;
        case 2:
            return 7,7;
        case 3:
            return 0;
        default:
            break;
    }
}

/**
 * estimates brutto of netto
 * 
 * @param {number} tax tax rate
 * @param {number} netto netto price
 * @returns {number} brutto price
 */
function bruttoEstimated(tax, netto) {
    return netto + netto * (tax / 100);
}

/* ********************************************************************* EVENTS ******************************************************************** */

/**
 * set tax rate, brutto price and sign for transactions within eu to dom
 * 
 */
function getTaxRate() {
    let items = document.querySelectorAll('tbody tr')
    for (let i = 0; i < items.length; i++) {
        for (key in items[i].children) {
            if (
                euChecked(items[i].children[0].innerText)
                && euChecked(items[i].children[1].innerText)
                && items[i].children[0].innerText === items[i].children[1].innerText
            ) {
                items[i].children[3].innerText = taxChecked(1) + ' %';
                items[i].children[4].innerText = bruttoEstimated(taxChecked(1), parseFloat(items[i].children[2].innerText));
                items[i].children[5].innerText = 'X';
            } else if (
                euChecked(items[i].children[0].innerText)
                && euChecked(items[i].children[1].innerText)
            ) {
                items[i].children[3].innerText = taxChecked(3) + ' %';
                items[i].children[4].innerText = bruttoEstimated(taxChecked(3), parseFloat(items[i].children[2].innerText));
                items[i].children[5].innerText = 'X';
            } else if (
                euChecked(items[i].children[0].innerText)
                && !euChecked(items[i].children[1].innerText)
                || !euChecked(items[i].children[0].innerText)
                && euChecked(items[i].children[1].innerText)
                || !euChecked(items[i].children[0].innerText)
                && !euChecked(items[i].children[1].innerText)
                && items[i].children[0].innerText !== items[i].children[1].innerText
            ) {
                items[i].children[3].innerText = taxChecked(3) + ' %';
                items[i].children[4].innerText = bruttoEstimated(taxChecked(3), parseFloat(items[i].children[2].innerText));
            } else if (items[i].children[0].innerText === 'CH' && items[i].children[1].innerText === 'CH') {
                items[i].children[3].innerText = taxChecked(2) + ' %';
                items[i].children[4].innerText = bruttoEstimated(taxChecked(2), parseFloat(items[i].children[2].innerText));
            };
        };     
    };
}

/* ***************************************************************************************************************************************** */

/* set data to dom */
let tbody = document.querySelector('tbody')
for (let i = 0; i < DATA.length; i++) {
    let tr = document.createElement('tr');
    tr.id = i;
    for (key in DATA[i]) {
        let td = document.createElement('td');
        td.innerText = DATA[i][key];
        tr.append(td);
    };
    tbody.append(tr);     
};

let button = document.querySelector('button');
button.addEventListener('click', function(e) {
    e.preventDefault;
    getTaxRate();
});