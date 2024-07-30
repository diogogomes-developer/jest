import { add } from '../src/math';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should return negative for adding negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should handle zero correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 5)).toBe(5);
  });
});
