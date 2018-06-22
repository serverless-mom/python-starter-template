var http = require('http')
let fullText = ''
module.exports = async request => {
  // Log the request to the console.
  http.get('http://s3.amazonaws.com/unix-fortune/fortunes.txt', (res) => {
  const { statusCode } = res;

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
       fullText = rawData;
    } catch (e) {
      console.error(e.message);
    }
    let fullTextArray = fullText.split('%');
    let responseLine = fullTextArray[Math.floor(Math.random()*fullTextArray.length)];
    console.log(responseLine);

      // Build an HTTP response.
    let response = {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      body: responseLine
    };
  
    return response;
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
  console.log('Request:');
  console.dir(request);

};