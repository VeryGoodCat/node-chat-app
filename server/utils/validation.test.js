const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var value = 5;

    expect(isRealString(value)).toBe(false);
  });

  it('should reject string with only spases', () => {
    var value = '   ';

    expect(isRealString(value)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var value = '   Cat';

    expect(isRealString(value)).toBe(true);
  });
});