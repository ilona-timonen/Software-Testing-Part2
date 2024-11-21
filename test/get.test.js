import get from '../src/get';

describe('get', () => {
  // Test case 1: Getting a nested value from an object using a path string
  it('returns the value at the path when the path exists', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).toBe(3); // Expected result is 3
  });

  // Test case 2: Getting a nested value using a path as an array
  it('returns the value at the path when the path is an array', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).toBe(3); // Expected result is 3
  });

  // Test case 3: Path does not exist, so return the default value
  it('returns the default value when the resolved value is undefined', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a[0].b.d', 'default');
    expect(result).toBe('default'); // Path does not exist, so it returns 'default'
  });

  // Test case 4: Object is null or undefined, so return the default value
  it('returns the default value when the object is null or undefined', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default'); // Object is null, so returns 'default'
    expect(get(undefined, 'a.b.c', 'default')).toBe('default'); // Object is undefined, so returns 'default'
  });

  // Test case 5: Path is an empty string or empty array
  it('returns undefined for empty path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, '')).toBe(undefined); // An empty path should return undefined
    expect(get(object, [])).toBe(undefined); // An empty path array should also return undefined
  });

  // Test case 6: The default value is provided and path does not exist
  it('returns the default value when the path does not exist and default value is provided', () => {
    const object = { 'a': { 'b': 2 } };
    const result = get(object, 'a.c', 'default');
    expect(result).toBe('default'); // Path does not exist, so return 'default'
  });

  // Test case 7: No default value is provided and path does not exist
  it('returns undefined when the path does not exist and no default value is provided', () => {
    const object = { 'a': { 'b': 2 } };
    const result = get(object, 'a.c');
    expect(result).toBe(undefined); // Path does not exist, so return undefined
  });

  // Test case 8: Path contains special characters or arrays
  it('returns correct value when path contains special characters or arrays', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).toBe(3); // Special character (array index) path
  });

  // Test case 9: Deeply nested object with various path elements
  it('returns the value for deeply nested paths', () => {
    const object = { 'a': { 'b': { 'c': { 'd': { 'e': 5 } } } } };
    const result = get(object, 'a.b.c.d.e');
    expect(result).toBe(5); // Expected result is 5
  });
});
