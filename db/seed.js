const Author = require("../models/Author")
const Book = require("../models/Book").Book
const Category = require("../models/Book").Category

Author.deleteMany({})
	.then(
		author => {
			Book.deleteMany().then(
				book => {
					Category.deleteMany().then(
						_ => {
							console.log("emptied, creating data now")
							createData()
						},
						rej => {
							console.log(rej)
						}
					)
				},
				rej => {
					console.log(rej)
				}
			)
		},
		rej => {
			console.log(rej)
		}
	)
	.catch(err => {
		console.log(err)
	})

function createData() {
	Author.create({
		firstName: "JK",
		lastName: "Rowling",
		birthYear: 1961
	}).then(author => {
		Promise.all([
			Category.create({
				name: "Young Adult"
			}),
			Category.create({
				name: "Fiction"
			})
		])
			.then(cats => {
				cats.forEach(cat => {
					cat.save()
					console.log(cat)
				});
				console.log('cats')
				Promise.all([
					Book.create({
						title: "Harry Potter and the Goblet of Fire",
						published: 2001,
						author: author
					}),
					Book.create({
						title: "Harry Potter and Sorcerer's Stone",
						published: 1999,
						author: author
					})
				]).then(books => {
					books.forEach(book => {
						author.books.push(book)
						book.categories.push(cats[0])
						book.save();
					})
					author.save()
				})
			})
			.catch(err => {
				console.log(err)
			})
	})
}
