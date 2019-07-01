import { getNicknames } from './array';
describe('Arrays test', () => {

  let nicknames;

  beforeAll(function() {
    nicknames = getNicknames();
  });

  it('should return a array of 4 elements', () => {
    expect(nicknames.length).toBe(4);
  });

  it('should return a arrays contain nickname psalguero', () => {
    expect(nicknames).toContain('psalguerodev');
  });

  it('should return a object type', () => {
    expect(typeof nicknames).toBe('object');
  });

});
