var mongoose = require('mongoose');

var MovieSchema = new Schema({
	director: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String, // flash地址
	poster: String, // 海报地址
	year: Number,
	pv: {
		type: Number,
		default: 0
	},
	category: {
		type: ObjectId,
		ref: 'Category'
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
});

// Middleware! 为模式添加方法 pre save每次存储数据之前调用
MovieSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now(); // 创建时间和更新时间设置为当前时间
	} else{
		this.meta.updateAt = Date.now(); // 只更改更新时间
	}
	
	// MUST !!! USE !!! next()! 将存储流程走下去  必须滴啊用
	next(); 
});

//经过模型编译 实例化以后才能有 pre save的方法 statics
MovieSchema.statics = {
    fetch: function(cb) {
        return this
        .find({})
        .sort('meta.updateAt')
        .exec(cb) 
    },
    findById: function(id, cb) {
        return this
        .find({_id: id})
        .exec(cb) 
    }
}

module.exports = MovieSchema;