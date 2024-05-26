require ( './helpers.js' );

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');
const path = require('path');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', function() {
  describe('burgers', function() {
    it('is declared using const', function() {
      expect(burgers);
      expect(js).to.match(/const[ \n]+burgers/, 'Expected burgers to be declared using const');
    });

    it("is set to the value of an array that has the following 2 elements: 'Hamburger' and 'Cheeseburger'", function() {
      expect(js).to.match(/const[ \n]+burgers[ \n]*=[ \n]*\[(.|\n)*\]/, 'Expected the value of burgers to be an array');
      expect(burgers.includes('Hamburger')).to.equal(true, "Expected the burgers array to have the string 'Hamburger' as one of its elements");
      expect(burgers.includes('Cheeseburger')).to.equal(true, "Expected the burgers array to have the string 'Cheeseburger' as one of its elements");
    });
  });

  describe('featuredDrink', function() {
    it('is declared using let', function() {
      expect(featuredDrink);
      expect(js).to.match(/let[ \n]+featuredDrink/, 'Expected featuredDrink to be declared using let');
    });

    it('is a string', function () {
      expect(typeof featuredDrink).to.equal('string', 'Expected the data type of featuredDrink to be a string');
    });

    it("is set to the value 'Strawberry Milkshake'", function() {
      expect(featuredDrink).to.equal('Strawberry Milkshake');
    });
  });

  describe('addBurger', function() {
    it('is a function', function() {
      expect(typeof addBurger).to.equal('function', 'Expected the data type of addBurger to be a function');
    });

    it("when called, creates a function-scoped variable named newBurger using the const keyword and assigns it the value 'Flatburger'", function() {
      expect(js).to.match(/const[ \n]+newBurger[ \n]*=[ \n]*['"`]Flatburger['"`]/, "Expected newBurger to be declared using const and have the value 'Flatburger'");
      expect(typeof newBurger).to.equal('undefined', 'Expected newBurger to be function-scoped, declared inside of the addBurger function, not globally accessible');
    });

    it("when called, uses the .push() array method to add newBurger, which has the value of 'Flatburger', to the burgers array", function() {
      addBurger();
      expect(burgers.includes('Flatburger')).to.equal(true, "Expected the burgers array to have the string 'Flatburger' as one of its elements");
    });
  });

  describe('if statement', function() {
    it('has a condition with the value of true', function() {
      expect(js).to.match(/if\(true\)/, "Expected the use of an if statement whose condition has the value of true")
    });

    it("creates a block-scoped variable named anotherNewBurger using the const keyword and assign it the value 'Maple Bacon Burger'", function() {
      expect(js).to.match(/if\(true\)[ \n]*\{(.|\n)*const[ \n]+anotherNewBurger[ \n]*=[ \n]*['"`]Maple Bacon Burger['"`](.|\n)*\}/, "Expected anotherNewBurger to be a block-scoped variable that is declared inside of the if statement using const and has the value 'Maple Bacon Burger'");
    });

    it("uses the .push() array method to add anotherNewBurger, which has the value of 'Maple Bacon Burger', to the burgers array", function() {
      expect(burgers.includes('Maple Bacon Burger')).to.equal(true, "Expected the burgers array to have the string 'Maple Bacon Burger' as one of its elements");
    });
  });
});
