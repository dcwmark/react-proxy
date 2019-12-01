/* server/api/routes/index.js */

"use strict";

module.exports = (app) => {
    let commentsRoutes = require('./comments');
    commentsRoutes(app);

    let postsRoutes = require('./posts');
    postsRoutes(app);

    let todosRoutes = require('./todos');
    todosRoutes(app);
};
