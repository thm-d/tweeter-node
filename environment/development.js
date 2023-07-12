const path = require("path");
const env = require("../public/env.js");

module.exports = {
  dbUrl: `mongodb+srv://${env.DB_MONGO_USERNAME}:${env.DB_MONGO_PWD}@cluster0.wnkhhb6.mongodb.net/tweets?retryWrites=true&w=majority`,
  key: path.join(__dirname, "../ssl/local.key"),
  cert: path.join(__dirname, "../ssl/local.crt"),
  portHttp: 3000,
  portHttps: 3001,
};
