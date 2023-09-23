const mysql = require("mysql")

module.exports = async () => {
    let db = await mysql.createConnection({
        host: "ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
        user: "l6epeavfpjc0zzig",
        password: "rbeagb5ay9jchgk5",
        port: "3306",
        database: "r19s0yssr50jirmq"

    })

    return db;
}