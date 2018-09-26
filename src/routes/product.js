const fs = require('fs');
const path = require('path');

const product = (request, response) => {
  // Get All-Products file JSON
  const filePath = path.join(__dirname, '../../', 'assets', 'products', 'all-products.json');

  // Get product Id by request
  const getRequestId = request.url.split('/')[2];

  const products = fs.readFileSync('./assets/products/all-products.json', err => {
    if (err) throw err;
  });

  const jsonProducts = JSON.parse(products);

  const getProductById = jsonProducts.find(product => {
    return product.id === Number(getRequestId);
  });

  if (getProductById) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(getProductById));
    return
  }

  if (!getProductById) {
    response.writeHead(403);
    response.write('Nozing found, sorry!');
    response.end();
  }
};

module.exports = product;