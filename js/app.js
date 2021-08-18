'use strict';

console.log('hello')
// const locationsArray = [seattle, tokyo, dubai, paris, lima]
const locationDiv = document.getElementById("locations");

const hoursOpen = ['6am', '7am', '8am', '9am', '10am','11am', '12am', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm']

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySales: [],
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // cookiePurchase: function() {
  //   return Math.floor(this.ranNumCust() * this.avgCust)
  // },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
  currentSalePerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
    }
  }
}

const tokyo = {
  location: 'Tokyo',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySales: [],
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // cookiePurchase: function() {
  //   return Math.floor(this.ranNumCust() * this.avgCust)
  // },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
  currentSalePerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
    }
  }
}

const dubai = {
  location: 'Dubai',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySales: [],
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // cookiePurchase: function() {
  //   return Math.floor(this.ranNumCust() * this.avgCust)
  // },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
  currentSalePerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
    }
  }
}

const paris = {
  location: 'Paris',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySales: [],
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // cookiePurchase: function() {
  //   return Math.floor(this.ranNumCust() * this.avgCust)
  // },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
  currentSalePerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
    }
  }
}

const lima = {
  location: 'Lima',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySales: [],
// Uses a method of that object to generate a random number of customers per hour.
  ranNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
  },
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  // cookiePurchase: function() {
  //   return Math.floor(this.ranNumCust() * this.avgCust)
  // },
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
  currentSalePerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
    }
  }
}

// Display the values of each array as unordered lists in the browser

// <article>
// <h3></h3>
// <ul>
//   <li>6am</li>
// </ul>
// </article>
function _makeElement(tag,parent,text){ // underscore is a helper function
  //creates an element matching the tag
  const element = document.createElement(tag);
  //appends it to the parent
  parent.appendChild(element);
  // if text content then we add text content
  if (text){
    element.textContent = text;
  }
  return element;
}

function renderLocation(place){
  var total = 0;
  const newArticle = _makeElement ('article', locationDiv, null)
  _makeElement('h3', newArticle, place.location)
  const newUl = _makeElement('ul', newArticle, null);
  for(var i = 0; i < hoursOpen.length; i ++){
    const text = `${hoursOpen[i]}: ${place.hourlySales[i]} cookies`;
    total += place.hourlySales[i];
    _makeElement('li', newUl, text);
  }
  var totalsString = `Total: ${total} cookies`;
  _makeElement('li', newUl, totalsString);
};

const locationsArray = [seattle, tokyo, dubai, paris, lima]

//loop through all locations and call these functions
function renderAllLocations() {
  for(var i = 0; i < locationsArray.length; i ++){
  const currentLocation = locationsArray[i];
  currentLocation.currentSalePerHour()
  renderLocation(currentLocation);
  }
}

renderAllLocations();
