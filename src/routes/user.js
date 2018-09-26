const fs = require("fs");
const path = require("path");
const uuidv4 = require('uuid/v4');

const user = (request, response) => {
  let dataIncome = "";

  request.on("data", data => {
    dataIncome += data;

    fs.writeFile(`./src/services/db/user-${uuidv4()}.json`, data, err => {
      if (err) console.log(err);
    });
  });

  request.on("end", () => {
    const dataParse = JSON.parse(dataIncome);
    const responseStatus = {
      "status": "success",
      "user": {
        "name": dataParse.name,
        "phone": dataParse.phone,
      }
    }
    response.statusCode = 201;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(responseStatus));
  });
};

module.exports = user;