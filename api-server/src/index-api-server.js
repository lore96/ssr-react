import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/index';
import accessControlMiddleware from './middleware/accessControl.Middleware';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add  Middleware set headers
app.use(accessControlMiddleware);

app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});