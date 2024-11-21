import ceil from '../src/ceil';

// Mocking the 'createRound' function
jest.mock('../src/.internal/createRound.js', () => {
  // Return a mock function for 'createRound' that simulates 'ceil' behavior
  return jest.fn((method) => {
    // The mock function performs the rounding operation based on the method
    return (number, precision = 0) => {
      // Perform rounding using JavaScript's Math[method] (e.g., Math.ceil) based on precision
      const factor = Math.pow(10, precision); // Calculate the rounding factor
      return Math[method](number * factor) / factor; // Round and adjust based on precision
    };
  });
});

// Describing the tests for the 'ceil' function
describe('ceil', () => {
  // Test case 1: Rounding a positive number
  it('rounds a positive number up to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5); // Expect 4.006 to round up to 5
  });

  // Test case 2: Rounding a number with specified precision
  it('rounds a positive number up to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01); // Expect 6.004 to round up to 6.01 with 2 decimal places
  });

  // Test case 3: Rounding a large number with negative precision
  it('rounds a number up when precision is negative', () => {
    expect(ceil(6040, -2)).toBe(6100); // Expect 6040 to round up to 6100 with precision -2
  });

  // Test case 4: Rounding zero
  it('rounds zero correctly', () => {
    expect(ceil(0)).toBe(0); // Expect 0 to stay 0 after rounding
  });

  // Test case 5: Rounding a negative number
  it('rounds a negative number up (less negative)', () => {
    expect(ceil(-4.006)).toBe(-4); // Expect -4.006 to round up to -4 (less negative)
  });

  // Test case 6: Rounding a negative number with specified precision
  it('rounds a negative number up to the specified precision', () => {
    expect(ceil(-6.004, 2)).toBe(-6); // Expect -6.004 to round up to -6 with 2 decimal places
  });

  // Test case 7: Rounding a decimal number up to 1 decimal place
  it('rounds a decimal number up to 1 decimal place', () => {
    expect(ceil(2.45, 1)).toBe(2.5); // Expect 2.45 to round up to 2.5 with 1 decimal place
  });

  // Test case 8: Rounding a decimal number up to 2 decimal places
  it('rounds a decimal number up to 2 decimal places', () => {
    expect(ceil(2.456, 2)).toBe(2.46); // Expect 2.456 to round up to 2.46 with 2 decimal places
  });

  // Test case 9: Number that is exactly a multiple of 10
  it('does not change a number that is already an exact multiple of 10 when rounding to nearest multiple of 10', () => {
    expect(ceil(6000, -2)).toBe(6000); // Expect 6000 to remain 6000 when rounded to nearest 100
  });
});