const config = require("config");
const con = require("../../core/database");




con.connect(function (err) {
    if (err) {
        console.log(err)
    }
    con.query(config.get("sql_table.users"), function (err, results, fields) {
        if (err) {
            console.log(err)
        }
        console.log("INFO:: Таблица: users успешно загруженна!")
        con.query(config.get("sql_table.perms"), function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log("INFO:: Таблица: perms успешно загруженна!")
            con.query(config.get("sql_table.todo"), function (err, results, fields) {
                if (err) {
                    console.log(err)
                }
                console.log("INFO:: Таблица: todo успешно загруженна!")
                con.end(function (err) {
                    if (err) {
                        return console.log(err.message);
                    } else {
                        console.log("INFO:: Все таблицы успешно загружены!")
                    }
                })
            })
        })
    })
})


module.exports = { con }