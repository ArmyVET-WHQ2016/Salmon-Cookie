
'use strict';

// ADD CONSTRUCTOR
let storeLocHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; {
  function genRandom(min, max) { }
  return (Math.round(Math.random() * (min - max) + min));
}

function NewFranCity(minCust, maxCust, avgCust, franName) {
  this.franName = franName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.hrlyCust = [];
  this.hrlySales = [];
  this.totalSales = 0;

  //  PROTOTYPE
  NewFranCity.prototype.generateFrancTotal = function () {
    return total(minCust, maxCust, avgSales) + 'total';
  }

  NewFranCity.prototype.generatehrlyCust = function () {
    console.log('hrlySales' + this.francName);
  }

  NewFranCity.prototype.generatehrlySales = function () {


    const minCustSales = document.getElementById();


    const reportLedger = document.createElement();
    minCustSales.appendChild(reportLedger);

    const maxCustSales = document.createElement();
    reportLedger.appendChild(maxCustSales);
    maxCustSales.textContent = this.francName;


    const avgCustSales = document.createElement();
    reportLedger.appendChild(avgCustSales);
    avgCustSales.textContent = `${this.francName} is a new franchise ${this.totalSales} let's calculate.`;


    const ulNewFranCity = document.createElement('ul');
    reportLedger.appendChild(ulNewFranCity);
    for (let i = 0; i < this.record.length; i++) {
      const liNewFranCity = document.createElement('li');
      ulElem.appendChild(liNewFranCity);
      liNewFranCity.textContent = this.record[i];
    }

    //  table 
    const newTable = document.createElement('table');
    tableElem.appendChild(newTable);

    //  row
    const newRow = document.createElement('tr');
    tableElem.appendChild(newRow);

    // column
    const minCust = document.createElement('th');
    NewFranCity.appendChild(minCust);
    minCust.textContent = "min";

    const maxCust = document.createElement('th');
    NewFranCity.appendChild(maxCust);
    maxCust.textContent = "max";

    const avgCust = document.createElement('th');
    NewFranCity.appendChild(avgCust);
    avgCust.textContent = "avgCust";

    // add data row
    const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);

    // add data cells
    const newMinCust = document.createElement('td');
    dataRow.appendChild(newMinCust);
    newMinCust.textContent = this.newMinimal;

    const newMaxCust = document.createElement('td');
    dataRow.appendChild(newMaxCust);
    newMaxCust.textContent = this.newMaximal;

    const newAvgCust = document.createElement('td');
    dataRow.appendChild(newAvgCust);
    newAvgCust.textContent = this.newAverage;

    function genRandom(min, max,) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let newFranCity = [];

    function main() {

      franCity.push(new newFranCity(23, 65, 6.3, 'Seattle'));
      franCity.push(new newFranCity(3, 24, 1.2, 'Tokyo'));
      franCity.push(new newFranCity(11, 38, 3.7, 'Dubai'));
      franCity.push(new newFranCity(20, 38, 2.3, 'Paris'));
      franCity.push(new newFranCity(2, 16, 3.6, 'Lima'));

      newTable();
      for (let i = 0; i < franCity.length; i++) {
        franCity[i].genRandom();
        francCity[i].dataRow(i);
      }

      let formEl = document.getElementById('AddFranForm');
      formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        franCity.push(new newFranCity(parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseFloat(event.target.avgSales.value), event.target.franName.value));
        document.getElementById('addRow').remove();
        franCity[addRow.length - 1].generateRandom();
        franCity[addRow.length - 1].dataRow(addRow.length - 1);
        addRow();
      });
    }


    // let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    // // function generateNumberBetween(min, max) {
    // //     return Math.round(Math.random( * (max - min)) + min;
    // // }
    // //-------------------Object 1----------------------------------
    //     //object method (function as a property of an object)
    //     generateRandom: function () {
    //         let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    //         //console.log(randomNumber);
    //         return randomNumber;
    //     },
    //     generateHourlyCustomers: function () {
    //         for (let i = 0; i < hours.length; i++) {
    //             //console.log(hours[i]);
    //             //this.generateRandom();
    //             let randomNumber = this.generateRandom();
    //             this.hrlyCust.push(randomNumber);
    //         }
    //         console.log(this.hrlyCust);
    //     },
    //     generateCookieSales: function () {
    //         this.generateHourlyCustomers();
    //         for (let i = 0; i < hours.length; i++) {
    //             this.hrSales.push(Math.ceil(this.hrlyCust[i] * this.avgSales));  //calculated the sales per hour and pushing it into the empty array in hrSales: []
    //             //console.log(this.hrlyCust[i]);
    //         }
    //     },
    // }
    // //-----------------------------------------------------
    // const Tokyo = {
    //     storeLocation: 'Tokyo',
    //     minCust: 3,
    //     maxCust: 24,
    //     avgSales: 1.2,
    //     hrSales: [],
    //     totalSales: 0,
    //     hrlyCust: [],
    //     //object method (function as a property of an object)
    //     generateRandom: function () {
    //         let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    //         //console.log(randomNumber);
    //         return randomNumber;
    //     },
    //     generateHourlyCustomers: function () {
    //         for (let i = 0; i < hours.length; i++) {
    //             //console.log(hours[i]);
    //             //this.generateRandom();
    //             let randomNumber = this.generateRandom();
    //             this.hrlyCust.push(randomNumber);
    //         }
    //         console.log(this.hourlyCust);
    //     },
    //     generateCookieSales: function () {
    //         this.generateHourlyCustomers();
    //         for (let i = 0; i < hours.length; i++) {
    //             this.hrSales.push(Math.ceil(this.hrlyCust[i] * this.avgSales));  //calculated the sales per hour and pushing it into the empty array in hrSales: []
    //             //console.log(this.hrlyCust[i]);
    //         }
    //     },
    // }

    // const Dubai = {
    //     storeLocation: 'Dubai',
    //     minCust: 11,
    //     maxCust: 38,
    //     avgSales: 3.7,
    //     hrSales: [],
    //     totalSales: 0,
    //     hrlyCust: [],
    //     //object method (function as a property of an object)
    //     generateRandom: function () {
    //         let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    //         //console.log(randomNumber);
    //         return randomNumber;
    //     },
    //     generateHourlyCustomers: function () {
    //         for (let i = 0; i < hours.length; i++) {
    //             //console.log(hours[i]);
    //             //this.generateRandom();
    //             let randomNumber = this.generateRandom();
    //             this.hrlyCust.push(randomNumber);
    //         }
    //         console.log(this.hourlyCust);
    //     },
    //     generateCookieSales: function () {
    //         this.generateHourlyCustomers();
    //         for (let i = 0; i < hours.length; i++) {
    //             this.hrSales.push(Math.ceil(this.hrlyCust[i] * this.avgSales));  //calculated the sales per hour and pushing it into the empty array in hrSales: []
    //             //console.log(this.hrlyCust[i]);
    //         }
    //     },
    // }

    // // //-----------------------------------------------------

    // const Paris = {
    //     storeLocation: 'Paris',
    //     minCust: 20,
    //     maxCust: 38,
    //     avgSales: 2.3,
    //     hrSales: [],
    //     totalSales: 0,
    //     hrlyCust: [],
    //     //object method (function as a property of an object)
    //     generateRandom: function () {
    //         let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    //         //console.log(randomNumber);
    //         return randomNumber;
    //     },
    //     generateHourlyCustomers: function () {
    //         for (let i = 0; i < hours.length; i++) {
    //             //console.log(hours[i]);
    //             //this.generateRandom();
    //             let randomNumber = this.generateRandom();
    //             this.hrlyCust.push(randomNumber);
    //         }
    //         console.log(this.hourlyCust);
    //     },
    //     generateCookieSales: function () {
    //         this.generateHourlyCustomers();
    //         for (let i = 0; i < hours.length; i++) {
    //             this.hrSales.push(Math.ceil(this.hrlyCust[i] * this.avgSales));  //calculated the sales per hour and pushing it into the empty array in hrSales: []
    //             //console.log(this.hrlyCust[i]);
    //         }
    //     },
    // }

    // // //-----------------------------------------------------
    // const Lima = {
    //     storeLocation: 'Lima',
    //     minCust: 2,
    //     maxCust: 16,
    //     avgSales: 4.6,
    //     hrSales: [],
    //     totalSales: 0,
    //     hrlyCust: [],
    //     //object method (function as a property of an object)
    //     generateRandom: function () {
    //         let randomNumber = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    //         //console.log(randomNumber);
    //         return randomNumber;
    //     },
    //     generateHourlyCustomers: function () {
    //         for (let i = 0; i < hours.length; i++) {
    //             //console.log(hours[i]);
    //             //this.generateRandom();
    //             let randomNumber = this.generateRandom();
    //             this.hrlyCust.push(randomNumber);
    //         }
    //         console.log(this.hrlyCust);
    //     },
    //     generateCookieSales: function () {
    //         this.generateHourlyCustomers();
    //         for (let i = 0; i < hours.length; i++) {
    //             this.hrSales.push(Math.ceil(this.hrlyCust[i] * this.avgSales));  //calculated the sales per hour and pushing it into the empty array in hrSales: []
    //             //console.log(this.hrlyCust[i]);
    //         }
    //     },
    // }
    // // console.log(Paris.generateRandom())

    // function generateHourlyCustomers(city) {
    //     for (let index = 0; index < hours.length; index++) {
    //         const element = hours[index];
    //         let total = city.generateRandom() * city.avgSales;
    //         total = Math.round(total);
    //         console.log('total', total)
    //         city.hrSales.push();{
    //              [element]; result


    //     }
    // }

    // }

    // generateHourlyCustomers(Seattle);
    // console.log('total,Seattle,generateHourlyCustomertotal', Seattle.hrSales)
    // generateHourlyCustomers(Tokyo);
    // console.log('total,Tokyo,generateHourlyCustomertotal', Tokyo.hrSales)
    // generateHourlyCustomers(Dubai);
    // console.log('total,Dubai,generateHourlyCustomertotal', Dubai.hrSales)
    // generateHourlyCustomers(Paris);
    // console.log('total,Paris,generateHourlyCustomertotal', Paris.hrSales)
    // generateHourlyCustomers(Lima);
    // console.log('total,Lima,generateHourlyCustomertotal', Lima.hrSales)
  }
};