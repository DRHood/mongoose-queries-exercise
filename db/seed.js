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
		firstName: "Robert",
		lastName: "Heinlein",
		birthYear: 1907
	}).then(author => {
		Promise.all([
			Category.create({
				name: "Science Fiction"
			})
		]).then(cats => {
			cats.forEach(cat => {
				cat.save()
			})
			Promise.all([
				Book.create({
					title: "Stranger in a Strange Land",
					published: 1961,
					author: author
				}),
				Book.create({
					title: "Starship Troopers",
					published: 1959,
					author: author
				}),
				Book.create({
					title: "The Moon is a Harsh Mistress",
					published: 1966,
					author: author
				})
			]).then(books => {
				books.forEach(book => {
					author.books.push(book)
					book.categories.push(cats[0])
					book.save()
				})
				author.save()
				console.log("created author:", author.lastName)
			})
		})
	})

	Author.create({
		firstName: "Robert",
		lastName: "Jordan",
		birthYear: 1948
	}).then(author => {
		Promise.all([
			Category.create({
				name: "Fantasy"
			})
		]).then(cats => {
			cats.forEach(cat => {
				cat.save()
			})
			Promise.all([
				Book.create({
					title: "The Eye of the World",
					published: 1990,
					author: author
				}),
				Book.create({
					title: "The Great Hunt",
					published: 1990,
					author: author
				}),
				Book.create({
					title: "The Dragon Reborn",
					published: 1991,
					author: author
				}),
				Book.create({
					title: "The Shadow Rising",
					published: 1992,
					author: author
				}),
				Book.create({
					title: "The Fires of Heaven",
					published: 1993,
					author: author
				}),
				Book.create({
					title: "Lord of Chaos",
					published: 1994,
					author: author
				}),
				Book.create({
					title: "A Crown of Swords",
					published: 1996,
					author: author
				}),
				Book.create({
					title: "The Path of Daggers",
					published: 1998,
					author: author
				}),
				Book.create({
					title: "Winter's Heart",
					published: 2000,
					author: author
				}),
				Book.create({
					title: "Crossroads of Twilight",
					published: 2003,
					author: author
				}),
				Book.create({
					title: "Knife of Dreams",
					published: 2005,
					author: author
				}),
				Book.create({
					title: "The Gathering Storm",
					published: 2009,
					author: author
				}),
				Book.create({
					title: "Towers of Midnight",
					published: 2010,
					author: author
				}),
				Book.create({
					title: "A Memory of Light",
					published: 2013,
					author: author
				})
			]).then(books => {
				books.forEach(book => {
					author.books.push(book)
					book.categories.push(cats[0])
					book.save()
				})
				author.save()
				console.log("created author:", author.lastName)
			})
		})
	})

	Author.create({
		firstName: "JK",
		lastName: "Rowling",
		birthYear: 1965
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
				})
				Promise.all([
					Book.create({
						title: "Harry Potter and Sorcerer's Stone",
						published: 1997,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Chamber of Secrets",
						published: 1998,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Prisoner of Azkaban",
						published: 1998,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Goblet of Fire",
						published: 2000,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Order of the Phoenix",
						published: 2003,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Half-blood Prince",
						published: 2005,
						author: author
					}),
					Book.create({
						title: "Harry Potter and the Deathly Hallows",
						published: 2007,
						author: author
					})
				]).then(books => {
					books.forEach(book => {
						author.books.push(book)

						cats.forEach(cat => {
							book.categories.push(cat)
						})
						
						book.save()
					})
					author.save()
					console.log("created author:", author.lastName)
				})
			})
			.catch(err => {
				console.log(err)
			})
	})
}
