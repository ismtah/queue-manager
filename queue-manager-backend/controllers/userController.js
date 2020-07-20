let User = require('../models/userModel.js')
let _ = require('lodash');
const Commande = require('../models/commandeModel.js');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = {
    createUser: (req, res) => {
        let user = User.build(req.body);
        //user.setDataValue('password', hashPassword(req.body.password))
        console.log("hello", hashPassword(req.body.password))
        if (!user.getDataValue('username') || !user.getDataValue('password') || !user.getDataValue('email')) {
            res.status(400).send({ status: false, message: "please provide all required fields" })
        }
        else {
            if (user.getDataValue('password') != req.body.confirmPassword) {
                res.json({ status: false, message: "you entered two different passwords" })
            } else {
                user.save().then((user) => {
                    res.json({ status: true, message: "user added successfully", user: user })
                }).catch((err) => {
                    console.log(err)
                    res.json({ status: false, message: "error message", error: err })
                })
            }
        }
    },

    login: async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        console.log(password, username)
        if (!username || !password) {
            res.json({ status: false, message: "some fields missing" });
        } else {
            User.findOne({
                where: {
                    [Op.and]: [
                        {
                            [Op.or]: [
                                {
                                    username: username
                                },
                                {
                                    email: username
                                }
                            ]
                        },
                        {
                            password: password
                        }
                    ]
                }
            }).then((user) => {
                if (user) {
                    res.json({ status: true, message: "log in successfully", user: user });
                } else {
                    res.json({ status: true, message: "your credentiels does not match any result", user: user });
                }

            }).catch(err => {
                res.json({ status: false, message: "can not log in", err: err });
            })
        }
    },

    getUser: async (req, res) => {
        let userId = req.query.id;
        if (!userId) {
            res.json({ status: false, message: "no user id provided" });
        } else {
            let user = User.findByPk(req.query.id, { attributes: { exclude: ['password'] }, include: [Commande] }).then((user) => {
                res.json({ status: true, message: "get user from database", user: user });
            }).catch(err => {
                res.json({ status: false, message: "error getting user from database", err: err });
            });
        }
    }
}

let hashPassword = async (password) => {
    let saltRounds = 10;
    let hash;
    await bcrypt.hash(password, saltRounds, (err, hash) => {
        console.log('hash', err, hash)
        if (err) {
            hash = '';
        } else {
            hash = hash;
        }
        return hash;
    })



}

