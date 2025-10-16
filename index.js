// Write your solution in this file!
// Global variables
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function scope
function addBurger() {
  let newBurger = 'Flatburger'; // function-scoped variable
  burgers.push(newBurger);
}

// Block scope
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);

  // Nested function to update global variable
  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }

  changeFeaturedDrink(); // update the drink
}

// Optional logs to check functionality
console.log('Menu Burgers:', burgers);
console.log('Featured Drink:', featuredDrink);

// Export for grading (optional)
module.exports = { burgers, featuredDrink, addBurger };
