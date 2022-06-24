const express = require("express");
const mongoose = require("mongoose");
const config = require("config")



// init rout
const clientRouter = require("./app/router/clientRoutersGet")
const authRouter = require("./app/router/authRouter")




const app = express();


let DB_URL = config.get("database.url")
let HOST_IP = config.get("host.ip")
let HOST_PORT = config.get("host.port")


app.use(clientRouter)
app.use(authRouter)

















// init server
mongoose.connect(DB_URL, (err) => {

    if (err) return console.error(err);

    else {
        console.info("INFO:: Database has started!")

        app.listen(HOST_PORT, HOST_IP, (err) => {

            if (err) return console.error(err);

            else {
                console.info("INFO:: Server has started!")
            }

        })
    }
})
