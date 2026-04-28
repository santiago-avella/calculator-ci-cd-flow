/**
 * Calculadora básica — Taller DevSecOps
 * Módulo principal con operaciones aritméticas.
 */

/**
 * Suma dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a + b;
}

/**
 * Resta dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a - b;
}

/**
 * Multiplica dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a * b;
}

/**
 * Divide dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

/**
 * Calcula el módulo (residuo) de la división.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('No se puede calcular módulo con divisor cero');
  }
  return a % b;
}

/**
 * Calcula la potencia de un número.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return Math.pow(base, exponent);
}

module.exports = { add, subtract, multiply, divide, modulo, power };
