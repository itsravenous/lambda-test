const data = require('./dep');

console.log(data);
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: data,
  });
};
