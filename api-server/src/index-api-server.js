import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all DB
app.get('/api/v1/db', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'db retrieved successfully',
    db: db
  })
});

//POST to db
app.post('/api/v1/db', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }

 const newDb = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }

 db.push(newDb);
 
 return res.status(201).send({
   success: 'true',
   message: 'todo added successfully',
   newDb
 })
});

app.get('/api/v1/db/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  db.map((single) => {
    if (single.id === id) {
      return res.status(200).send({
        success: 'true',
        code: '200',
        message: single.id + 'retrieved successfully',
        single,
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    code: '404',
    message:  +'404 Not found',
  });
});

app.delete('/api/v1/db/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  db.map((dbToDelet, index) => {
    if (dbToDelet.id === id) {
       db.splice(index, 1);
       return res.status(200).send({
         success: 'true',
         code: 200,
         message: 'dbToDelet deleted successfuly',
       });
    }
  });

    return res.status(404).send({
      success: 'false',
      code: '404',
      message: '404 not found',
    });
});

app.put('/api/v1/db/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  let resourceFound;
  let itemIndex;

  db.map((resource, index) => {
    if (resource.id === id) {
      resourceFound = resource;
      itemIndex = index;
    }
  });

  if (!resourceFound) {
    return res.status(404).send({
      success: 'false',
      code: '404',
      message: 'resource not found',
    });
  }

  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      code: '404',
      message: 'title is required',
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      code: '404',
      message: 'description is required',
    });
  }

  const updatedDb = {
    id: resourceFound.id,
    title: req.body.title || resourceFound.title,
    description: req.body.description || resourceFound.description,
  };

  db.splice(itemIndex, 1, updatedDb);

  return res.status(201).send({
    success: 'true',
    message: 'resource added successfully',
    updatedDb,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});