var express = require('express');

var app = express();

var port = process.env.PORT || 1337;

var soulRouter = require('./src/routes/soulRouter');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Souls', soulRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Skald',
        navItems: [
            {text:'Souls',href:'/souls?filter=Hero'},
            {text:'Encounters',href:'/Ecounters'}
            ]
    });
});

app.listen(port, function (err) {
    console.log('Server listening on ' + port);
});