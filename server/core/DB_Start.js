const configsql = require('../config/sql.json');
const db = require("./database");

const start_db = db.connect(err => {
    if (err) {
        console.log(err)
    }
    db.query(configsql.start.users, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("INFO:: Таблица: users успешно загруженна!")
            db.query(configsql.start.perms, err => {
                if (!err) {
                    console.log("INFO:: Таблица: perms успешно загруженна!")
                    db.query(configsql.start.todo, err => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("INFO:: Таблица: todo успешно загруженна!")
                        }
                    });
                } else {
                    console.log(err)
                }
                ;
            });
        }
    });
});


module.exports = start_db