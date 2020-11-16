const { prepareResponse } = require('../helpers/lambda-response-helper');
const response1 = require('../sampleOutputResponse1.json');
const response2 = require('../sampleOutputResponse2.json');
const defaultResponse = require('../sampleOutputResponseDefault.json');

module.exports.processDynamicPost = async (event) => {
  const requestObject = JSON.parse(event.body);
  switch (requestObject.InputValue) {
    case 'Saurav':
      return prepareResponse(response1, 200);
    case 'Amit':
      return prepareResponse(response2, 200);
    default:
      return prepareResponse(defaultResponse, 200);
  }
};
