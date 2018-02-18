var express = require('express')
var port = process.env.PORT || 3000

var app = express() // 启动一个web服务器

app.set('views', './views') // 设置视图的根目录
app.set('view engine', 'jade') // 设置默认的模板引擎
app.listen(port)

console.log('server strated on port ' + port)

//index.page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'index page this is a title 首页'
    })
})

//detail.page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'detail page this is a title 详情页 '
    })
})

//list.page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'list page this is a title 列表页'
    })
})

//admin.page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'admin page this is a title 后台录入页'
    })
})