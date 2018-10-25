import express from 'express';
import DBController from '../v1/dbController/index';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now(), 'Requested: ', req.url);
    next();
});

router.get('/api/v1/todos', DBController.getAllTodos);
router.get('/api/v1/todos/:id', DBController.getTodo);
router.post('/api/v1/todos', DBController.createTodo);
router.put('/api/v1/todos/:id', DBController.updateTodo);
router.delete('/api/v1/todos/:id', DBController.deleteTodo);

export default router;