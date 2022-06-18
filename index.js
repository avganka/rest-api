import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Post from './models/posts.js';
import router from './routes/router.js';
import fileUpload from 'express-fileupload';

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());
app.use('/api', router);

// routes

app.post('/', async (req, res) => {
	try {
		const { author, title, content, picture } = req.body;
		const post = await Post.create({
			author,
			title,
			content,
			picture,
		});
		res.json(post);
	} catch (error) {
	res.status(500).json(error)
	}
})

async function start() {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
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
