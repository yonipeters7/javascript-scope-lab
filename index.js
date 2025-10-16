// Global variables
const burgers = ['Hamburger', 'Cheeseburger']; // must use const
let featuredDrink = 'Strawberry Milkshake'; // must use let

// Function-scoped variable using const
function addBurger() {
  const newBurger = 'Flatburger'; // function-scoped const
  burgers.push(newBurger);
}

// Block-scoped variable using const
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped const
  burgers.push(anotherNewBurger);
}

// Function that changes the global variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

// Optional: verify functionality
console.log('Menu Burgers:', burgers);
console.log('Featured Drink:', featuredDrink);

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { burgers, featuredDrink, addBurger, changeFeaturedDrink };
}
