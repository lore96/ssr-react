import db from '../db/db'

export default (req, res, id) => {
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
}
