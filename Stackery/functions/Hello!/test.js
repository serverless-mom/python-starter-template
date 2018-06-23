var rp = require('request-promise-native');


var getData = async request =>{  // Log the request to the console.
    let responseMessage = await rp('http://www.google.com')
    let response = {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html"
      },
      body: `<h2>${responseMessage}</h2>`
    };
    return response;
}

console.log(getData({}))