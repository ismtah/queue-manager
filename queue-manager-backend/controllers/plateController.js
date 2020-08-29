let fs = require('fs');
let Plat = require('../models/platModel');
let assiete = require('../services/assiete')

module.exports = {

    setupPlates: (req, res) => {
        try {
            let fileData = fs.readFileSync('./public/files/plats.txt', { encoding: 'utf8' });
            let platsObj = assiete.getDataFromFile(fileData);
            Plat.bulkCreate(platsObj, { ignoreDuplicates: true }).then((result) => {
                res.json({ success: true, result: result });
            }).catch(err => {
                res.json({ success: false, err: err })
            })
        } catch (error) {
            res.json({ success: false, err: error })
        }
    },

    createPlate: (req, res) => {
        Plat.create(req.body).then(plate => {
            res.json({ status: true, message: "plate added successfully", plate: plate })
        }).catch(err => {
            res.json({ status: false, message: "plate does not added ", err: err })
        })
    },

    updatePlate: (req, res) => {
        Plat.update(req.body, { where: { id: req.body.id } }).then((updatedPlate) => {
            res.json({ status: true, message: "plate updated successfully", updatedPlate: updatedPlate })
        }).catch(err => {
            res.json({ status: false, message: "plate does not updated ", err: err })
        })
    },

    removePlate: (req, res) => {
        Plat.destroy({
            where: {
                id: req.body.id
            }
        }).then(removedPlate => {
            res.json({ status: true, message: "plate removed successfully", removedPlate: removedPlate })
        }).catch(err => {
            res.json({ status: false, message: "plate does not removed ", err: err })
        })
    }


}