const mysql = require("mysql2");
const config = require("config")


const db = mysql.createConnection({
    host: config.get("database.host"),
    user: config.get("database.user"),
    password: config.get("database.password"),
    database: config.get("database.database"),
});


module.exports = db
