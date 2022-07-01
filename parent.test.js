const { parent } = require('./parent');
const { util } = require('./util');

jest.mock('./util');

describe('parent', () => {
  test('util is mocked', () => {
    const u = util();
    const p = parent();

    expect(u).toBe('mock');
    expect(p).toBe('mock');
  });
});
