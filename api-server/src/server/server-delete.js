
export default (res, db, id) => {
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
}