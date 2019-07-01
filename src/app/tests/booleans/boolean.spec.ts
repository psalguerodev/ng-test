import { isOlder } from './boolean';

describe('Booleans test', () => {

  it('should return a true is Older with 18', () => {
    const is18Older: boolean = isOlder(18);
    expect(is18Older).not.toBeFalsy();
  });

  it('should return a false is no older with 15', () => {
    const is15Older: boolean = isOlder(15);
    expect(is15Older).toBeFalsy();
  });

});
