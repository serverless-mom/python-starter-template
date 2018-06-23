var rp = require('request-promise-native');


var getData = async request =>{  // Log the request to the console.
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
}

console.log(getData({}))