import map from '../src/map'; 

describe('map', () => {

  // Test 1: Normal case - mapping over an array
  it('should apply the iteratee to each element of the array', () => {
    function square(n) {
      return n * n;
    }
    const result = map([4, 8], square);
    expect(result).toEqual([16, 64]);
  });

  // Test 2: Edge case - empty array
  it('should return an empty array when given an empty array', () => {
    const result = map([], (n) => n * n);
    expect(result).toEqual([]);
  });

  // Test 3: Edge case - null as input array
  it('should return an empty array when the input is null', () => {
    const result = map(null, (n) => n * n);
    expect(result).toEqual([]);
  });

  // Test 4: Edge case - undefined as input array
  it('should return an empty array when the input is undefined', () => {
    const result = map(undefined, (n) => n * n);
    expect(result).toEqual([]);
  });

  // Test 5: Function behavior - checking the index and array in the iteratee
  it('should correctly pass the value, index, and array to the iteratee', () => {
    const iteratee = (value, index, array) => {
      return `${value}-${index}-${array.length}`;
    };
    const result = map([1, 2, 3], iteratee);
    expect(result).toEqual(['1-0-3', '2-1-3', '3-2-3']);
  });

  // Test 6: Map over an array of strings (non-number elements)
  it('should work correctly with an array of strings', () => {
    const result = map(['a', 'b', 'c'], (value) => value.toUpperCase());
    expect(result).toEqual(['A', 'B', 'C']);
  });

  // Test 7: Map over an array of objects
  it('should correctly handle an array of objects', () => {
    const result = map([{ a: 1 }, { a: 2 }], (obj) => obj.a);
    expect(result).toEqual([1, 2]);
  });

  // Test 8: Map over an array with mixed types
  it('should work correctly with an array containing mixed types', () => {
    const result = map([1, 'a', { b: 2 }, null], (item) => {
      if (typeof item === 'number') return item * 2;
      if (typeof item === 'string') return item.toUpperCase();
      if (item && typeof item === 'object') return item.b;
      return null;
    });
    expect(result).toEqual([2, 'A', 2, null]);
  });

});
