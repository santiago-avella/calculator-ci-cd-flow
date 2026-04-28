#!/usr/bin/env node

/**
 * Calculadora básica — Interfaz de línea de comandos
 *
 * Uso:
 *   node src/index.js <operación> <num1> <num2>
 *
 * Operaciones disponibles:
 *   add, subtract, multiply, divide, modulo, power
 *
 * Ejemplos:
 *   node src/index.js add 10 5        → 15
 *   node src/index.js divide 20 4     → 5
 *   node src/index.js power 2 8       → 256
 */

const { add, subtract, multiply, divide, modulo, power } = require('./calculator');

const OPERATIONS = { add, subtract, multiply, divide, modulo, power };

function run(args) {
  const [operation, rawA, rawB] = args;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error('Uso: node src/index.js <operación> <num1> <num2>');
    console.error('Operaciones: add | subtract | multiply | divide | modulo | power');
    process.exit(1);
  }

  if (!OPERATIONS[operation]) {
    console.error(`Operación desconocida: "${operation}"`);
    console.error('Operaciones válidas: ' + Object.keys(OPERATIONS).join(', '));
    process.exit(1);
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Los argumentos deben ser números válidos');
    process.exit(1);
  }

  try {
    const result = OPERATIONS[operation](a, b);
    console.log(`${operation}(${a}, ${b}) = ${result}`);
    return result;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Solo ejecutar si es el módulo principal (no cuando se importa en tests)
if (require.main === module) {
  run(process.argv.slice(2));
}

module.exports = { run };
