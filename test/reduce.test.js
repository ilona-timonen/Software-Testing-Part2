import reduce from '../src/reduce'; // Import the reduce function

describe('reduce', () => {

  // Test 1: Reducing an array with an initial accumulator
  it('should correctly reduce an array with an initial accumulator', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce([1, 2, 3], sum, 0); // Start with 0
    expect(result).toBe(6); // 1 + 2 + 3 = 6
  });

  // Test 2: Reducing an empty array with an initial accumulator
  it('should return the initial accumulator for an empty array', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce([], sum, 0); // Start with 0
    expect(result).toBe(0); // No elements, should return the initial accumulator
  });

  // Test 3: Reducing an array without an initial accumulator
  it('should reduce an array without an initial accumulator', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce([1, 2, 3], sum); // No initial accumulator
    expect(result).toBe(6); // 1 + 2 + 3 = 6
  });

  // Test 4: Reducing an empty array without an initial accumulator
  it('should return undefined for an empty array without an initial accumulator', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce([], sum); // No initial accumulator
    expect(result).toBeUndefined(); // No elements and no accumulator
  });

  // Test 5: Reducing an object
  it('should correctly reduce an object', () => {
    const concatenateValues = (result, value, key) => result + value;
    const result = reduce({a: 1, b: 2, c: 3}, concatenateValues, ''); // Start with an empty string
    expect(result).toBe('123'); // '1' + '2' + '3' = '123'
  });

  // Test 6: Reducing an object without an initial accumulator
  it('should reduce an object without an initial accumulator', () => {
    const concatenateValues = (result, value, key) => result + value;
    const result = reduce({a: 1, b: 2, c: 3}, concatenateValues); // No initial accumulator
    expect(result).toBe(6); // Sum of the values: 1 + 2 + 3 = 6
  });

  // Test 7: Handling null as the collection
  it('should return the initial accumulator when collection is null', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce(null, sum, 0); // null collection, start with 0
    expect(result).toBe(0); // No collection to iterate over
  });

  // Test 8: Handling undefined as the collection
  it('should return the initial accumulator when collection is undefined', () => {
    const sum = (acc, value) => acc + value;
    const result = reduce(undefined, sum, 0); // undefined collection, start with 0
    expect(result).toBe(0); // No collection to iterate over
  });

  // Test 9: Testing that the iteratee is called with correct arguments
  it('should invoke the iteratee with correct arguments', () => {
    const mockIteratee = jest.fn((acc, value, index, collection) => acc + value);
    reduce([1, 2, 3], mockIteratee, 0); // Start with 0
    expect(mockIteratee).toHaveBeenCalledWith(0, 1, 0, [1, 2, 3]); // First call
    expect(mockIteratee).toHaveBeenCalledWith(1, 2, 1, [1, 2, 3]); // Second call
    expect(mockIteratee).toHaveBeenCalledWith(3, 3, 2, [1, 2, 3]); // Third call
  });

  // Test 10: Reducing a collection with a complex iteratee (e.g., grouping by a value)
  it('should correctly reduce a collection using a complex iteratee', () => {
    const groupByValue = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, groupByValue, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] }); // Group by value
  });

});
