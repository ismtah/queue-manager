const { userCtrl } = require("../controllers/userController")

module.exports = function (app) {
    let userCtrl = require('../controllers/userController');

    app.route('/user/signup')
        .post(userCtrl.createUser)

    app.route('/user/login')
        .get(userCtrl.getUser);

    app.route('/user/login')
        .post(userCtrl.login);
}
