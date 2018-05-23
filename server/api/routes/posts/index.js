/* server/api/routes/posts/index.js */

'use strict';

module.exports = (app) => {
    let postsController = require('../../controllers/posts');

    app.route('/api/posts')
        .get(postsController.listPosts);
};
