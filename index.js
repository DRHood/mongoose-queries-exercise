const db = require('./db/connection')
const Author = require('./models/Author')
const Book = require('./models/Book').Book
const Category = require('./models/Book').Category

/* 
Follow the prompts and write your mongoose queries below each comment in here.

For each query you write, make sure you resolve the promise using .then() and
console.log() the result inside the .then() function

for example:
Author.find().then((author) => {
	console.log(author)
})

Pay attention to what each query returns. Some will return an array, others return an object.

*/

/* ------ PART 1 QUERIES ------ */

// Get a list of all the authors


// Get a list of all the books


// Get a list of all the categories and console log only the second one.


// Search for Robert Heinlein by lastName only


// Search for a single category with the name of "Fiction"


// What year was JK Rowling born in? Console log the year only


// How many books did Robert Jordan write? Console log the amount without counting manually


/* ------ PART 2 QUERIES ------ */ 

// Get a list of all the books Robert Heinlein has written


// Get a list of all the books JK Rowling has written


// Log the first book (in the query result, not necessarily by year) that JK Rowling wrote


// Log the name of every book Robert Heinlein has written


// Log all categories of the first book JK Rowling wrote
// Why didn't we have to .populate() the categories as well??


// Bonus: log the name of the book by robert jordan published in 1998