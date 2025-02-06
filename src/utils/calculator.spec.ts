import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Calculator } from '@utils/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
    console.log('Test initialisé');
  });

  afterEach(() => {
    console.log('Test terminé');
  });

  describe('add', () => {
    it('devrait additionner deux nombres positifs', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('devrait gérer les nombres négatifs', () => {
      expect(calculator.add(-1, -1)).toBe(-2);
    });
  });

  describe('subtract', () => {
    it('devrait soustraire deux nombres', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('devrait gérer les nombres négatifs', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });
});