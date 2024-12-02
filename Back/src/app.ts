import express from 'express';
import { Message } from './interfaces';
import { answers } from './answers';

const app = express();
const port = 3200;

let id: number = 0;

app.get('/', (req, res) => {
	console.log('wow');
	res.send('Hello World!');
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

	res.send(answer);
});

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
