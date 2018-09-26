const fs = require('fs');

const errorRoute = (request, response) => {
  // const index = fs.readFile('./src/index.html');
  response.writeHead(404, {
    "Content-Type": "text/html"
  });
  response.write('<h1>Some wrong</h1>');
  response.end();
};

module.exports = errorRoute;