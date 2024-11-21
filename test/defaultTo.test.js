import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  // Test case 1: The value is a valid number
  it('returns the value when it is a valid number', () => {
    expect(defaultTo(1, 10)).toBe(1); // 1 is not null or undefined, so it should return 1
  });

  // Test case 2: The value is undefined
  it('returns the default value when the value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10); // Since value is undefined, should return 10
  });

  // Test case 3: The value is null
  it('returns the default value when the value is null', () => {
    expect(defaultTo(null, 10)).toBe(10); // Since value is null, should return 10
  });

  // Test case 4: The value is NaN
  it('returns the value when the value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(NaN);  // NaN is considered a valid value, should return NaN
  });

  // Test case 5: The value is an empty string (edge case)
  it('returns the value when it is an empty string', () => {
    expect(defaultTo('', 10)).toBe(''); // Empty string should be returned as it is not null or undefined
  });

  // Test case 6: The value is 0 (edge case)
  it('returns the value when it is 0', () => {
    expect(defaultTo(0, 10)).toBe(0); // 0 should be returned as it is not null or undefined
  });

  // Test case 7: The value is false (edge case)
  it('returns the value when it is false', () => {
    expect(defaultTo(false, 10)).toBe(false); // false should be returned as it is not null or undefined
  });

  // Test case 8: The value is a valid object
  it('returns the value when it is an object', () => {
    expect(defaultTo({ name: 'John' }, 'Default')).toEqual({ name: 'John' }); // Should return the object as is
  });

  // Test case 9: The value is a valid array
  it('returns the value when it is an array', () => {
    expect(defaultTo([1, 2, 3], 'Default')).toEqual([1, 2, 3]); // Should return the array as is
  });

  // Test case 10: The value is a valid function
  it('returns the value when it is a function', () => {
    const fn = () => 'Hello';
    expect(defaultTo(fn, 'Default')).toBe(fn); // Should return the function as is
  });
});





