const assert = require('chai').assert;
const myApp = require('../aritGeo.js');

describe('Array', function () {
  describe('handle valid input', function () {
    it('Should return Arithmetric Progression as value', function () {
      assert.equal(myApp.aritGeo([5, 7, 9, 11, 13, 15]), 'Arithmetric');
      assert.equal(myApp.aritGeo([0, 10, 20, 30, 40, 50]), 'Arithmetric');
      assert.equal(myApp.aritGeo([0, -10, -20, -30, -40, -50]), 'Arithmetric');
    });
    it('Should return Geometric Progression as value', function () {
      assert.equal(myApp.aritGeo([2, 6, 18, 54]), 'Geometric');
      assert.equal(myApp.aritGeo([1, -2, 4, -8]), 'Geometric');
      assert.equal(myApp.aritGeo([1, -1, 1, -1, 1, -1]), 'Geometric');
    });
  });
  describe('handle invalid input', function () {
    it('should return -1 as value for false progression', function () {
      assert.equal(myApp.aritGeo([1, 3, 4, 5, 12, 5, 18]), '-1');
      assert.equal(myApp.aritGeo([1, 4, 9, 16, 25, 28]), '-1');
    });
    it('should return 0 as value for non Array', function () {
      assert.equal(myApp.aritGeo(16), '0');
    });
    it('should return undefined as value for invalid numbers', function () {
      assert.equal(myApp.aritGeo(['ac', '12', 'a3']), 'undefined');
    });
  });
});
