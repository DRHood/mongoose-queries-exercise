const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/query-exercise", {useNewUrlParser: true});
mongoose.Promise = Promise;
module.exports = mongoose;
