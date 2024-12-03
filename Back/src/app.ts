import { Message } from './interfaces';
import { answers } from './answers';
import express from 'express';
import cors from 'cors';

// Configuring the application
const app = express();
const port = 3200;

// Allowing the front to communicate with the server
const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
	origin: allowedOrigins,
};
app.use(cors(options));

// Configure the application to read the body on the requests.
app.use(express.json());

// NOTE: On a real BE, we would keep track of this ID on the data base, 
// resetting the number for each new conversation
let messageID: number = 0; 

/**
 * Test endpoint to test server connectivity
 */
app.get('/', (req, res) => {
	console.log(`[${new Date().toISOString()}]\tGET Request called from ${req.headers.host}`);
	res.status(200).json({ message: "Hey there, everything's working fine!" });
});

/**
 * Returns result for prompts
 */
app.post('/prompt', (req, res) => {
	console.log(`[${new Date().toISOString()}]\tPOST Request called from ${req.headers.host}`);
	console.log(`[${new Date().toISOString()}]\tGenerating answer`);
	const content: string = req.body.content;
	const answer: Message[] = [
		{
			content: content,
			id: `${messageID}`,
			origin: 'User',
		},
		{
			content: answers[Math.floor(Math.random() * answers.length)],
			id: `${messageID++}`,
			origin: 'User',
		},
	];
	messageID++;

	res.status(200).json(answer);
});

/**
 * Listens to localhost on port 3200
 */
app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
