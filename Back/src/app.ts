import { Message } from './interfaces';
import { answers } from './answers';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3200;

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

let id: number = 0;

app.get('/', (req, res) => {
	console.log('wow');
	res.status(200).json({ message: "Hey there, everything's working fine!" });
});

app.post('/prompt', (req, res) => {
	const content: string = req.body.content;
	const answer: Message[] = [
		{
			content: content,
			id: `${id}`,
			origin: 'User',
		},
		{
			content: answers[Math.floor(Math.random() * answers.length)],
			id: `${id++}`,
			origin: 'User',
		},
	];
	id++;

	res.status(200).json(answer);
});

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
