// require mongoose
const mongoose = require("mongoose");

//set the structure of the data
const schemaStructure = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: [true, "This country already exist"],
	},
	author: { 
		type: String,
		required: true,
		unique: [true, "This name already exist"],
	},
	price: {
		type: Number,
		required: true,
	},
});
 
//export module
module.exports = mongoose.model("booklists", schemaStructure);
