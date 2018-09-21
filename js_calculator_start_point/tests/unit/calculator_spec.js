var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

// ***** UNIT TESTS START *****
  // Test run and passed
  it ('it can add together two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const result = calculator.runningTotal
    assert.equal(result, 5)
  })

// Test run and passed
  it ('can subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const result = calculator.runningTotal
    assert.equal(result, 3)
  })

// Test run and passed
  it ('can multiply one number by another', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const result = calculator.runningTotal
    assert.equal(result, 15)
  })

// Test run and passed
  it('can divide two numbers', function() {
   calculator.previousTotal = 21;
   calculator.divide(7);
   const result = calculator.runningTotal
   assert.equal(result, 3)
 })
 // **** UNIT TESTS END *****


 // ***** INTEGRATION TESTS START *****
// Test run and passed
  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(9);
    calculator.numberClick(9);
    const result = calculator.runningTotal;
    assert.equal(result, 99)
  })

// Test run and passed
  it('should chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.add(2);
    const result = calculator.runningTotal;
    assert.equal(result, 7)
  })

// Test run and passed
  it('should clear the running total without affecting the calculation', function(){
  calculator.numberClick(1);
  calculator.operatorClick("+");
  calculator.numberClick(1);
  calculator.clearClick();
  calculator.numberClick(9);
  calculator.operatorClick("=");
  const result = calculator.previousTotal;
  assert.equal(result, 10)
})
 // ***** INTEGRATION TESTS END *****
});
