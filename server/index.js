// This is the starting point of our backend/server application
    // Node.js allows us to build a backend w Javascript
        // Express.js is a Node.js framework (Express:Node as React:JS)
    // MongoDB is where data is housed
        // Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
        // It manages relationships btwn data, provides schema validation (so that our backend can use data rcvd from db), 
        // and is used to translate between objects in code and the representation of those objects in MongoDB.

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// For every backend Express app, nd to initialize variable which can then be used in following lines:
const app = express();

// Enable Express app to send HTTP requests to DB:
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connect server app to DB. For DB, we're using MongoDB's Atlas which will host our DB on their cloud
const CONNECTION_URL = 'mongodb+srv://jjjchou:du2nnSnpo9A1qpip@cluster0.owawr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;      // Use port 3000 for dev but when we push app to heroku, heroku will populate actual port

mongoose.connect(CONNECTION_URL)                                                            // Connects Express/Node.js to DB. Returns a promise. 2nd param is optional.
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))     // If connection to DB is successful, Express app listens to the port 
    .catch((error) => console.log(error.message));

