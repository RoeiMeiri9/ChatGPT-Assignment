import { Message } from "../../Shared/interfaces";
import { answers } from "./answers";
import express from "express";
import cors from "cors";

// Configuring the application
const app = express();
const port = 3200;

// Allowing the front to communicate with the server
const allowedOrigins = ["http://localhost:4200"];
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
 * Printing the log with a default convention
 * @param log the message to be printed
 */
function printLog(log: string) {
  console.log(`[${new Date().toISOString()}]\t${log}`);
}

/**
 * Logging the request
 * @param req HTTP Request
 */
function logRequest(req: any) {
  printLog(`${req.method} Request called from ${req.headers.host}`);
}

/**
 * Test endpoint to test server connectivity
 */
app.get("/", (req, res) => {
  logRequest(req);
  res.status(200).json({ message: "Hey there, everything's working fine!" });
});

/**
 * Returns result for prompts
 */
app.post("/prompt", (req, res) => {
  // Logging
  logRequest(req);
  printLog("Generating answer");

  // Generating answer
  const content: string = req.body.content;
  const answer: Message[] = [
    {
      content: content,
      id: `${messageID}`,
      type: "Prompt",
    },
    {
      content: answers[Math.floor(Math.random() * answers.length)],
      id: `${messageID++}`,
      type: "Answer",
    },
  ];
  messageID++;

  // Returning answer
  res.status(200).json(answer);
});

/**
 * Listens to localhost on port 3200
 */
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
