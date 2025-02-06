import { Injectable } from '@nestjs/common';
import { Calculator } from '@utils/calculator';

@Injectable()
export class MathService {
  constructor(private calculator: Calculator) {}

  addNumbers(a: number, b: number): number {
    return this.calculator.add(a, b);
  }
} 