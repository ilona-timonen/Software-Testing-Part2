import filter from '../src/filter';

describe('filter', () => {
  // Test case 1: Filter elements based on a simple predicate
  it('returns an array of elements that satisfy the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  // Test case 2: Empty array
  it('returns an empty array when the input array is empty', () => {
    const result = filter([], ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  // Test case 3: No elements pass the predicate
  it('returns an empty array when no elements satisfy the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([[]]);  // No active users, so should return an empty array
  });

  // Test case 4: All elements pass the predicate
  it('returns the same array when all elements satisfy the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual(users); // All users are active, so return the same array
  });

  // Test case 5: Predicate function that uses index and array
  it('uses index and array as arguments to the predicate function', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (value, index, array) => value % 2 === 0 && index > 2);
    expect(result).toEqual([4]); // Only number 4 satisfies the condition
  });

  // Test case 6: When the array is null or undefined
  it('returns an empty array when the input array is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });
});
