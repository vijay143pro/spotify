const mongoose = require("mongoose");

module.exports = async () => {
	try {
		await mongoose.connect("mongodb+srv://vijayaragavan:suryajabro@cluster0.tl9mitk.mongodb.net/?retryWrites=true&w=majority");
		console.log("connected to database successfully");
	} catch (error) {
		console.log("could not connect to database.", error);
	}
};
