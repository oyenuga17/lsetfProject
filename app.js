//start with requiring express into our system.
const express = require("express");

 //require mongoose into the system.
const mongoose = require("mongoose");

//require port number
const port = process.env.PORT || 3000;

//connect to heroku
const cors = require("cors");

//We will then set up our express app
const app = express();
 
//connect  to the database online
const ONLINE_DB =
	"mongodb+srv://Oluwaseun1998:Oluwaseun1998@cluster0.rcifs.mongodb.net/praiseBookShop?retryWrites=true&w=majority";


mongoose
	.connect(ONLINE_DB, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Database is active`);
	});

app.use(cors());
app.use(express.json());
app.use("/", require("./component/controller"));

app.listen(port, () => {
	console.log(`port is listening`);
});
