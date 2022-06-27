const express = require("express");
const start_db = require("./core/DB_Start");
const config = require("config");



// init rout
const clientRouter = require("./app/router/clientRouters")
const authRouter = require("./app/router/authRouter");





const app = express();

let HOST_IP = config.get("host.ip")
let HOST_PORT = config.get("host.port")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())













//routs
app.use(clientRouter)
app.use("/auth", authRouter)




// init server
app.listen(HOST_PORT, HOST_IP, (err) => {
    if (err) return console.error(err);
    else {
        console.log("Сервер успешно запущен!");
        console.log("Ждем загрузку базы данных...");
        start_db
        
    }
})

