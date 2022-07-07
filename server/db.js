const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://localhostdb:Password@crud.qpgmk31.mongodb.net/LoginUser?retryWrites=true&w=majority", connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
