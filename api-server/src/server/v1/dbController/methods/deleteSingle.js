import db from '../../../../db/db';

export default (req, res) => {
    const id = parseInt(req.params.id, 10);

    let todoFound;
    let itemIndex;

    db.map((todo, index) => {
        if (todo.id === id) {
            todoFound = todo;
            itemIndex = index;
        }
    });

    if (!todoFound) {
        return res.status(404).send({
            success: 'false',
            message: 'todo not found',
        });
    }

    db.splice(itemIndex, 1);

    return res.status(200).send({
        success: 'true',
        message: 'Todo deleted successfuly',
    });
}