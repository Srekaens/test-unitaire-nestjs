import { describe, it, expect, vi } from 'vitest';
import { MathService } from './math.service';
import { Calculator } from '@utils/calculator';

describe('MathService', () => {
  it('devrait utiliser le mock de Calculator', () => {
    // Mock de Calculator
    const mockCalculator = {
      add: vi.fn().mockReturnValue(42)
    };

    const mathService = new MathService(mockCalculator as Calculator);
    const result = mathService.addNumbers(2, 3);

    expect(result).toBe(42);
    expect(mockCalculator.add).toHaveBeenCalledWith(2, 3);
  });
}); 