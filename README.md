# Test Unitaire NestJS

Un projet de démonstration pour les tests unitaires avec NestJS et Vitest.

## Installation

```bash
npm install
```

## Tests

```bash
# Tests unitaires
npm run test

# Tests en mode watch
npm run test:watch

# Couverture des tests
npm run test:coverage

# Tests end-to-end
npm run test:e2e
```

## Structure du Projet

```
src/
├── utils/
│   ├── calculator.ts         # Classe de calcul
│   └── calculator.spec.ts    # Tests de la calculatrice
├── app.controller.ts         # Contrôleur principal
├── app.controller.spec.ts    # Tests du contrôleur
├── app.service.ts           # Service principal
└── app.module.ts            # Module racine
```

## Technologies

- NestJS
- TypeScript
- Vitest
- ESLint
- Prettier 