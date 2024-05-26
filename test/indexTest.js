require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

const fs = require('fs')
const path = require('path')

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function() {
  describe('burgers', function() {
    it('is declared using const', function() {
      expect(burgers);
      expect(js).to.match(/const[ \n]+burgers/, 'Expected burgers to be declared using const');
    });

    it("is set to the value of an array that has the following 2 elements: 'Hamburger' and 'Cheeseburger'", function() {
      expect(js).to.match(/const[ \n]+burgers[ \n]*=[ \n]*\[(.|\n)*\]/, 'Expected the value of burgers to be an array');
      expect(burgers.includes('Hamburger')).to.equal(true, "Expected the burgers array to have the string 'Hamburger' as one of its elements")
      expect(burgers.includes('Cheeseburger')).to.equal(true, "Expected the burgers array to have the string 'Cheeseburger' as one of its elements")
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
});
