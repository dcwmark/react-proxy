/* server/api/routes/todos/index.js */

'use strict';

import * as todosController from '../../controllers/todos';

module.exports = (app) => {
    app.route('/api/todos')
        .get(todosController.listTodos);

    app.route('/api/todos/bulkload')
        .post(todosController.loadTodos);
};
