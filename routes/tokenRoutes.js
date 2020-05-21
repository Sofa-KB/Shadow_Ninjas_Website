const db = require('../models');

module.exports = function (app) {
    app.post('/api/UserToken', function (req, res) {
        db.UserToken.create({
            userName: { userName },
            userToken: { userToken }
        }).then(function(dbToken){
            res.json(dbToken)
        })
    })
}
    app.get('/api/userToken', function (req, res){
        db.UserToken.findOne({
            userName: { userName },
            userToken: { userToken }
        }).then(function(dbToken){
            console.log()
            res.json(dbToken)
        })
    })

