const messages = require('./messages');

const getMessage = code => {
  return messages[code];
};

exports.getMessage = getMessage;
