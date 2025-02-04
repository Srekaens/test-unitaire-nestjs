import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from '@utils/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('devrait additionner 2 + 2 et obtenir 4', () => {
    const resultat = calculator.add(2, 2);
    expect(resultat).toBe(4);
  });

  it('devrait soustraire 5 - 3 et obtenir 2', () => {
    const resultat = calculator.subtract(5, 3);
    expect(resultat).toBe(2);
  });
});