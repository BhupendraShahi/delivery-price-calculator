const { configDotenv } = require("dotenv");
const { Client } = require("pg");
configDotenv();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    required: true,
  },
});

module.exports = client;