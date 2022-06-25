async function register(req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const password_confirm = req.body.password_confirm

    if (!username || !password || !password_confirm || !email) {
        console.log('Такой пользыватель уже существует!')
        return res.status(400).json({ Error: "Вы заполнили не все данные!" })
    }
    else {
        //волидация пароля
        if (password !== password_confirm) {
            console.log('Пороли не совпали!')
            return res.status(400).json({ password: "Пароли не совпали!" })
        } else {
            // const canditate = await UserShem.findOne({ username: username });
            if (canditate) {
                return res.status(409).json({ username: "Данный username уже существет" })
            } else {
                //   const canditate = await UserShem.findOne({ email: email });
                if (canditate) {
                    return res.status(409).json({ email: "Данный email Уже занят" })
                }
                else {


                    //ip_register: req.headers['x-forwarded-for'] || req.connection.remoteAddress

                    try {



                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }
    }
}

async function login(req, res) {

    const UsernameOrEmail = req.body.username
    const password = req.body.password

    if (!UsernameOrEmail || !password) {
        return res.status(400).json({ Error: "Вы ввели не все данные!" }).redirect("/login")
    }
    // проверка на существование email 
    else {
        //const canditate = await UserShem.findOne({ email: UsernameOrEmail })

        if (canditate) {

        } else if (!canditate) {
        //    const canditate = await UserShem.findOne({ username: UsernameOrEmail })
            if (canditate) {
                console.log(canditate)
            }
            else {
                console.log("restart")
            }

        }

    }

}





module.exports = { register, login }