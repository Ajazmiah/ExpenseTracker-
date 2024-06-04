import { add } from "./testJest";


test('adds two numbers', () => { 

    const sum = add(5, 5)

    expect(sum.toBe(10))
 })