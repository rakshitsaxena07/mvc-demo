

const express = require("express");
const app = express();

const homeController = require("./controllers/homeController");


// tell express we are using ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", homeController.home);   //// for the req=/ ,call controller home function
app.post("/add", homeController.addUser);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
