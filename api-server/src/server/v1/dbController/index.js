import getAll from './methods/getAll';
import getSingle from './methods/getSingle';
import createSingle from './methods/createSingle';
import updateSingle from './methods/updateSingle';
import deleteSingle from './methods/deleteSingle';

class DBController {
    getAllTodos(req, res) {
        getAll(res);
    }

    getTodo(req, res) {
        getSingle(req, res);
    }

    createTodo(req, res) {
        createSingle(req, res);
    }

    updateTodo(req, res) {
        updateSingle(req, res);
    }

    deleteTodo(req, res) {
        deleteSingle(req, res);
    }
}

const dbController = new DBController();

export default dbController;