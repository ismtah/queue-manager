
let plateController = require('../controllers/plateController');

module.exports = (app) => {

    app.route('/plate/setupplates')
        .post(plateController.setupPlates)

    app.route('/plate/create')
        .post(plateController.createPlate);

    app.route('/plate/update')
        .post(plateController.updatePlate);

    app.route('/plate/remove')
        .post(plateController.removePlate)
}
