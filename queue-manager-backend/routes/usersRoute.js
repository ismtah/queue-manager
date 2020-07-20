const { userCtrl } = require("../controllers/userController")

module.exports = function (app) {
    let userCtrl = require('../controllers/userController');

    app.route('/user')
        .post(userCtrl.createUser)
        .get(userCtrl.getUser);

    app.route('/user/login')
        .post(userCtrl.login);
}
