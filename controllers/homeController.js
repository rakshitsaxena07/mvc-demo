const userModel = require("../models/userModel");

exports.home = (req, res) => {
    userModel.getUsers((users) => {
        res.render("home", { users });
    });
};

exports.addUser = (req, res) => {
    const name = req.body.name;
    userModel.addUser(name);
    res.redirect("/");
};
