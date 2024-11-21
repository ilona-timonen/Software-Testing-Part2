import eq from '../src/eq';

describe('eq', () => {
  // Test case 1: Same primitive values (e.g., numbers, strings)
  it('returns true for the same primitive values', () => {
    expect(eq(1, 1)).toBe(true);  // 1 is the same as 1
    expect(eq('a', 'a')).toBe(true);  // 'a' is the same as 'a'
  });

  // Test case 2: Different objects with the same properties
  it('returns false for objects with the same properties', () => {
    const object1 = { a: 1 };
    const object2 = { a: 1 };
    expect(eq(object1, object2)).toBe(false);  // Objects are different, even though their properties are the same
  });

  // Test case 3: Comparing an object with itself
  it('returns true when comparing a value to itself', () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);  // Comparing an object to itself returns true
  });

  // Test case 4: Comparing NaN with NaN
  it('returns true when comparing NaN with NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);  // NaN is considered equal to NaN, unlike most other comparisons
  });

  // Test case 5: Comparing primitive vs. object with the same value
    it('returns false when comparing a primitive to an object with the same value', () => {
      expect(eq('a', Object('a'))).toBe(true);  // A primitive string and a String object are not considered equal
  });

  // Test case 6: Comparing null and undefined
  it('returns false when comparing null and undefined', () => {
    expect(eq(null, undefined)).toBe(true);  // null and undefined are same values
  });

  // Test case 7: Comparing different types (e.g., number vs object)
    it('returns false when comparing different types', () => {
     expect(eq(1, { a: 1 })).toBe(false);  // A number and an object with the same value are of different types and not considered equal
     expect(eq(false, 0)).toBe(true);  // false and 0 are considered equal
  });

  // Test case 8: Comparing equal values of the same type
  it('returns true for equal values of the same type', () => {
    expect(eq(10, 10)).toBe(true);  // 10 is equal to 10
    expect(eq('test', 'test')).toBe(true);  // 'test' is equal to 'test'
  });
});

