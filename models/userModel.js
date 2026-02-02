
const db = require("../database/db");

exports.getUsers = (callback) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        callback(rows);
    });
};

exports.addUser = (name) => {
    db.run("INSERT INTO users(name) VALUES (?)", [name]);
};
    
