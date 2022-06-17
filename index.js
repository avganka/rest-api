const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;


// connect to mongoDB atlas
mongoose.connect(process.env.MONGO_URL)
.then(() => {
	console.log("Connected to mongoDB");
})
.catch((err) => {
	console.log('Something wrong happens', err);
})

app.listen(PORT, () => {
	console.log('Server started...', PORT);
});
