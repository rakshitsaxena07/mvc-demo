const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// create database file
const dbPath = path.join(__dirname, "app.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log("DB connection error", err);
    } else {
        console.log("Connected to SQLite DB");
    }
});

// create table
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )
`);
module.exports = db;
