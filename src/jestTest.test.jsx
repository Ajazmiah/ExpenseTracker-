const { add } = require('./testJest');


test('adds two numbers', () => { 
    expect(add(5, 5)).toBe(10)
 })