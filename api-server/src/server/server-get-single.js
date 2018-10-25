export default ( res, db, id) => {
    db.map((resource) => {
        if (resource.id === id) {
            return res.status(200).send({
                success: 'true',
                code: '200',
                message: resource.id + 'retrieved successfully',
                resource,
            });
        }
    });
    
    return res.status(404).send({
        success: 'false',
        code: '404',
        message:  +'404 Not found',
    });
}