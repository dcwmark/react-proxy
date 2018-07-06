/* server/api/controllers/todos/listTodos.js */

'use strict';

import * as models from '../../models';

module.exports = {
    listTodos: (req, res) => {
        const todo = models.Todo;
        todo.find({})
        .then( resolve => {
            res.json(resolve);
        })
        .catch( reject => {
            console.log(reject);
        });
    },
};
