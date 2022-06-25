const mysql = require("mysql2");
const config = require("config")


const con = mysql.createConnection({
    host: config.get("database.host"),
    user: config.get("database.user"),
    password: config.get("database.password"),
    database: config.get("database.database")
});


module.exports = con
