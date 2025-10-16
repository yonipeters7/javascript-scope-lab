// Global variables
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable inside a function
function addBurger() {
  let newBurger = 'Flatburger'; // function-scoped
  burgers.push(newBurger);
}

// Block-scoped variable inside an always-true condition
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
  burgers.push(anotherNewBurger);
}

// Function that changes the global variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

// Optional: verify locally
console.log('Menu Burgers:', burgers);
console.log('Featured Drink:', featuredDrink);

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { burgers, featuredDrink, addBurger, changeFeaturedDrink };
}
