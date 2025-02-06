import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MathService } from './math.service';
import { Calculator } from '@utils/calculator';

describe('MathService', () => {
  let mathService: MathService;
  let mockCalculator: { 
    add: ReturnType<typeof vi.fn>;
    subtract: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    mockCalculator = {
      add: vi.fn(),
      subtract: vi.fn()
    };

    mathService = new MathService(mockCalculator as Calculator);
  });

  describe('addNumbers', () => {
    it('devrait appeler calculator.add avec les bons paramètres', () => {
      // Arrange
      mockCalculator.add.mockReturnValue(42);

      // Act
      const result = mathService.addNumbers(2, 3);

      // Assert
      expect(result).toBe(42);
      expect(mockCalculator.add).toHaveBeenCalledWith(2, 3);
      expect(mockCalculator.add).toHaveBeenCalledTimes(1);
    });
  });
}); 