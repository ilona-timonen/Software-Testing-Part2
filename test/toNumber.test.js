import toNumber from '../src/toNumber'; 


describe('toNumber', () => {

  // Test 1: When value is a number
  it('should return the number itself when value is a number', () => {
    expect(toNumber(5)).toBe(5);  // Returns 5
    expect(toNumber(-10.5)).toBe(-10.5);  // Returns -10.5
  });

  // Test 2: When value is a string representing a number
  it('should return the number when value is a string representing a number', () => {
    expect(toNumber('3.2')).toBe(3.2);  // Returns 3.2
    expect(toNumber('0')).toBe(0);  // Returns 0
    expect(toNumber('-10.5')).toBe(-10.5);  // Returns -10.5
    expect(toNumber('123')).toBe(123);  // Returns 123
  });

  // Test 3: When value is a string representing binary
  it('should return the number when value is a binary string', () => {
    expect(toNumber('0b101')).toBe(5);  // Binary '101' -> 5
    expect(toNumber('0b1001')).toBe(9);  // Binary '1001' -> 9
  });

  // Test 4: When value is a string representing octal
  it('should return the number when value is an octal string', () => {
    expect(toNumber('0o10')).toBe(8);  // Octal '10' -> 8
    expect(toNumber('0o17')).toBe(15);  // Octal '17' -> 15
  });

  // Test 5: When value is a string representing hexadecimal
  it('should return NaN when value is a bad hexadecimal string', () => {
    expect(toNumber('0x123g')).toBeNaN();  // Invalid hex
    expect(toNumber('0x0x')).toBeNaN();  // Invalid hex
  });

  // Test 6: When value is a symbol
  it('should return NaN when value is a symbol', () => {
    const symbol = Symbol('foo');
    expect(toNumber(symbol)).toBeNaN();  // Symbol -> NaN
  });

  // Test 7: When value is an object (not a primitive type)
  it('should return the number when value is an object', () => {
    const obj = { valueOf: () => 10 };
    expect(toNumber(obj)).toBe(10);  // Object with valueOf -> 10
  });

  // Test 8: When value is a string with leading or trailing spaces
  it('should trim the string and return the number when value has leading or trailing spaces', () => {
    expect(toNumber('  3.5  ')).toBe(3.5);  // Trim spaces -> 3.5
    expect(toNumber(' \t0o10 \n')).toBe(8);  // Trim spaces -> 8
  });

  // Test 9: When value is `null`
  it('should return 0 when value is null', () => {
    expect(toNumber(null)).toBe(0);  // Null -> 0
  });

  // Test 10: When value is `undefined`
  it('should return NaN when value is undefined', () => {
    expect(toNumber(undefined)).toBeNaN();  // Undefined -> NaN
  });

  // Test 11: When value is 0
  it('should return 0 when value is 0', () => {
    expect(toNumber(0)).toBe(0);  // Returns 0
    expect(toNumber('0')).toBe(0);  // String '0' -> 0
  });

  // Test 12: When value is an empty string
  it('should return 0 when value is an empty string', () => {
    expect(toNumber('')).toBe(0);  // Empty string -> 0
  });

});
