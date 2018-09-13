const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let categorySchema = new Schema({
	name: String
})

let bookSchema = new Schema({
	title: String,
	published: Number,
	categories: [categorySchema],
	author: {
		ref: 'Author',
		type: Schema.Types.ObjectId
	}
})

module.exports = {
	Book: mongoose.model('Book', bookSchema),
	Category: mongoose.model('Category', categorySchema),
}