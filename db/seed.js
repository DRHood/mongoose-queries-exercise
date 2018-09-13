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

function createData(cb) {
	Author.create({
		firstName: "JK",
		lastName: "Rowling",
		birthYear: 1961
	})
		.then(author => {
			Promise.all([
				Book.create({
					title: "Harry Potter and the Goblet of Fire",
					published: 2001,
					author: author
				}).then(book => {
					author.books.push(book)
					Promise.all([
						Category.create({
							name: "Young Adult"
						}).then(cat => {
							book.categories.push(cat)
						}),
						Category.create({
							name: "Fiction"
						}).then(cat => {
							book.categories.push(cat)
						})
					]).then(categories => {
						author.save(err => console.error(err))
						book.save()
					})
				}),
				Book.create({
					title: "Harry Potter and Sorcerer's Stone",
					published: 1999,
					author: author
				}).then(book => {
					Promise.all([
						Category.create({
							name: "Young Adult"
						}).then(cat => {
							book.categories.push(cat)
						}),
						Category.create({
							name: "Fiction"
						}).then(cat => {
							book.categories.push(cat)
						})
					]).then(categories => {
						author.save(err => console.error(err))
						book.save()
					})
				})
			])
		})
		.catch(err => {
			console.log(err)
		})
}
