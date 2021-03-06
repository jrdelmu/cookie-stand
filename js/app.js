'use strict';

const formElem = document.getElementById('addStore')

const locationTable = document.getElementById("locations");

const hoursOpen = ['6am', '7am', '8am', '9am', '10am','11am', '12am', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm']

Store.storeFronts = [];

function Store(location, minCust, maxCust, avgCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.hourlySales = [];
  // adds the new location we just constructed to the Store.storeFronts array
  Store.storeFronts.push(this);
}
// prototype methods can be accessed from any location
Store.prototype.ranNumCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}

Store.prototype.currentSalePerHour = function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiePurchase = this.ranNumCust() * this.avgCust;
      this.hourlySales.push(Math.ceil(cookiePurchase));
  }
}
const seattle = new Store('Seattle', 23, 65, 6.3)
const tokyo = new Store('Tokyo', 3, 24, 1.2)
const Dubai = new Store('Dubai', 11, 38, 3.7)
const paris = new Store('Paris', 20, 38, 2.3)
const lima = new Store('Lima', 2, 16, 4.6)

// adds data to each stores hourlySales array
function fillHourlySalesStoreFronts(){
  for(let i = 0; i < Store.storeFronts.length; i ++){
    const currentStore = Store.storeFronts[i];
    currentStore.currentSalePerHour();
  }
}

fillHourlySalesStoreFronts();


// // Stores the min/max hourly customers, and the average cookies per customer, in object properties

// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   hourlySales: [],
// // Uses a method of that object to generate a random number of customers per hour.
//   ranNumCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
//   },
// //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   // cookiePurchase: function() {
//   //   return Math.floor(this.ranNumCust() * this.avgCust)
//   // },
// // Store the results for each location in a separate array??? perhaps as a property of the object representing that location
//   currentSalePerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiePurchase = this.ranNumCust() * this.avgCust;
//       this.hourlySales.push(Math.ceil(cookiePurchase));
//     }
//   }
// }

// const tokyo = {
//   location: 'Tokyo',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   hourlySales: [],
// // Uses a method of that object to generate a random number of customers per hour.
//   ranNumCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
//   },
// //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   // cookiePurchase: function() {
//   //   return Math.floor(this.ranNumCust() * this.avgCust)
//   // },
// // Store the results for each location in a separate array??? perhaps as a property of the object representing that location
//   currentSalePerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiePurchase = this.ranNumCust() * this.avgCust;
//       this.hourlySales.push(Math.ceil(cookiePurchase));
//     }
//   }
// }

// const dubai = {
//   location: 'Dubai',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   hourlySales: [],
// // Uses a method of that object to generate a random number of customers per hour.
//   ranNumCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
//   },
// //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   // cookiePurchase: function() {
//   //   return Math.floor(this.ranNumCust() * this.avgCust)
//   // },
// // Store the results for each location in a separate array??? perhaps as a property of the object representing that location
//   currentSalePerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiePurchase = this.ranNumCust() * this.avgCust;
//       this.hourlySales.push(Math.ceil(cookiePurchase));
//     }
//   }
// }

// const paris = {
//   location: 'Paris',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   hourlySales: [],
// // Uses a method of that object to generate a random number of customers per hour.
//   ranNumCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
//   },
// //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   // cookiePurchase: function() {
//   //   return Math.floor(this.ranNumCust() * this.avgCust)
//   // },
// // Store the results for each location in a separate array??? perhaps as a property of the object representing that location
//   currentSalePerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiePurchase = this.ranNumCust() * this.avgCust;
//       this.hourlySales.push(Math.ceil(cookiePurchase));
//     }
//   }
// }

// const lima = {
//   location: 'Lima',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   hourlySales: [],
// // Uses a method of that object to generate a random number of customers per hour.
//   ranNumCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);    
//   },
// //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//   // cookiePurchase: function() {
//   //   return Math.floor(this.ranNumCust() * this.avgCust)
//   // },
// // Store the results for each location in a separate array??? perhaps as a property of the object representing that location
//   currentSalePerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiePurchase = this.ranNumCust() * this.avgCust;
//       this.hourlySales.push(Math.ceil(cookiePurchase));
//     }
//   }
// }

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

//
Store.prototype.renderLocation = function(body){
  var total = 0;
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);
  const thElem = _makeElement('th', rowElem, this.location);
  for(let i = 0; i < hoursOpen.length; i ++){
    let cookiesThisHour = this.hourlySales[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour)
  }
  _makeElement('td', rowElem, total)
}
  // const newArticle = _makeElement ('article', locationDiv, null)
  // _makeElement('h3', newArticle, location.name);
//   const newUl = _makeElement('ul', newArticle, null);
//   for(var i = 0; i < hoursOpen.length; i ++){
//     const text = `${hoursOpen[i]}: ${location.hourlySales[i]} cookies`;
//     total += location.hourlySales[i];
//     _makeElement('li', newUl, text);
//   }
//   var totalsString = `Total: ${total} cookies`;
//   _makeElement('li', newUl, totalsString);
// };

// const locationsArray = [seattle, tokyo, dubai, paris, lima]

//loop through all locations and call these functions
function renderAllLocations() {
  let tbodyElem = _makeElement('tbody', locationTable, null)
  for(let i = 0; i < Store.storeFronts.length; i ++){
    Store.storeFronts[i].renderLocation(tbodyElem)
  }
  // for(var i = 0; i < locationsArray.length; i ++){
  // const currentLocation = locationsArray[i];
  // currentLocation.currentSalePerHour()
  // renderLocation(currentLocation);
  // }
}

function makeTheFooter(){
  const tfootElem = _makeElement('tfoot', locationTable, null);
  const rowElem = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowElem, 'Hourly Total')
  let hourlyTotal = 0;
  let grandTotal = 0;
  for(let i = 0; i < hoursOpen.length; i ++){
    for(let j = 0; j < Store.storeFronts.length; j ++){
    let currentStore = Store.storeFronts[j];
    hourlyTotal += currentStore.hourlySales[i]
    }
    _makeElement('td', rowElem, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  _makeElement('td', rowElem, grandTotal)
}



function handleSubmit (event) {
  event.preventDefault()
  console.log(event);
  console.log(event.target.location.value);
  const location = event.target.location.value;
  let minCust = event.target.minCust.value;
  minCust = parseInt(minCust);
  let maxCust = event.target.maxCust.value;
  maxCust = parseInt(maxCust);
  let avgCust = event.target.avgCust.value;
  avgCust = parseInt(avgCust);
  // let hourlySales = event.target.hourlySales.value;



let userStore = new Store(location, minCust, maxCust, avgCust);
console.log(userStore);
userStore.currentSalePerHour();
// at this point, erase the contents of the table an rerender a new thead, tbody and tfoot
renderAllLocations();
event.target.reset();

}

renderAllLocations();
makeTheFooter();

formElem.addEventListener('submit', handleSubmit);