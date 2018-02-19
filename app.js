var express = require('express')
var path = require('path') 
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var _dirname = path.resolve();
var app = express() // 启动一个web服务器

app.set('views', './views/pages') // 设置视图的根目录
app.set('view engine', 'jade') // 设置默认的模板引擎
// app.use(express.bodyParser()) // 表单数据格式化
app.use(bodyParser.urlencoded({ extended: false })) // 新版的express中已经不包含bodyparser 单独引入
app.use(express.static(path.join(_dirname, 'bower_components'))) // bower_component查找

app.listen(port)

console.log('server strated on port ' + port)

// routes 
//-- index
app.get('/',function(req,res){
	res.render('index',{
		title:'movies 首页',
		movies:[{
			title:'jerry',
			poster:'./assets/images/001.png',
			_id:1

		},{
			title:'jerry',
			poster:'./assets/images/001.png',
			_id:1

		},{
			title:'jerry',
			poster:'./assets/images/002.png',
			_id:1

		},{
			title:'jerry',
			poster:'./assets/images/003.png',
			_id:1

		},{
			title:'jerry',
			poster:'./assets/images/001.png',
			_id:1

		},{
			title:'jerry',
			poster:'./assets/images/003.png',
			_id:1

		}
		]
	});

});
//-- List
app.get('/list',function(req,res){
	res.render('list',{
		title:'list 页',
		movies:[{
		    _id:1,
		    title: '机械战警',
		    director:'何塞.帕迪利亚',
		    year:2014,
		    country:'美国',
		    language:'英语',
		    poster: './assets/images/002.png',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述我'
		},{
		    _id:2,
		    title: '机械战警',
		    director:'何塞.帕迪利亚',
		    year:2012,
		    country:'美国',
		    language:'英语',
		    poster: './assets/images/001.png',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述'
		},
		{
				    _id:2,
				    title: '机械战警',
				    director:'何塞.帕迪利亚',
				    year:2012,
				    country:'美国',
				    language:'英语',
				    poster: './assets/images/001.png',
				    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
				    summary:'我是描述我是描述我是描述'
				}
		]
	});

});


//-- admin list
app.get('/admin/list',function(req,res){
	res.render('admin',{
		title:'movies 列表页',
		movies:[{
		    _id:1,
		    title: '机械战警',
		    director:'何塞.帕迪利亚',
		    year:2014,
		    country:'美国',
		    language:'英语',
		    poster: './assets/images/002.png',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述我'
		},{
		    _id:2,
		    title: '机械战警',
		    director:'何塞.帕迪利亚',
		    year:2012,
		    country:'美国',
		    language:'英语',
		    poster: './assets/images/001.png',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述'
		},
		{
            _id:2,
            title: '机械战警',
            director:'何塞.帕迪利亚',
            year:2012,
            country:'美国',
            language:'英语',
            poster: './assets/images/001.png',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述'
        }
		]
	});

});
//-- admin
// app.get('/admin/movie',function(req,res){
// 	res.render('admin',{
// 		title:'movies 后台录入',
// 	});

// });
//-- detail
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'movies 详情页',
		movie:{
			_id:1,
			title: '机械战警',
			director:'何塞.帕迪利亚',
			year:2014,
			country:'美国',
			language:'英语',
			poster: './assets/images/001.png',
			flash: 'http://player.youku.com/player.php/sid/XMTI4MDkyODA=/v.swf',
			summary:'Yes , you know what , i am the Summary for this!!'
		}
	});

});

//admin.page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'admin page this is a title 后台录入页',
        movie: {
            title: '',
			director:'',
			year: '',
			country:'',
			language:'',
			poster: '',
			flash: '',
			summary:''
        }
    })
})

// //index.page
// app.get('/', function(req, res) {
//     res.render('index', {
//         title: 'index page this is a title 首页'
//     })
// })

// //detail.page
// app.get('/movie/:id', function(req, res) {
//     res.render('detail', {
//         title: 'detail page this is a title 详情页 '
//     })
// })

// //list.page
// app.get('/admin/list', function(req, res) {
//     res.render('list', {
//         title: 'list page this is a title 列表页'
//     })
// })

// //admin.page
// app.get('/admin/movie', function(req, res) {
//     res.render('admin', {
//         title: 'admin page this is a title 后台录入页'
//     })
// })