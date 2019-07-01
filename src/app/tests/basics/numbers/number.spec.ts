import { incrementNumberMax100 } from './number';

describe('Numbers test', () => {

  it('should return a max number parameter', () => {
    const numberValue: number = incrementNumberMax100(100, 90);
    expect(numberValue).toBe(90);
  });

  it('should return a number', () => {
    const numberValue: number = incrementNumberMax100(90, 100);
    expect(numberValue).toBeGreaterThan(90);
  });

});
