import db from '../db/db'

export default (req, res) => {
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
    };

    db.push(newDb);
    
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        newDb
    });
}