import db from '../db/db'

export default (res) => {
    res.status(200).send({
        success: 'true',
        message: 'Resource retrived successfully',
        db: db
    });
};