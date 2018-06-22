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
      console.log(rawData);
      fullText = rawData;
    } catch (e) {
      console.error(e.message);
    }
    responseLine = fullText.split('\n')[Math.floor(Math.random()*items.length)]

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