var express = require('express');
var db = require('../tempDB');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        var filter = req.query.filter;
        res.render('souls', {
            title: 'Souls',
            navItems: [
                {text:'Heroes',href:'/Souls?filter=Hero'},
                {text:'NPCs',href:'/Souls?filter=NPC'},
                {text:'Monters',href:'/Souls?filter=Monster'}
            ],
            soul: db.souls.filter(function(x) {
                return x.category === filter;
            })
        });
    });

router.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('soul', {
            title: 'Souls',
            navItems: [
                {text:'Heroes',href:'/Souls?filter=Hero'},
                {text:'NPCs',href:'/Souls?filter=NPC'},
                {text:'Monters',href:'/Souls?filter=Monster'}
            ],
            soul: db.souls[id]
        });
    });

module.exports = router;