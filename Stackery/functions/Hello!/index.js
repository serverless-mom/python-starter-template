var rp = require('request-promise');

module.exports = async request => {  
  let responseMessage = await rp('http://www.google.com')
  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `<h2>${responseMessage}</h2>`
  };
  return response;
};