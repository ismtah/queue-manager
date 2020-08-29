let fs = require('fs');
let Dessert = require('../models/dessertModel');
let assiete = require('../services/assiete')

module.exports = {

    setupDesserts: (req, res) => {
        try {
            let fileData = fs.readFileSync('./public/files/desserts.txt', { encoding: 'utf8' });
            let platsObj = assiete.getDataFromFile(fileData);
            Dessert.bulkCreate(platsObj, { ignoreDuplicates: true }).then((result) => {
                res.json({ success: true, result: result });
            }).catch(err => {
                res.json({ success: false, err: err })
            })
        } catch (error) {
            res.json({ success: false, err: error })
        }
    },

    createDessert: (req, res) => {
        Dessert.create(req.body).then(dessert => {
            res.json({ status: true, message: "dessert added successfully", dessert: dessert })
        }).catch(err => {
            res.json({ status: false, message: "dessert does not added ", err: err })
        })
    },

    updateDessert: (req, res) => {
        Dessert.update(req.body, { where: { id: req.body.id } }).then((updatedDessert) => {
            res.json({ status: true, message: "dessert updated successfully", updatedDessert: updatedDessert })
        }).catch(err => {
            res.json({ status: false, message: "dessert does not updated ", err: err })
        })
    },

    removeDessert: (req, res) => {
        Dessert.destroy({
            where: {
                id: req.body.id
            }
        }).then(removedDessert => {
            res.json({ status: true, message: "dessert removed successfully", removedDessert: removedDessert })
        }).catch(err => {
            res.json({ status: false, message: "dessert does not removed ", err: err })
        })
    }


}