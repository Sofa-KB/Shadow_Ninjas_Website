const db = require('../models');

module.exports = function (app) {
    app.get('/api/Events', function (req, res) {
        db.Event.findAll({}).then(function (dbEvent) {
            res.json(dbEvent)
        })
    })

    app.post('/api/Events', function (req, res) {
        db.Event.create({
            creator: req.body.creator,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            event_style: req.body.event_style,
            player_count: req.body.player_count,
            notes: req.body.notes
        }).then(function(dbEvent){
            res.json(dbEvent)
        })
    })
}