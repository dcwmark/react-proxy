/* server/api/routes/todos/index.js */

'use strict';

module.exports = (app) => {
    let todosController = require('../../controllers/todos');

    app.route('/api/todos')
        .get(todosController.listTodos);
};
