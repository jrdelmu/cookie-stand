'use strict';

const salesDiv = document.getElementById("storeData")

let hoursOpen = ['6am', '7am', '8am', '9am', '10am','11am', '12am', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm']

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

const SeattleStore = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    let num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return num;
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  cookiePurchase: function() {
    return Math.floor(this.ranNumCust() * this.avgCust)
  },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location

  currentSalePerHour: function(){
    for(let i = 0; i < hoursOpen.length; i++){
      this.salePerHour.push(this.cookiePurchase());
    }
  },


// Display the values of each array as unordered lists in the browser
