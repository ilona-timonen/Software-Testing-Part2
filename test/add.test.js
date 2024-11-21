import add from '../src/add'; 


jest.mock('../src/.internal/createMathOperation.js', () => {
  // Creating a mock function for 'createMathOperation'
  return jest.fn((operation) => {
    // The mock function returns a new function that performs the operation
    // on the provided arguments (a, b)
    return (a, b) => {
      // If either 'a' or 'b' is not a number, throw an error
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Arguments must be numbers');
      }
      // If both are numbers, perform the operation and return the result
      return operation(a, b);
    };
  });
});

// Describing a set of tests for the 'add' function
describe('add', () => {
  // Test case 1: Adding two positive numbers
  it('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10); // Expect 6 + 4 to be 10
  });

  // Test case 2: Adding a positive and a negative number
  it('adds positive and negative numbers', () => {
    expect(add(6, -4)).toBe(2); // Expect 6 + (-4) to be 2
  });

  // Test case 3: Adding two negative numbers
  it('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10); // Expect -6 + (-4) to be -10
  });

  // Test case 4: Adding zero to a number
  it('adds zero to a number', () => {
    expect(add(6, 0)).toBe(6); // Expect 6 + 0 to be 6
  });

  // Test case 5: Throwing an error when arguments are not numbers
  it('throws an error when arguments are not numbers', () => {
    // Expect an error when one argument is a string
    expect(() => add(6, '4')).toThrow('Arguments must be numbers');
    expect(() => add('6', 4)).toThrow('Arguments must be numbers');
  });
});

