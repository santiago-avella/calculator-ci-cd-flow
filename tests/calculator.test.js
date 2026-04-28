const { add, subtract, multiply, divide, modulo, power } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('sums two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('sums negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('sums decimals', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('throws on non-number arguments', () => {
      expect(() => add('2', 3)).toThrow(TypeError);
      expect(() => add(2, null)).toThrow(TypeError);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts resulting in negative', () => {
      expect(subtract(3, 7)).toBe(-4);
    });

    test('throws on non-number arguments', () => {
      expect(() => subtract('5', 2)).toThrow(TypeError);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiplies by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('throws on non-number arguments', () => {
      expect(() => multiply('4', 2)).toThrow(TypeError);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides with decimals', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('throws on division by zero', () => {
      expect(() => divide(10, 0)).toThrow(Error);
    });

    test('throws on non-number arguments', () => {
      expect(() => divide('10', 2)).toThrow(TypeError);
    });
  });

  describe('modulo', () => {
    test('calculates modulo', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('modulo with equal numbers', () => {
      expect(modulo(5, 5)).toBe(0);
    });

    test('throws on division by zero', () => {
      expect(() => modulo(10, 0)).toThrow(Error);
    });

    test('throws on non-number arguments', () => {
      expect(() => modulo('10', 2)).toThrow(TypeError);
    });
  });

  describe('power', () => {
    test('calculates power', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('power with negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('throws on non-number arguments', () => {
      expect(() => power('2', 3)).toThrow(TypeError);
    });
  });
});