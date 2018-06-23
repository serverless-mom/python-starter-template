var rp = require('request-promise-native');

module.exports = async request => {  
  let res = await rp('https://s3.amazonaws.com/unix-fortune/fortunes.txt')
  res.responseType = ('text')
  let responseMessage = res.split('%').join(`<p>`)
  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `<h2>${responseMessage}</h2>`
  };
  return response;
};