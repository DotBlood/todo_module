const con = require("../../core/database")


async function chekUserInDB(username) {

    con.connect(function(err) {
        if (err) {
            return console.log("Error:: database ", err)
        }
        else {
            con.query("SELECT * FROM `user` WHERE `username` = ?",
                [username],
                function (err, result) {
                    if (err) return console.log(err);

                    else{

                        console.log(result)

                        con.end((err) => {
                            if (err) return console.log(err);
                        })


                    }

                })
        }
    })
}


module.exports = chekUserInDB