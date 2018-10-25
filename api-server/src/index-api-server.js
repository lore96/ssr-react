import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
import serverGet from './server/server-get';
import serverPost from './server/server-post';
import serverGetSingle from './server/server-get-single';
import serverDelete from './server/server-delete';
import serverPut from './server/server-put';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all DB
app.get('/api/v1/db', (req, res) => {
    serverGet(res);
});

//POST to db
app.post('/api/v1/db', (req, res) => {
    serverPost(req, res);
});

app.get('/api/v1/db/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    serverGetSingle(res, id);
});

app.delete('/api/v1/db/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    serverDelete(res, id);
});

app.put('/api/v1/db/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    serverPut(req, res, id);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});