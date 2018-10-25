
export default (res, db) => {
    res.status(200).send({
        success: 'true',
        message: 'Resource retrived successfully',
        db: db
    });
};