let app = require('../app')
let entreeController = require('../controllers/entreeController');

module.exports = (app) => {

    app.route('/entree/setupentrees')
        .post(entreeController.setupEntrees)

    app.route('/entree/create')
        .post(entreeController.createEntree);

    app.route('/entree/update')
        .post(entreeController.updateEntree);

    app.route('/entree/remove')
        .post(entreeController.removeEntree)
}
