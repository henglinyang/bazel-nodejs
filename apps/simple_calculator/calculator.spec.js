const Calculator = require('./calculator');
const calculator = new Calculator();

it('10 - 4 = 6 >', () => { 
  // testing the result from the calculator class if it will equal 6
    const expected_value = 6;
    expect(calculator.subtract(10,4)).toEqual(expected_value);
})
