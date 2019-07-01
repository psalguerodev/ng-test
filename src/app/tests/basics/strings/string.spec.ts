import { sayByName } from './string';

describe('String tests', () => {

  let sayPatrick;

  beforeEach(() => {
    sayPatrick = sayByName('Patrick');
    console.log('execture metho [sayByName]');
  });

  it('should return a string', () => {
    expect(typeof sayPatrick).toBe('string');
  });

  it('should return a string contain name', () => {
    expect(sayPatrick).toContain('Patrick');
    expect(sayPatrick).toContain('Hello');
  });
});
