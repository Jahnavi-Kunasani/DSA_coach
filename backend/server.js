import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// creating backend application
const app= express();
// for making the application understand the content written in .env ans it should be in the folder from where we are running the code here it is main folder
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1"
});

app.use(cors());
// making the backend application understand json without this it cant read the json format sent by react
app.use(express.json());
//  req is sent by client to the backend and res is sent by backend to the browser when ever a request is sent to route "/"
// get is used to send info from backend to client but no data can be sent from client
// this is the example of when u directly type url in the browser
app.get("/", (req, res) => {
    res.send("Backend is running!");
});
//  post is used when the client wants to send the data
// async because response from gemini might take some time

app.post("/analyze", async(req, res) => {
    const prompt = `
        You are an expert DSA mentor.

        Analyze the following solution.

        Problem:
        ${req.body.problemStatement}

        Approach:
        ${req.body.approach}

        Code:
        ${req.body.code}

                Return ONLY valid JSON in this format:

        {
        "correctness": "",
        "complexity": "",
        "missingPattern": "",
        "concepts": "",
        "hint": "",
        "similarProblems": ""
        }

        Do not include markdown.
        Do not include explanation outside the JSON.
        `;
    const completion = await client.chat.completions.create({

        model: "cohere/north-mini-code:free",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ]

    });
    const text = completion.choices[0].message.content;
    const analysis = JSON.parse(text);
    res.json(analysis);
   
   console.log(text);
    // this sends json for the res because reat understands json better
});
// on running node server.js the computer system will rent out port 5000 or any number written these for our backend application
app.listen(8000, () => {
    console.log("Server started on port 8000");
});