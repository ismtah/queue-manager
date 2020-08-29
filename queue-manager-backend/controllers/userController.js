let User = require('../models/userModel.js')
let _ = require('lodash');
const Commande = require('../models/commandeModel.js');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = {
    createUser: async (req, res) => {
        console.log(req.body)
        let user = User.build(req.body);
        let hashedPassword = await hashPassword(req.body.password);
        user.setDataValue('password', hashedPassword)

        //hashPassword(req.body.password)
        if (!user.getDataValue('username') || !user.getDataValue('password') || !user.getDataValue('email')) {
            res.status(400).send({ status: false, message: "please provide all required fields" })
        }
        else {
            if (req.body.password != req.body.confirmPassword) {
                res.json({ status: false, message: "you entered two different passwords" })
            } else {
                user.save().then((user) => {
                    res.json({ status: true, message: "user added successfully", user: user })
                }).catch((err) => {
                    res.json({ status: false, message: "error message", error: err })
                })
            }
        }
    },

    login: async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        if (!username || !password) {
            res.json({ status: false, message: "some fields missing" });
        } else {
            User.findOne({
                where: {
                    [Op.or]: [
                        {
                            username: username
                        },
                        {
                            email: username
                        }
                    ]
                }
            }).then(async (user) => {
                if (user) {
                    let isSamaPassword = await comparePassword(req.body.password, user['password']);
                    console.log('type of user', typeof user)
                    if (isSamaPassword) {
                        let miniUser = _.omit(user.toJSON(), ['password'])
                        res.json({ status: true, message: "log in successfully", user: miniUser });
                    } else {
                        res.json({ status: false, message: "password incorrect" });
                    }
                } else {
                    res.json({ status: true, message: "your credentiels does not match any result", user: user });
                }
            }).catch(err => {
                res.json({ status: false, message: "can not log in", err: err });
            })
        }
    },

    getUser: async (req, res) => {
        let userId = '20';
        if (!userId) {
            res.json({ status: false, message: "no user id provided" });
        } else {
            User.findByPk(userId, { attributes: { exclude: ['password'] }, include: [Commande] })
                .then((user) => {
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
    await bcrypt.hash(password, saltRounds).then((res) => {
        hash = res;
    })
    return hash;
}
let comparePassword = async (password, hashedPassword) => {
    let result;
    await bcrypt.compare(password, hashedPassword).then((res) => {
        result = res;
    })
    return result;
}

