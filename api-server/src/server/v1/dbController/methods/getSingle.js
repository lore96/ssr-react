import db from '../../../../db/db';

export default (req, res) => {
    const id = parseInt(req.params.id, 10);

    db.map((todo) => {
        if (todo.id === id) {
            return res.status(200).send({
                success: 'true',
                message: 'todo retrieved successfully',
                todo,
            });
        }
    });

    return res.status(404).send({
        success: 'false',
        message: 'todo does not exist',
    });
}
