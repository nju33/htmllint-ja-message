const {getMessage} = require('./htmllint-ja-messages');
const messages = require('./messages');

describe('htmllint-ja-message', () => {
  test('getMessage', () => {
    expect(getMessage('E000')).toBe(messages.E000);
  });
})
