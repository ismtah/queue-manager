let Commande = require('../models/commandeModel');
const User = require('../models/userModel');

module.exports = {
    createCommande: (req, res) => {
        let commande = Commande.build(req.body);

        commande.save().then((commande) => {
            res.json({ status: true, message: "commande added successfully", commande: commande })
        }).catch((err) => {
            res.json({ status: false, message: "commande does not added", err: err })
        })
    },

    getCommandeByUser: (req, res) => {
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