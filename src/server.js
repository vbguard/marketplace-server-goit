const http = require('http');
const url = require('url');
const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');

const hostname = '127.0.0.1';

const startServer = port => {

  const server = http.createServer((request, response) => {
    // Get route from the request
    const parsedUrl = url.parse(request.url);

    // Clear url to first / in pathname
    function getFirstFlash(url) {
      console.log(url);
      if (url === '/products') return url;

      const splitUrl = url.split('/');

      if (splitUrl[2] === 'create') return url;

      if (splitUrl[1] === 'product') return `/${splitUrl[1]}`;

    };

    // Get router function
    const func = router[getFirstFlash(parsedUrl.pathname)] || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port, hostname, () => {
    console.log('=====>> ==> Server started on port ' + port + ' ^^');
  });
};

module.exports = startServer;