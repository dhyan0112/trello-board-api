const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGODB_URI
  };
  