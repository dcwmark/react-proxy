/* server/api/routes/posts/index.js */

'use strict';

import * postsController from '../../controllers/posts';

module.exports = (app) => {
    app.route('/api/posts')
        .get(postsController.listPosts);

    app.route('/api/posts/bulkload')
        .get(postsController.loadPosts);
};
