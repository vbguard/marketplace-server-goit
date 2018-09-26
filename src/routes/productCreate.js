const fs = require("fs");
const path = require("path");
const uuidv4 = require('uuid/v4');

const productCreate = (request, response) => {
  console.log('productCreate RUN');
  let dataIncome = "";

  request.on("data", data => {
    dataIncome += data;
    fs.writeFile(`./assets/products/product-${uuidv4()}.json`, data, err => {
      if (err) console.log(err);
    });
  }).on("end", () => {
    const dataParse = JSON.parse(dataIncome);
    const responseDataStatus = {
      "status": "success",
      "product": {
        "name": dataParse.name,
        "description": dataParse.phone,
        "price": dataParse.price,
        "currency": dataParse.currency,
        "categories": dataParse.categories,
      },
    };

    response.statusCode = 201;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(responseDataStatus));
  });
};

module.exports = productCreate;