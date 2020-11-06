function prepareResponse(body, statusCode) {
  return {
    statusCode,
    body: JSON.stringify(body, null, 2),
  };
}

module.exports = {
  prepareResponse,
};
