const { prepareResponse } = require('../helpers/lambda-response-helper');
const sampleOutputResponse = require('../sampleOutputResponse.json');

module.exports.processDynamicPost = async (event) => {
  const requestObject = JSON.parse(event.body);
  console.log('Event body is %j', requestObject);

  return prepareResponse(sampleOutputResponse, 200);
};
