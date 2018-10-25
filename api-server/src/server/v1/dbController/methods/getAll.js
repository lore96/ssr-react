import db from '../../../../db/db';

export default(res) => {
    return res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db,
    });
}
