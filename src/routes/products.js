const fs = require('fs');
const path = require('path');

const products = (request, response) => {
  const filePath = path.join(__dirname, '../../', 'assets', 'products', 'all-products.json');
  const data = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': data.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
};

module.exports = products;