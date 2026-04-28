# Calculadora — Taller DevSecOps

Calculadora básica en Node.js. Tu tarea es convertir este proyecto en uno **listo para producción** configurando un pipeline CI/CD con prácticas DevSecOps.

---

## Cómo ejecutar

```bash
npm install
node src/index.js <operación> <num1> <num2>
```

### Operaciones disponibles

| Operación  | Descripción              | Ejemplo                          |
|------------|--------------------------|----------------------------------|
| `add`      | Suma                     | `node src/index.js add 10 5`     |
| `subtract` | Resta                    | `node src/index.js subtract 9 3` |
| `multiply` | Multiplicación           | `node src/index.js multiply 4 7` |
| `divide`   | División                 | `node src/index.js divide 20 4`  |
| `modulo`   | Módulo (residuo)         | `node src/index.js modulo 10 3`  |
| `power`    | Potencia                 | `node src/index.js power 2 8`    |

---

## Estructura del proyecto

```
calculadora-taller/
├── src/
│   ├── calculator.js   ← Lógica de operaciones (NO modificar)
│   └── index.js        ← Punto de entrada CLI (NO modificar)
├── package.json        ← Aquí agregarás scripts
└── README.md
```

---

## Tu tarea — Checklist

Debes configurar **todo lo siguiente** sin modificar `src/calculator.js` ni `src/index.js`:

### 1. Tests (`/tests/`)
- [ ] Crear `tests/calculator.test.js` con al menos **15 casos de prueba**
- [ ] Cubrir casos felices y casos de error (división por cero, tipos inválidos)
- [ ] Lograr cobertura ≥ 80% de líneas
- [ ] Agregar al `package.json` los scripts: `test` y `test:ci`

### 2. Linting (`eslint`)
- [ ] Instalar y configurar ESLint
- [ ] Crear archivo de configuración `.eslintrc.js` o `eslint.config.js`
- [ ] El código fuente debe pasar el linter sin errores
- [ ] Agregar al `package.json` el script: `lint`

### 3. Dockerfile
- [ ] Crear un `Dockerfile` que construya y ejecute la aplicación
- [ ] Usar imagen base oficial de Node.js (versión LTS)
- [ ] Seguir buenas prácticas: usuario no-root, COPY selectivo, capas optimizadas

### 4. Pipeline CI/CD (`.github/workflows/pipeline.yml`)
- [ ] El pipeline debe tener **al menos 4 jobs** encadenados con `needs:`
- [ ] Incluir: build → calidad de código (SAST) → tests con cobertura → seguridad (SCA) → build Docker
- [ ] El build de Docker solo debe correr en la rama `main`
- [ ] Los jobs de calidad, tests y seguridad deben correr en paralelo

### 5. Seguridad
- [ ] El pipeline debe fallar si `npm audit` reporta vulnerabilidades HIGH o CRITICAL
- [ ] El pipeline debe verificar que no hay secretos hardcodeados en el código
- [ ] El Dockerfile no debe correr como `root`

---

## Criterios de evaluación

| Criterio                          | Puntos |
|-----------------------------------|--------|
| Tests funcionando con ≥80% cobertura | 25  |
| ESLint configurado y sin errores  | 15     |
| Dockerfile correcto y seguro      | 20     |
| Pipeline con todos los jobs       | 30     |
| Seguridad (audit + secretos)      | 10     |
| **Total**                         | **100**|

---

## Comandos que deben funcionar al final

```bash
npm install          # instala dependencias
npm run lint         # análisis estático sin errores
npm test             # corre tests y muestra cobertura
npm run test:ci      # tests en modo CI (sin watch, con reporte)
docker build -t calculadora .   # construye imagen
docker run calculadora add 10 5 # ejecuta en contenedor1
```
