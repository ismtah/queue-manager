module.exports = function (app) {
    let commandeCtrl = require('../controllers/commandeController')

    app.route('/commande')
        .post(commandeCtrl.createCommande);

    app.route('/commande/getCommandesByUserId')
        .get(commandeCtrl.getCommandeByUser)
}