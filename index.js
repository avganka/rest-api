import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './routes/root-router.js';
import fileUpload from 'express-fileupload';
import errorHandler from './middlewares/error-handler.js';

const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({
	createParentPath: true,
}));
app.use('/quiz', router);
app.use(errorHandler);

async function start() {
	try {
		await mongoose.connect(process.env.MONGO_LOCAL_URL, {
			useNewUrlParser: true,
		})
		console.log("Connected to mongoDB");
		app.listen(PORT, () => {
			console.log('Server has been started...', PORT);
		});
	} catch (err) {
		console.log('Something wrong happens', err);
	}
}

start();
