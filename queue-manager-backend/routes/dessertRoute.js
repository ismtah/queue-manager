
let dessertController = require('../controllers/dessertController');

module.exports = (app) => {

    app.route('/dessert/setupdesserts')
        .post(dessertController.setupDesserts)

    app.route('/dessert/create')
        .post(dessertController.createDessert);

    app.route('/dessert/update')
        .post(dessertController.updateDessert);

    app.route('/dessert/remove')
        .post(dessertController.removeDessert)
}
