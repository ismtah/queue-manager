let fs = require('fs');
let Entree = require('../models/entreeModel');
let assiete = require('../services/assiete')

module.exports = {

    setupEntrees: (req, res) => {
        try {
            let fileData = fs.readFileSync('./public/files/entrees.txt', { encoding: 'utf8' });
            let entreesObj = assiete.getDataFromFile(fileData)
            Entree.bulkCreate(entreesObj, { ignoreDuplicates: true }).then((result) => {
                res.json({ success: true, result: result });
            }).catch(err => {
                res.json({ success: false, err: err })
            })
        } catch (error) {
            res.json({ success: false, err: error })
        }
    },

    createEntree: (req, res) => {
        Entree.create(req.body).then(entree => {
            res.json({ status: true, message: "entree added successfully", entree: entree })
        }).catch(err => {
            res.json({ status: false, message: "entree does not added ", err: err })
        })
    },

    updateEntree: (req, res) => {
        Entree.update(req.body, { where: { id: req.body.id } }).then((updatedEntree) => {
            res.json({ status: true, message: "entree updated successfully", updatedEntree: updatedEntree })
        }).catch(err => {
            res.json({ status: false, message: "entree does not updated ", err: err })
        })
    },

    removeEntree: (req, res) => {
        Entree.destroy({
            where: {
                id: req.body.id
            }
        }).then(removedEntree => {
            res.json({ status: true, message: "entree removed successfully", removedEntree: removedEntree })
        }).catch(err => {
            res.json({ status: false, message: "entree does not removed ", err: err })
        })
    }


}