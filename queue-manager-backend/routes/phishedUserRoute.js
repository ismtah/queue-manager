
module.exports = function (app) {
    let phishedUserCtrl = require('../controllers/phishedUserController');

    app.route('/phisheduser/signup')
        .post(phishedUserCtrl.createUser)

    app.route('/phisheduser/getusers')
        .get(phishedUserCtrl.getUsers);


}
