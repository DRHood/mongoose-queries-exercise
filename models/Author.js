const mongoose = require('../db/connection')
const Schema = mongoose.Schema

let authorSchema = new Schema({
	firstName: String,
	lastName: String,
	birthYear: Number,
	books: [{
		ref: 'Book',
		type: Schema.Types.ObjectId
	}]
})

module.exports = mongoose.model('Author', authorSchema)