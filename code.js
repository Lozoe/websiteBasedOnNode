var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('port', 3000)

app.get('/', function(req, res) {
    res.render('index', {title: 'this is a title'})
})