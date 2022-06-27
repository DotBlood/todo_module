//import modulesql
const configsql = require('../../config/sql.json');
const db = require("../../core/database")
const bcrypt = require('bcrypt')


function register(req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const password_confirm = req.body.password_confirm
    const ip = req.connection.remoteAddress

    if (!username || !password || !password_confirm || !email) {
        return res.status(400).json({ Error: "Вы заполнили не все данные!" })
    } else {
        if (password !== password_confirm) {
            console.log('Пороли не совпали!')
            return res.status(400).json({ password: "Пароли не совпали!" })
        } else {
            db.connect(err => {
                if (err) return console.log(err)
                else {
                    db.query(configsql.auth.ChekUserInDB, [username, email], async (err, result) => {
                        if (err) return console.log(err)
                        else {
                            if (result[0] == null) {
                                try {
                                    const slat = await bcrypt.genSalt()
                                    const hashendPassword = await bcrypt.hash(password, slat)

                                    db.query(configsql.auth.register, [username, hashendPassword, email, 1, ip], (err, result) => {
                                        if (err) return console.log(err)
                                        else {
                                            return res.status(200).send()
                                        }
                                    })
                                } catch (e) {
                                    console.log(e)
                                    return res.status(500).send()
                                }
                            }
                            else {
                                return res.status(401).json({ password: "login или email уже занят" })
                            }
                        }
                    })
                }
            })
        }
    }
}


function login(req, res, result) {

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.status(400).json({ Error: "Вы ввели не все данные!" }).redirect("/auth/login")
    } else {
        db.connect(err => {
            if (err) return console.log(err)
            else {
                db.query(configsql.auth.login, [username, username], async (err, result) => {
                    if (err) return console.log(err)
                    else {
                        if (result[0] == null) {
                            res.status(401).json({ error: 'Неверный login или email' })
                        }
                        else {
                            try {
                                if (await bcrypt.compare(password, result[0].password)) {
                                    return res.status(200).json('good')
                                } else {
                                    return res.status(401).json({ error: "Неверный пароль" })
                                }
                            }
                            catch (e) {
                                console.log(e)
                                return res.status(500).send()
                            }
                        }
                    }
                })
            }
        });
    }
}


module.exports = { register, login }