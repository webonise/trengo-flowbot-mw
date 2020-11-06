const { prepareResponse } = require('../helpers/lambda-response-helper');

module.exports.ping = async () => {
  return prepareResponse({ message: 'Trengo flowbot Service is up' }, 200);
};
