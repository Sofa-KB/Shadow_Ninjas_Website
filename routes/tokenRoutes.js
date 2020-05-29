const db = require('../models');

module.exports = function (app) {

    app.get('/api/UserToken', function (req, res) {
        db.UserToken.findOne({
            UserName: req.body.battletag,
            UserToken: req.body.token,
        }).then(function (dbToken) {
            console.log()
            res.json(dbToken)
        })
    })

    app.post('/api/UserToken', function (req, res){
        db.UserToken.create({
            UserName: req.body.battletag,
            UserToken: req.body.token
        }).then(function(dbToken){
            res.json(dbToken)
        })
    })
}

