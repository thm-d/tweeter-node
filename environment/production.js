const path = require("path");
const env = require("../public/env.js");

module.exports = {
  dbUrl: `mongodb+srv://${env.DB_MONGO_USERNAME}:${env.DB_MONGO_PWD}@cluster0.wnkhhb6.mongodb.net/tweets?retryWrites=true&w=majority`,
  cert: "/etc/letsencrypt/live/www.thmd.ovh/fullchain.pem",
  key: "/etc/letsencrypt/live/www.thmd.ovh/privkey.pem",
  portHttp: 80,
  portHttps: 443,
};
