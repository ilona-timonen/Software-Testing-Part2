import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
    // Test case 1: Checking for null value
    it('returns true when value is null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    // Test case 2: Checking for undefined value
    it('returns true when value is undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    // Test case 3: Checking for boolean value
    it('returns true when value is a boolean', () => {
      expect(isEmpty(true)).toBe(true);
      expect(isEmpty(false)).toBe(true);
    });

    // Test case 4: Checking for a number
    it('returns true when value is a number', () => {
      expect(isEmpty(1)).toBe(true);
      expect(isEmpty(0)).toBe(true);
    });

    // Test case 5: Checking for non-empty array
    it('returns false when value is a non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    // Test case 6: Checking for an empty array
    it('returns true when value is an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    // Test case 7: Checking for non-empty string
    it('returns false when value is a non-empty string', () => {
      expect(isEmpty('abc')).toBe(false);
    });

    // Test case 8: Checking for an empty string
    it('returns true when value is an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    // Test case 9: Checking for non-empty arguments object
    it('returns false when value is a non-empty arguments object', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(false);
      })(1, 2, 3);
    });

    // Test case 10: Checking for an empty arguments object
    it('returns true when value is an empty arguments object', () => {
      (function() {
        expect(isEmpty(arguments)).toBe(true);
      })();
    });

    // Test case 11: Checking for non-empty buffer
    it('returns false when value is a non-empty buffer', () => {
      const buffer = Buffer.from([1, 2, 3]);
      expect(isEmpty(buffer)).toBe(false);
    });

    // Test case 12: Checking for an empty buffer
    it('returns true when value is an empty buffer', () => {
      const buffer = Buffer.alloc(0);
      expect(isEmpty(buffer)).toBe(true);
    });

    // Test case 13: Checking for non-empty typed array
    it('returns false when value is a non-empty typed array', () => {
      const typedArray = new Uint8Array([1, 2, 3]);
      expect(isEmpty(typedArray)).toBe(false);
    });

    // Test case 14: Checking for an empty typed array
    it('returns true when value is an empty typed array', () => {
      const typedArray = new Uint8Array(0);
      expect(isEmpty(typedArray)).toBe(true);
    });
});

  
  
