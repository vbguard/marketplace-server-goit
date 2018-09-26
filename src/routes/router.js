const main = require('./main');
const products = require('./products');
const product = require('./product');
const productCreate = require('./productCreate');
const user = require('./user');

const router = {
  '/products': products,
  '/product/create': productCreate,
  '/product': product,
  '/user/create': user,
  default: main
};

module.exports = router;